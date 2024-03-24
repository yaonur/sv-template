-- Enable RLS;

ALTER
 
TABLE friend ENABLE ROW LEVEL SECURITY; CREATE POLICY insert_friend_request ON friend FOR INSERT WITH CHECK (auth.uid () IS NOT NULL );
CREATE POLICY update_status ON friend FOR UPDATE TO accept_status USING (auth.uid () = from_user) WITH CHECK 
	( auth.uid () = from_user); 
CREATE POLICY delete_messages ON friend FOR DELETE USING ( auth.uid () = from_user OR auth.uid () = to_user );