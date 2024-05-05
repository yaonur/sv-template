<script lang="ts">
	import Button from '$elements/Button';

	function handleClick() {
		console.log('hey');
	}
</script>

<h1 class="text-red-400">Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button onclick={handleClick} class="bg-blue-300" >Hello</Button >
