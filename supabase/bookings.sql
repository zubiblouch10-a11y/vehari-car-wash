-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  service text not null,
  vehicle_type text not null,
  area text not null,
  address text not null,
  preferred_date date not null,
  preferred_time text not null,
  message text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now()
);

-- Row Level Security is enabled with no policies: the table is only
-- reachable through the server-side service_role key used by the app,
-- never directly from the browser.
alter table bookings enable row level security;
