-- Active: 1709591217055@@127.0.0.1@5432@postgres
create policy "Allow select for authenticated" 
on storage.objects 
for select 
to authenticated 
using (
  bucket_id = 'profiles'
);

create policy "Allow authenticated uploads to root" 
on storage.objects 
for insert 
to authenticated 
with check ( 
  bucket_id = 'profiles' and 
  (storage.foldername(name))[1] = auth.email()
);

create policy "Allow authenticated updates to email folder" 
on storage.objects 
for update 
to authenticated 
using ( 
  bucket_id = 'profiles' and 
  (storage.foldername(name))[1] = auth.email() 
);

create policy "Allow authenticated deletes from email folder" 
on storage.objects 
for delete 
to authenticated 
using ( 
  bucket_id = 'profiles' and 
  (storage.foldername(name))[1] = auth.email() 
);