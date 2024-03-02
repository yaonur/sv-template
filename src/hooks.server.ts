// hooks.ts

import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';

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
	// console.log("<-----hooks.ts----------->")
	// console.log("hostName:",event.url.hostname)
	// console.log("lang:",lang)
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	lang = check_lang(lang);

	const response = await resolve(event);
	const setCookie = response.headers.get('Set-Cookie');
	console.log('Set-Cookie header:', setCookie);
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	// console.log("response in hook:",response)
	// const setCookie = response.headers.get("auth-token");
	// console.log("setCookie:",setCookie)

	// Modify the response if needed

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
