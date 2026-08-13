import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  deleteComment,
  getMyModerationAccess,
  listAllComments,
  setCommentApproval,
} from "@/lib/comments.functions";
import { Icon } from "@/components/icon";

export const Route = createFileRoute("/_authenticated/moderation")({
  head: () => ({
    meta: [
      { title: "Kommentar-Moderation — Shams Consult" },
      { name: "description", content: "Freigabe und Verwaltung von Blog-Kommentaren." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Kommentar-Moderation — Shams Consult" },
      { property: "og:description", content: "Freigabe und Verwaltung von Blog-Kommentaren." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ModerationPage,
});

interface Row {
  id: string;
  post_slug: string;
  author_name: string;
  author_email: string;
  content: string;
  approved: boolean;
  created_at: string;
}

function ModerationPage() {
  const navigate = useNavigate();
  const checkAccess = useServerFn(getMyModerationAccess);
  const fetchAll = useServerFn(listAllComments);
  const approveFn = useServerFn(setCommentApproval);
  const removeFn = useServerFn(deleteComment);

  const [allowed, setAllowed] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const access = await checkAccess();
      setAllowed(access.canModerate);
      if (access.canModerate) setRows((await fetchAll()) as Row[]);
    } catch (err) {
      console.error(err);
      setError("Die Kommentare konnten nicht geladen werden.");
    } finally {
      setLoading(false);
    }
  }, [checkAccess, fetchAll]);

  useEffect(() => {
    void load();
  }, [load]);

  async function toggle(id: string, approved: boolean) {
    await approveFn({ data: { id, approved } });
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, approved } : r)));
  }

  async function remove(id: string) {
    await removeFn({ data: { id } });
    setRows((rs) => rs.filter((r) => r.id !== id));
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  const pending = rows.filter((r) => !r.approved);
  const published = rows.filter((r) => r.approved);

  return (
    <main className="mx-auto max-w-4xl px-6 py-32">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-serif text-4xl">Kommentar-Moderation</h1>
        <button
          type="button"
          onClick={signOut}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-brand-accent"
        >
          <Icon name="right-from-bracket" className="text-sm" />
          Abmelden
        </button>
      </div>

      {loading && <p className="mt-8 text-sm text-brand-black/60">Wird geladen …</p>}
      {error && (
        <p role="alert" className="mt-8 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}
      {!loading && allowed === false && (
        <p className="mt-8 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Ihr Konto hat keine Moderationsrechte. Bitte lassen Sie sich die Rolle „moderator“ oder
          „admin“ zuweisen.
        </p>
      )}

      {allowed && (
        <>
          <Section
            title={`Offen (${pending.length})`}
            rows={pending}
            onToggle={toggle}
            onDelete={remove}
          />
          <Section
            title={`Freigegeben (${published.length})`}
            rows={published}
            onToggle={toggle}
            onDelete={remove}
          />
        </>
      )}
    </main>
  );
}

function Section({
  title,
  rows,
  onToggle,
  onDelete,
}: {
  title: string;
  rows: Row[];
  onToggle: (id: string, approved: boolean) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl">{title}</h2>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-brand-black/60">Keine Einträge.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {rows.map((r) => (
            <li key={r.id} className="rounded-xl border border-border bg-brand-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-brand-black">
                  {r.author_name}{" "}
                  <span className="font-normal text-brand-black/50">({r.author_email})</span>
                </p>
                <time
                  dateTime={r.created_at}
                  className="text-xs uppercase tracking-widest text-brand-black/50"
                >
                  {new Date(r.created_at).toLocaleString("de-DE")}
                </time>
              </div>
              <p className="mt-1 text-xs text-brand-black/50">Beitrag: {r.post_slug}</p>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-black/80">
                {r.content}
              </p>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => onToggle(r.id, !r.approved)}
                  className="rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold text-brand-white"
                >
                  {r.approved ? "Freigabe zurückziehen" : "Freigeben"}
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(r.id)}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold hover:border-red-400 hover:text-red-700"
                >
                  Löschen
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
