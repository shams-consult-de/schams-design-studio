import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Icon } from "@/components/icon";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Anmeldung — Shams Consult" },
      {
        name: "description",
        content: "Interner Zugang zur Kommentar-Moderation von Shams Consult.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Anmeldung — Shams Consult" },
      { property: "og:description", content: "Interner Zugang zur Kommentar-Moderation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (signInError) {
      setError("Anmeldung fehlgeschlagen. Bitte prüfen Sie E-Mail und Passwort.");
      return;
    }
    navigate({ to: "/moderation" });
  }

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-32">
      <h1 className="font-serif text-4xl">Anmeldung</h1>
      <p className="mt-3 text-sm text-brand-black/70">
        Interner Bereich für die Freigabe von Blog-Kommentaren.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-brand-black">E-Mail</span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border bg-brand-white px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-brand-black">Passwort</span>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-border bg-brand-white px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </label>

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          <Icon name="right-to-bracket" className="text-sm" />
          {loading ? "Wird angemeldet …" : "Anmelden"}
        </button>
      </form>
    </main>
  );
}
