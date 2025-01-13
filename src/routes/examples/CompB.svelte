<script lang='ts'> 
import {globalStore} from '$lib/stores/globalStore.svelte';

</script>

<div class="border">
	<p>This is CompA</p>
	<p>Store value theme = {globalStore.options.theme}</p>
	<p>Store value lang = {globalStore.options.lang}</p>
	<button class="px-2 bg-red-200" onclick={()=> globalStore.options={...globalStore.options,theme:'Red'}}>Set theme Red</button>
</div>