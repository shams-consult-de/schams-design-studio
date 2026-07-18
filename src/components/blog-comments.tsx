import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Icon } from "@/components/icon";

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

const commentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Bitte geben Sie Ihren Namen an.")
    .max(80, "Der Name darf höchstens 80 Zeichen lang sein."),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse an.")
    .max(254),
  content: z
    .string()
    .trim()
    .min(2, "Der Kommentar ist zu kurz.")
    .max(2000, "Der Kommentar darf höchstens 2000 Zeichen lang sein."),
});

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function BlogComments({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", content: "" });

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_comments")
        .select("id, author_name, content, created_at")
        .eq("post_slug", postSlug)
        .eq("approved", true)
        .order("created_at", { ascending: false });
      if (!cancelled) {
        if (error) console.error(error);
        setComments((data ?? []) as Comment[]);
        setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [postSlug]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    const parsed = commentSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Bitte prüfen Sie Ihre Eingaben.");
      return;
    }

    setSubmitting(true);
    const { error: insertError } = await supabase.from("blog_comments").insert({
      post_slug: postSlug,
      author_name: parsed.data.name,
      author_email: parsed.data.email,
      content: parsed.data.content,
      approved: false,
    });
    setSubmitting(false);

    if (insertError) {
      console.error(insertError);
      setError("Ihr Kommentar konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.");
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", content: "" });
  }

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-0" aria-labelledby="kommentare">
      <div className="border-t border-border pt-12">
        <h2 id="kommentare" className="font-serif text-3xl">
          Kommentare
        </h2>
        <p className="mt-2 text-sm text-brand-black/60">
          {loading
            ? "Kommentare werden geladen …"
            : comments.length === 0
              ? "Noch keine Kommentare — schreiben Sie den ersten."
              : `${comments.length} freigegebene${comments.length === 1 ? "r" : ""} Kommentar${comments.length === 1 ? "" : "e"}.`}
        </p>

        {comments.length > 0 && (
          <ul className="mt-8 space-y-6">
            {comments.map((c) => (
              <li key={c.id} className="rounded-xl border border-border bg-brand-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-brand-black">{c.author_name}</p>
                  <time
                    dateTime={c.created_at}
                    className="text-xs uppercase tracking-widest text-brand-black/50"
                  >
                    {formatDate(c.created_at)}
                  </time>
                </div>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-black/80">
                  {c.content}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-12 rounded-2xl border border-border bg-brand-white p-6 lg:p-8">
        <h3 className="font-serif text-2xl">Kommentar schreiben</h3>
        <p className="mt-2 text-sm text-brand-black/60">
          Ihre E-Mail-Adresse wird nicht veröffentlicht. Kommentare erscheinen nach kurzer
          Prüfung.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-brand-black">Name *</span>
            <input
              type="text"
              required
              maxLength={80}
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-lg border border-border bg-brand-white px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-brand-black">E-Mail *</span>
            <input
              type="email"
              required
              maxLength={254}
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-lg border border-border bg-brand-white px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
            />
          </label>
        </div>

        <label className="mt-4 block text-sm">
          <span className="mb-1 block font-medium text-brand-black">Kommentar *</span>
          <textarea
            required
            maxLength={2000}
            rows={5}
            value={form.content}
            onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
            className="w-full rounded-lg border border-border bg-brand-white px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
          <span className="mt-1 block text-right text-xs text-brand-black/40">
            {form.content.length}/2000
          </span>
        </label>

        {error && (
          <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </p>
        )}
        {success && (
          <p role="status" className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">
            Vielen Dank! Ihr Kommentar wurde übermittelt und erscheint nach der Freigabe.
          </p>
        )}

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xs text-brand-black/50">
            Mit dem Absenden erklären Sie sich mit unserer{" "}
            <a href="/datenschutz" className="underline hover:text-brand-accent">
              Datenschutzerklärung
            </a>{" "}
            einverstanden.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Icon name="paper-plane" className="text-sm" />
            {submitting ? "Wird gesendet …" : "Kommentar senden"}
          </button>
        </div>
      </form>
    </section>
  );
}
