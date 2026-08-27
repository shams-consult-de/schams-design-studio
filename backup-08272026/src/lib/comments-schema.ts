import { z } from "zod";

export const commentSchema = z.object({
  postSlug: z.string().trim().min(1).max(200),
  name: z
    .string()
    .trim()
    .min(1, "Bitte geben Sie Ihren Namen an.")
    .max(80, "Der Name darf höchstens 80 Zeichen lang sein."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(254),
  content: z
    .string()
    .trim()
    .min(2, "Der Kommentar ist zu kurz.")
    .max(2000, "Der Kommentar darf höchstens 2000 Zeichen lang sein."),
  // Honeypot – muss leer bleiben
  website: z.string().max(200).optional().default(""),
});

export type CommentInput = z.input<typeof commentSchema>;

export const COMMENT_RATE_LIMIT_MS = 60_000;
