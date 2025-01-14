<script lang='ts'>
	import CompA from "./CompA.svelte";
	import CompB from "./CompB.svelte";
	import {globalStore} from '$lib/stores/globalStore.svelte';

 
	let { children } = $props();
	function changeGlobalStore(){
		globalStore.reset()
		
	}
</script>
<p>------------------- layout -------------------------------</p>
<CompA/>
<CompB/>
<button class="px-2 bg-gray-200" onclick={changeGlobalStore}>Reset globalStore</button>
<p>---------------------- page -----------------------</p>
{@render children()}