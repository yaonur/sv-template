<script lang="ts">
	import {setAccordionOptions} from './context';
	export let colapse = false;
	// const activeComponentId = writable(null);
	// setContext('colapse', colapse);
	// setContext('active', activeComponentId);
	setAccordionOptions({colapse});

</script>

<div class="accordion">
	<slot />
</div>

<style>
	.accordion {
		width: var(--accordion-width, 60ch);
		padding: var(--accordion-padding, 1rem);
		color: var(--accordion-color, #000);
		background-color: var(--accordion-background, hsl(220, 10%, 10%));
		border-radius: var(--accordion-radius, 4px);
		box-shadow: var(--accordion-shadow, 0px 1px 20px hsl(220, 10%, 8%));
	}
</style>
