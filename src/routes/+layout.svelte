<script lang="ts">
	import Logo from '$logo/Logo.svg';
	import Home from '$icon/Home.svg' ;
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
		console.log("after update on layout.svelte")
		locale.set($page.params.lang || defaultLocale)
	})
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={Logo} />
</svelte:head>
<p>Example img svg as component</p>
<Home class="w-8" />

<p class="flex flex-auto bg-primary">{$_('_test')}</p>
<slot />
