<script lang="ts">
	import Logo from '$logo/Logo.svg';
	import '../app.css';
	import Navbar from '$ui/Navbar/';
	import {page} from "$app/stores";
	import {_} from 'svelte-i18n'
	import { init, register,locale} from 'svelte-i18n'
	import {afterUpdate} from "svelte";
	import type { ComponentType, SvelteComponent } from 'svelte'
	import type { SVGAttributes } from 'svelte/elements'

  
	type SvgComponent= ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>>>
	const defaultLocale = 'en'

	register('en', () => import('$lib/i18n/lang/en.json'))
	register('tr', () => import('$lib/i18n/lang/tr.json'))

	init({
		fallbackLocale: defaultLocale,
		initialLocale: $page.params.lang || defaultLocale,
	})
	locale.set($page.params.lang || defaultLocale)
	afterUpdate(()=>{
		locale.set($page.params.lang || defaultLocale)
	})
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={Logo} />
</svelte:head>
<Navbar  />
<slot />
