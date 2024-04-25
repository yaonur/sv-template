<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
	import { availableLanguageTags } from '$paraglide/runtime';
	import { route } from '$lib/i18n-routing';
	import * as m from '$paraglide/messages';

	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;

	$: setLanguageTag(lang);
	$: pathName = $page.url.pathname;
	console.log('pathName layout', $page.url.pathname);
	if (browser && ($page.url.pathname == '/' || !availableLanguageTags.includes(lang))) {
		// console.log("path name wrong");
		goto(`/en`);
	}
</script>

{#each availableLanguageTags as lang, i}
	<a href={route($page.url.pathname, lang)} hreflang={lang}>Change language to {lang}</a>
{/each}
<div>
	<a href={$page.params.lang + '/signup'}>{m._signUp()}</a>
</div>
{#key lang}
	<slot />
{/key}
