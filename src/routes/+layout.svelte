<script lang="ts">
	import "../app.css"
    import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n.js'
	import { availableLanguageTags, languageTag } from "$lib/paraglide/runtime.js"
	import { page } from '$app/stores'
	import LangSwitcher from "$ui/LangSwitcher/LangSwitcher.svelte";
	import Navbar from "$ui/Navbar/Navbar.svelte";


	const { children } = $props()
</script>

<ParaglideJS {i18n}>
	<LangSwitcher/>
	<Navbar/>
	{@render children()}
</ParaglideJS>

