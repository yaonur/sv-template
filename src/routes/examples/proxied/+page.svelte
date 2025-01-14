<script lang="ts">
	import { proxiedState } from "$lib/stores/proxiedStore.svelte";
	import CompA from "./CompA.svelte";
	import CompB from "./CompB.svelte";
	function resetProxy(){
		proxiedState.reset()
	}
</script>

<div>
	<h1>Proxied store</h1>
	<button onclick={resetProxy}>Reset Defaults</button>
	<p>components ----------</p>
	<CompA/>
	<p>-------</p>
	<CompB/>
</div>