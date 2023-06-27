// hooks.ts

import type { Handle } from '@sveltejs/kit';
import { init, register, locale } from 'svelte-i18n';

export const handle: Handle = async ({ event, resolve }) => {
	
	const lang = event.params.lang
	console.log("<-----hooks.ts----------->")
	console.log(event.url.hostname)
	console.log(lang)
	

	console.log("layout module")
	register('en', () => import('$lib/i18n/lang/en.json'));
	register('tr', () => import('$lib/i18n/lang/tr.json'));

	init({
		fallbackLocale: 'en',
		initialLocale: 'en'
	});
	if (lang) {
		locale.set(lang)
	} else{
		console.log("lang is null falling back to en ---------")
		locale.set('en')
	}
	console.log("<-----------hooks.ts----------->")
     


	const response = await resolve(event);

	// Modify the response if needed

	return response;
};
