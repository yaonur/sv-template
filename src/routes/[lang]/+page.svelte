<script lang="ts">
	import Button from '$elements/Button';
	import { onMount } from 'svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<p class="hover:bg-blue-400 hover:text-red-800">Home</p>
	<Button class="w-[144px] bg-orange-500" intent="secondary">Button</Button>
	<div class="i-mdi-alarm text-orange-400" />
</div>
