-- 1. Rollen
create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create policy "Users can read their own roles"
on public.user_roles for select to authenticated
using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

-- 2. Kommentare: Insert nur noch serverseitig
drop policy if exists "Anyone can submit comments" on public.blog_comments;
revoke insert on public.blog_comments from anon, authenticated;

create policy "Moderators can read all comments"
on public.blog_comments for select to authenticated
using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

create policy "Moderators can update comments"
on public.blog_comments for update to authenticated
using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'))
with check (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

create policy "Moderators can delete comments"
on public.blog_comments for delete to authenticated
using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

grant update, delete on public.blog_comments to authenticated;
grant all on public.blog_comments to service_role;