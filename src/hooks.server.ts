// src/hooks.server.js

import type { Handle } from '@sveltejs/kit'
import { i18n } from '$lib/i18n.js'
// export const handle = i18n.handle()

export const handle:Handle = async ({ event, resolve }) => {
	const response = await resolve(event)
	return response
}