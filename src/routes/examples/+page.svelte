<script lang="ts">
	import { LocalStorageClass, LocalStorageFunction } from '$lib/stores/useLocalStorage.svelte';

	let count = LocalStorageFunction('count', 0);
	let anObjectWithClass = new LocalStorageClass('dumdarasObj', { val1: 'hey', val2: 'there' });
</script>

<p>Count: {count.value}</p>
<button onclick={() => (count.value += 1)}>Increment</button>
<p>anObjectWithClass: {anObjectWithClass.value.val1}</p>
