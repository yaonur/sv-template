<script lang="ts">
	import { availableLanguageTags } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing';
	import Button from '$elements/Button';
	let count =$state(0);
</script>


<p>{m._test()}</p>
<Button on:click={() => {count = count + 1}}>Count :{count}</Button>

