<script lang="ts">
	import { languageTag, type AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n.js'
	import { page } from '$app/state'
	import * as m from '$lib/paraglide/messages.js';
	import { goto } from '$app/navigation';
	import { LocalStorage } from '$lib/stores/storage.svelte';
	import { onMount } from 'svelte';

    const lang =new LocalStorage('lang','en');	
	
		
	
	function switchToLanguage() {
		const canonicalPath = i18n.route(page.url.pathname);
		let localisedPath = i18n.resolveRoute(canonicalPath, lang.current as AvailableLanguageTag);
		if(localisedPath.length > 1 && localisedPath[localisedPath.length-1] === "/"){
			localisedPath = localisedPath.slice(0, -1);
		}

		if(page.url.pathname !== localisedPath){
			setTimeout(() => {
                goto(localisedPath).then(() => {
                }).catch((error) => {
                    console.error("Navigation error:", error);
                });
            }, 0);
		}
	}
	onMount(()=>{
		switchToLanguage()
	})
</script>

<div class="flex justify-between items-center ">
	<div class="flex gap-2">
		<a href="/">{m.home()}</a>
		<a href="/examples">Examples</a>
	</div>
	
	<select onchange={switchToLanguage} bind:value={lang.current}>
		<!-- <option onclick={() => switchToLanguage('en')}>en</option>
		<option onclick={() => switchToLanguage('tr')}>tr</option> -->
		<option value="en">en</option>
        <option value="tr">tr</option>
        <option value="de">de</option>
	</select>
</div>
