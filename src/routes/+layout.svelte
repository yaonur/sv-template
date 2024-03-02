<script lang="ts">
	import '../app.css'
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
	import { availableLanguageTags } from '$paraglide/runtime';
	import { route } from '$lib/i18n-routing';

	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;

	$: setLanguageTag(lang);
	// $: pathName = $page.url.pathname;
	if (browser && (!availableLanguageTags.includes($page.params.lang as AvailableLanguageTag))) {
		console.log("path name wrong");
		goto(`/en`);
	}

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<!-- {#each availableLanguageTags as lang, i}
	<a href={route($page.url.pathname, lang)} hreflang={lang}>Change language to {lang}</a>
{/each}
<div class="flex gap-4">
	<a href={route("signup",lang)}>Signup</a>
	<a href={route("signin",lang)}>Signin</a>
	<a href={route("grid",lang)}>Grid</a>
</div>
{#key lang}
	<slot />
{/key} -->
<slot></slot>

