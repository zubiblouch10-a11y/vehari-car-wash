-- Use this ONLY if your Supabase project already had a `bookings` table with different columns
-- (e.g. car / date / time / total). It adds the columns the website needs and deletes nothing.
-- Supabase dashboard -> SQL Editor -> New query -> paste -> Run.

alter table bookings
  add column if not exists vehicle_type text,
  add column if not exists area text,
  add column if not exists address text,
  add column if not exists preferred_date date,
  add column if not exists preferred_time text,
  add column if not exists message text;

alter table bookings alter column status set default 'pending';
update bookings set status = 'pending' where status is null;

-- Server-only access (service_role key); the public anon key can read/write nothing.
alter table bookings enable row level security;

-- Make the API notice the new columns immediately.
notify pgrst, 'reload schema';
