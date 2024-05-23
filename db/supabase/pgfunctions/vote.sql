DROP FUNCTION vote(integer);
CREATE OR REPLACE FUNCTION vote(vote_value INTEGER)
RETURNS TABLE (user_uuid UUID, current_total_voted_times BIGINT, new_value NUMERIC)
LANGUAGE plpgsql
AS $$
DECLARE
    user_uuid UUID;
    current_total_voted_times BIGINT;
    new_value NUMERIC;
BEGIN
    user_uuid := auth.uid();

    UPDATE public.calculated
    SET average_vote = (CASE
                    WHEN total_voted_times IS NULL THEN vote_value
                    ELSE (average_vote * total_voted_times + vote_value) / (total_voted_times + 1)
                END),
        total_voted_times = COALESCE(total_voted_times, 0) + 1
    WHERE id = user_uuid
    RETURNING id, total_voted_times, average_vote INTO user_uuid, current_total_voted_times, new_value;

    RETURN QUERY SELECT user_uuid, current_total_voted_times, new_value;
END;
$$ SECURITY DEFINER
    SET search_path = service_role;