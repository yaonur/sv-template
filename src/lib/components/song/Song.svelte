<script lang='ts'> 
	import type { Song } from '$lib/types/types';
	let {song} : {song:Song} = $props() 
</script>

<div class="flex gap-4">
	<p>{song.title}</p>
	<p>{song.tone}</p>
	<p>{song.modality}</p>
</div>