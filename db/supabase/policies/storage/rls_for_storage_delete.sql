-- Delete policy "Allow select for all"
DROP POLICY IF EXISTS "Allow select for authenticated" ON storage.objects;

-- Delete policy "Allow authenticated uploads to root"
DROP POLICY IF EXISTS "Allow authenticated uploads to root" ON storage.objects;

-- Delete policy "Allow authenticated updates to email folder"
DROP POLICY IF EXISTS "Allow authenticated updates to email folder" ON storage.objects;

-- Delete policy "Allow authenticated deletes from email folder"
DROP POLICY IF EXISTS "Allow authenticated deletes from email folder" ON storage.objects;