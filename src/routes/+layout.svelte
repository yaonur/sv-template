<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
	import { availableLanguageTags } from '$paraglide/runtime';
	import { route } from '$lib/i18n-routing';
	import * as m from '$paraglide/messages';

	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;

	$: setLanguageTag(lang);
	// $: pathName = $page.url.pathname;
	if (browser && !availableLanguageTags.includes($page.params.lang as AvailableLanguageTag)) {
		console.log('path name wrong');
		goto(`/en`);
	}

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="flex gap-4">
	{#each availableLanguageTags as lang, i}
		<a href={route($page.url.pathname, lang)} hreflang={lang}> {lang}</a>
	{/each}
</div>
{#key lang}
	<div class="flex gap-4">
		<a href={route('signup', lang)}>{m._signUp()}</a>
		<a href={route('signin', lang)}>{m._signIn()} </a>
		<a href={route('grid', lang)}>{m._grid()}</a>
		<a href={route('profile', lang)}>Profile</a>
		<a href={route('', lang)}>Home</a>
		<a href={route('playground', lang)}>PlayGround</a>
	</div>
{/key}
{#key lang}
<p>user in layout: {data.session?.user.email}</p>
	<slot />
{/key}
