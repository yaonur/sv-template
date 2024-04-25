<script lang="ts">
	import { availableLanguageTags } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing';
	let count =$state(0);
</script>


<p>{m._test()}</p>
<button on:click={() => {count = count + 1}}>Count :{count}</button>

