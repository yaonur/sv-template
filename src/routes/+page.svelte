<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { proxiedState } from '$lib/stores/proxiedStore.svelte';
	let changeValue = () => {
		proxiedState.key1="key1 changed to this";
		proxiedState.key2 ="this is key2 change";
	};
</script>

<h1 class="flex text-3xl text-red-500">p:{proxiedState.key1}</h1>
<button onclick={changeValue}>proxy test</button>
<p>proxied state key2: {proxiedState.key2}</p>
<input class="border" type="text" bind:value={proxiedState.key2} />
