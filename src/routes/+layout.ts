import { waitLocale } from 'svelte-i18n'
import type { LayoutLoad } from './$types'
import { init, register } from 'svelte-i18n'


const defaultLocale = 'en'

register('en', () => import('$lib/i18n/lang/en.json'))
register('tr', () => import('$lib/i18n/lang/tr.json'))


export const load: LayoutLoad = async (page) => {
	init({
		fallbackLocale: defaultLocale,
		initialLocale: page.params.lang , 
	})
	await waitLocale()
}
