// hooks.ts

import type { Handle } from '@sveltejs/kit';
import { init, register, locale } from 'svelte-i18n';
import { redirect } from '@sveltejs/kit';

function check_lang(lang: string | undefined) {
	const languages = ['en', 'tr'];
	if (lang && !languages.includes(lang)) {
		throw redirect(301, '/en');
	}
	return lang;
}

export const handle: Handle = async ({ event, resolve }) => {
	let lang: string | undefined = event.params.lang;
	// console.log("<-----hooks.ts----------->")
	// console.log("hostName:",event.url.hostname)
	// console.log("lang:",lang)

	register('en', () => import('$lib/i18n/lang/en.json'));
	register('tr', () => import('$lib/i18n/lang/tr.json'));

	lang = check_lang(lang);

	init({
		fallbackLocale: 'en',
		initialLocale: lang
	});
	locale.set(lang);

	const response = await resolve(event);

	// Modify the response if needed

	return response;
};
