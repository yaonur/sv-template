// hooks.ts

import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_URL_LOCAL, PUBLIC_SUPABASE_ANON_KEY_LOCAL,PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_ANON_KEY,PUBLIC_MODE } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import {api_url,anon_key} from "./consts"

function check_lang(lang: string | undefined) {
	const languages = ['en', 'tr', 'de'];
	if (lang && !languages.includes(lang)) {
		console.log('redirecting to en');
		redirect(301, '/en');
	}
	return lang;
}


export const handle: Handle = async ({ event, resolve }) => {
	let lang: string | undefined = event.params.lang;
	
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: api_url,
		supabaseKey: anon_key,
		event
	});

	lang = check_lang(lang);

	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
