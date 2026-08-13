import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { commentSchema, COMMENT_RATE_LIMIT_MS } from "@/lib/comments-schema";

export const submitComment = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => commentSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot: still Erfolg melden, aber nichts speichern.
    if ((data.website ?? "").trim() !== "") {
      return { ok: true as const };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const since = new Date(Date.now() - COMMENT_RATE_LIMIT_MS).toISOString();
    const { count } = await supabaseAdmin
      .from("blog_comments")
      .select("id", { count: "exact", head: true })
      .eq("author_email", data.email)
      .gte("created_at", since);

    if ((count ?? 0) > 0) {
      return {
        ok: false as const,
        error: "Bitte warten Sie eine Minute, bevor Sie erneut kommentieren.",
      };
    }

    const { error } = await supabaseAdmin.from("blog_comments").insert({
      post_slug: data.postSlug,
      author_name: data.name,
      author_email: data.email,
      content: data.content,
      approved: false,
    });

    if (error) {
      console.error("[comments] insert failed", error.message);
      return { ok: false as const, error: "Ihr Kommentar konnte nicht gespeichert werden." };
    }

    return { ok: true as const };
  });

export const listAllComments = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("blog_comments")
      .select("id, post_slug, author_name, author_email, content, approved, created_at")
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const setCommentApproval = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { id: string; approved: boolean }) => data)
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("blog_comments")
      .update({ approved: data.approved })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const deleteComment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("blog_comments").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const getMyModerationAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", context.userId);
    const roles = (data ?? []).map((r) => r.role);
    return { canModerate: roles.includes("admin") || roles.includes("moderator"), roles };
  });
