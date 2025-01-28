<script lang="ts">
	import { greetWasm } from '$lib/wasm';

	let num1 = 0;
	let num2 = 0;
	let result: number | null = null;

	async function greet() {
		const greeting = await greetWasm();
		console.log(greeting);
	}
</script>

<div class="container">
    <button on:click={greet}>Greet</button>
</div>

<style>
	.container {
		max-width: 600px;
		margin: 2rem auto;
		padding: 1rem;
	}

	.inputs {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin: 1rem 0;
	}

	input {
		width: 100px;
		padding: 0.5rem;
	}
</style>
