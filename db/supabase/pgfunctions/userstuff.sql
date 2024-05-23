create or replace function get_current_user_id()
returns uuid
language plpgsql
as $$
begin
  return auth.uid();
end;
$$;