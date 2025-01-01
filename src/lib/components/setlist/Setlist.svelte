<script lang='ts'> 
	import {setlist} from '$lib/dummydata/setlist';
	import Song from '../song/Song.svelte';
</script>

<h1>{setlist.title}</h1>
{#each setlist.songs as song}
	<Song {song}/>
{/each}