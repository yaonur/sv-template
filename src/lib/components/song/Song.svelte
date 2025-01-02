<script lang='ts'> 
	import type { Song } from '$lib/types/types';
	let {song} : {song:Song} = $props() 
</script>

<div class="flex border border-gray-300 p-1 my-1 mx-4">
	<p class="px-1">{song.title.toLowerCase()}</p>
	<p class="pl-2 ">{song.tone}</p>
	<p class="pl-1">{song.modality}</p>
</div>