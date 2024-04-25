// hooks.ts

import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
// src/hooks.server.js
// import { i18n } from '$lib/i18n.js'
// export const handle = i18n.handle()


function check_lang(lang: string | undefined) {
	const languages = ['en', 'tr'];
	if (lang && !languages.includes(lang)) {
		redirect(301, '/en');
	}
	return lang;
}

export const handle: Handle = async ({ event, resolve }) => {
	let lang: string | undefined = event.params.lang;
	// console.log("<-----hooks.ts----------->")
	// console.log("hostName:",event.url.hostname)
	// console.log("lang:",lang)


	lang = check_lang(lang);

	

	const response = await resolve(event);

	// Modify the response if needed

	return response;
};
