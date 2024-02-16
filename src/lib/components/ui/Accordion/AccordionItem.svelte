<script lang="ts">
	import {slide} from 'svelte/transition';
	import {getAccordionOptions} from './context';

	export let open = false;
	const componentId = crypto.randomUUID();
	const {activeComponentId, collapse} = getAccordionOptions();
	function setActive() {
		activeComponentId.set(componentId);
	}
	function toggleOpen() {
		open = !open;
	}

	function handleClick() {
		collapse ? setActive() : toggleOpen();
	}

	$: open && collapse && setActive();
	$: isActive = $activeComponentId === componentId;
	$: isOpen = collapse ? isActive : open;
</script>

<div class="text-white">
	<button class="flex justify-between w-full hover:bg-zinc-600" on:click={handleClick}>
		<div>
			<slot name="title" />
		</div>
		<div class="accordion-carret" class:open={isOpen} class:close={!isOpen}>👉</div>
	</button>
	{#if isOpen}
		<div transition:slide class="accordion-toggle">
			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	.accordion-toggle {
		width: 100%;
		padding: var(--accordion-padding, 1rem);
		justify-content: space-between;
		color: var(--accordion-color, inherit);
		font: inherit;
		font-weight: 600;
		border: none;
		background: none;
		cursor: pointer;
		border-radius: var(--accordion-radius, 4px);
		transition: background-color 0.3s ease;
	}
	.accordion-toggle:hover {
		background-color: var(--accordion-hover, hsl(220 20% 20%));
	}
	.accordion-content {
		padding: var(--accordion-padding, 1rem);
	}
	.open {
		transform: rotate(90deg);
		transition: transform 0.3s ease;
	}
	.close {
		transform: rotate(0deg);
		transition: transform 0.3s ease;
	}
</style>
