// src/hooks.server.js

import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n.js';
// export const handle = i18n.handle()

// export const handle:Handle = async ({ event, resolve }) => {
// 	const response = await resolve(event)
// 	return response
// }

export const handle: Handle = async ({ event, resolve }) => {
	const response = await i18n.handle()({ event, resolve });

	if (response) {
		return response;
	}

	// not seems like necessary but better safe then sorry
	console.log('something went wrong returning svelte response');
	const svelteKitResponse = await resolve(event);
	return svelteKitResponse;
};
