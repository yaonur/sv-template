import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
// const handleParaglide: Handle = i18n.handle();
// export const handle: Handle = handleParaglide;

export const handle: Handle = async ({ event, resolve }) => {
	// console.log("<-----hooks.ts----------->")
	// console.log("resolve:",resolve)
	// console.log("event:",event)
	// add a sample header to the response
	const response = await i18n.handle()({ event, resolve });
	response.headers.set('x-custom-header', 'hello world');
	// console.log("response:",response)
	const setCookie = response.headers.get('Set-Cookie');
	// console.log("Set-Cookie header:", setCookie);
	
	if (response) {
		return response;
	}
	
	
	
	
	console.log('something went wrong returning svelte response');
	const svelteKitResponse = await resolve(event);
	console.log("svelteKitResponse:",svelteKitResponse)
	return svelteKitResponse;
};

