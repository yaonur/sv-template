<script lang="ts">
	import Button from '$elements/Button';
	import { onMount } from 'svelte';

	let currentWord = '';
	let previousWord = '';
	let countdown = 200;
	const twoCharWords = ['al', 'el', 'ıl', 'il', 'ol', 'ul', 'öl', 'ül'];
	const twoCharWodsWithSpellings = [
		['al', 'a', 'l'],
		['el', 'e', 'l'],
		// ['ıl', 'ı', 'l'],
		['il', 'i', 'l'],
		// ['ol', 'o', 'l'],
		// ['ul', 'u', 'l'],
		// ['öl', 'ö', 'l'],
		// ['ül', 'ü', 'l']
	];
	const threeCharWords = ['ala', 'ele', 'ıla', 'ile', 'ola', 'ula', 'öle', 'üle'];
	let selectedWords;
	let spellingA = '';
	let spellingB = '';
	let interval: any;
	$: timer = 1300;
	let knownTimer=timer

	function randomWord() {
		selectedWords = twoCharWodsWithSpellings;
		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * selectedWords.length);
		} while (selectedWords[randomIndex][0] === previousWord);

		currentWord = selectedWords[randomIndex][0];
		previousWord = currentWord;
		spellingA = selectedWords[randomIndex][1];
		spellingB = selectedWords[randomIndex][2];
		countdown--;
		if (countdown === 0 ) {
			clearInterval(interval);
		}
		
	}
	onMount(() => {
		randomWord();
	});
	function startGame (){
		interval = setInterval(() => {
			console.log("set interval",knownTimer,timer)
			randomWord();
		}, timer);
	}
	function stopGame (){
		clearInterval(interval);
	}
</script>

<div class="flex h-[95vh] flex-col justify-between items-center bg-slate-300 pt-56">
	<div class="relative flex flex-col items-center">
		<p class="text-[266px] leading-tight underline">{currentWord}</p>
		<div class="flex gap-12 text-6xl font-light leading-none underline">
			<p>{spellingA}</p>
			<p>{spellingB}</p>
		</div>
	</div>
	<div class="p-16">
		<input type="range" min="500" max="5000" step="100" bind:value={timer} />
		<p>{timer}</p>
		<div class="flex gap-4">
			<Button on:click={startGame} class="w-12">Start</Button>
			<Button on:click={stopGame} class="w-12">Stop</Button>
		</div>
		<p class="text-center text-4xl">{countdown}</p>
	</div> 
</div>
