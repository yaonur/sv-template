CREATE OR REPLACE FUNCTION vote(vote_value INTEGER)
RETURNS UUID
LANGUAGE plpgsql
AS $$
DECLARE
    user_uuid UUID;
    current_total_voted_times BIGINT;
    new_value NUMERIC;
BEGIN
    -- Get the current user's UUID
    user_uuid := auth.uid();

    -- Update the calculated table
    UPDATE public.calculated
    SET value = (CASE
                    WHEN total_voted_times IS NULL THEN vote_value
                    ELSE (value * total_voted_times + vote_value) / (total_voted_times + 1)
                END),
        total_voted_times = COALESCE(total_voted_times, 0) + 1
    WHERE id = user_uuid
    RETURNING id, total_voted_times, value INTO user_uuid, current_total_voted_times, new_value;

    -- Return the current user's UUID
    RETURN user_uuid;
END;
$$
 SECURITY DEFINER
    -- Set a secure search_path: trusted schema(s), then 'pg_temp'.
    SET search_path = service_role;
GRANT EXECUTE ON FUNCTION get_current_user_id() TO service_role;