<script lang="ts">
	import { proxiedState } from "$lib/stores/proxiedStore.svelte";
	let val = proxiedState.val
	const updateProxiedState = () => {
		proxiedState.key1 = "key1 changed"
	}
	
</script>

<div class="border">
	<p>This is CompA</p>
	<p>Store key1:= {proxiedState.key1}</p>
	<p>Store key2:= {proxiedState.key2}</p>
	<label for="key1">key1 input:</label>
	<input class="border" type="text" name="key2" bind:value={proxiedState.key1} />
	<button class="px-2 bg-orange-200" onclick={updateProxiedState}>Change key</button>
</div>
