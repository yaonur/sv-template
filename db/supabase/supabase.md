if keyring is not working when linking your project (damn WSL setup any solutions welcome) you can add 
export SUPABASE_DB_PASSWORD=your_password to your .env file
or export variable
```zsh
	export SUPABASE_DB_PASSWORD=your_password
```
make an alias for the project
```zsh
	alias sb="npx supabase"
```

list all projects
```zsh
	sb projects list
```
link to a project 
```zsh
	sb link --project-ref sxychmbeyviixmbojhnl
```
start and stop the server
```zsh
	sb start
	sb stop
```
resetting the db
```zsh
	sb db reset
```
check status of the db
```zsh
	sb status
```
generate your types 
```zsh
	sb gen types typescript --local > ./src/generated_schema.ts
	cp ./src/generated_schema.ts ../webv2/src/sb_schema.ts
```	



now let pull production data to the local db
```zsh
	sb db diff -f initial_structure --linked
```
!!! you need migrations directory in supabase

now we have created migrations we can run the following command to apply the migrations with resetting our current db
tables. Dont forget this will delete all the tables according to migration file
```zsh
	sb db reset
```
after you make developments you must create migrations with the following command on the local db
```zsh
	sb db diff -f some_migration_name
```
Now you can push the changes to production with the following command
```zsh
	sb db push
```

probably sb will cry about migrations table histories dont match
use the helpers from cli to solve them 

ERROR: relation "__drizzle_migrations_id_seq" already exists (SQLSTATE 42P07)
if you getting some error like this its because the migrations file you are trying to apply is already applied
so you should find and apply status applied to those migrations
```zsh
	sb migrations repair 20240303092552 --status applied
```
you can get owner error pushing migrations to production cause we are pushing changes with postgres user 
but if you created table on the dashboard of the production its owner is admin simply change the owner of the table
from admin to postgres
```sql
	ALTER TABLE table_name OWNER TO postgres
```
if you want to get data from db just run the following command
but dont do that or face the legal consequences
```zsh
	sb db dump --data-only
```




