import {
  PUBLIC_MODE,
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_ANON_KEY_LOCAL,
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_URL_LOCAL,
} from "$env/static/public";
let api_url:string;
let anon_key:string;
switch (PUBLIC_MODE) {
  case ("dev"):
	console.log("dev mode")
    api_url = PUBLIC_SUPABASE_URL_LOCAL;
    anon_key = PUBLIC_SUPABASE_ANON_KEY_LOCAL;
	break;
  case ("beta"):
	console.log("beta mode")
    api_url = PUBLIC_SUPABASE_URL;
    anon_key = PUBLIC_SUPABASE_ANON_KEY;
	break;
  default:
	console.log("production mode")
    api_url = PUBLIC_SUPABASE_URL;
    anon_key = PUBLIC_SUPABASE_ANON_KEY;
	break;
}
console.log("url:", api_url);
export { anon_key, api_url };

console.log("key:", anon_key);
