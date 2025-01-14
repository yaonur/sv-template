<script lang="ts">
	import { proxiedState } from "$lib/stores/proxiedStore.svelte";
	const updateProxiedState = () => {
		proxiedState.key2= "key2 changed"
	}
	
</script>

<div class="border">
	<p>This is CompB</p>
	<p>Store key1:= {proxiedState.key1}</p>
	<p>Store key2:= {proxiedState.key2}</p>
	<label for="key2">key2 input:</label>
	<input class="border" type="text" name="key2" bind:value={proxiedState.key2} />
	<button class="px-2 bg-orange-200" onclick={updateProxiedState}>Change key</button>
</div>
