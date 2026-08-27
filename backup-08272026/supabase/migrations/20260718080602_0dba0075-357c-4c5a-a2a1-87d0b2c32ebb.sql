
CREATE TABLE public.blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_slug text NOT NULL,
  author_name text NOT NULL CHECK (length(author_name) BETWEEN 1 AND 80),
  author_email text NOT NULL CHECK (length(author_email) BETWEEN 3 AND 254),
  content text NOT NULL CHECK (length(content) BETWEEN 1 AND 2000),
  approved boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX blog_comments_slug_approved_idx
  ON public.blog_comments (post_slug, approved, created_at DESC);

GRANT SELECT, INSERT ON public.blog_comments TO anon;
GRANT SELECT, INSERT ON public.blog_comments TO authenticated;
GRANT ALL ON public.blog_comments TO service_role;

ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

-- Anyone can read approved comments
CREATE POLICY "Public can read approved comments"
  ON public.blog_comments
  FOR SELECT
  TO anon, authenticated
  USING (approved = true);

-- Anyone can submit a new comment, but it starts unapproved
CREATE POLICY "Anyone can submit comments"
  ON public.blog_comments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (approved = false);
