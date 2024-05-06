<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Button from '$elements/Button';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { page } from '$app/stores';

	import { i18n } from '$lib/i18n.js';
	import LangSwitcher from '$ui/LangSwitcher/LangSwitcher.svelte';

	function handleClick() {
		console.log('hey');
	}
</script>

<h1 class="text-red-400">{m._lang_test()}</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button onclick={handleClick} class="text-white" intent="secondary" size="small">Hello</Button>
