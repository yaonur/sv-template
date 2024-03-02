<script lang="ts">
	import { Accordion, AccordionItem } from '$ui/Accordion';
	import { availableLanguageTags } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing';
	export let data
	const items = [
		{
			title: 'Item 0',
			content: 'Content 0'
		},
		{
			title: 'Item 1',
			content: 'Content 1'
		},
		{
			title: 'Item 2',
			content: 'Content 2'
		}
	];
	async function signOut() {
		const { error } = await data.supabase.auth.signOut();
		if (error) console.log('Error logging out:', error.message);
	}
</script>
<p>Welcome</p>
<p>User:{data.session?.user.email}</p>
<button on:click={signOut}>Logout</button>
<!-- <p>Context api example with stores for comp lib </p>
<Accordion >
	{#each items as item, i}
		<AccordionItem>
			<svelte:fragment slot="title"> {item.title}</svelte:fragment>
			<svelte:fragment slot="content"> {item.content}</svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion> -->
