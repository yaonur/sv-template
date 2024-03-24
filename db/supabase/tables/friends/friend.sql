create table
  public.friend (
    id uuid primary key default gen_random_uuid (),
    from_user uuid not null,
    to_user uuid not null,
    accept_status boolean not null,
    created_date timestamp with time zone not null default now(),
    constraint friends_from_user_fkey foreign key (from_user) references auth.users (id) on update cascade,
    constraint friends_to_user_fkey foreign key (to_user) references auth.users (id) on update cascade
  ) tablespace pg_default;