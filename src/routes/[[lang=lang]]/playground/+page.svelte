<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);
	let message = '';
	let name = ''
	async function handleHello() {
		const { data, error } = await supabase.functions.invoke('hello', {
			headers: {
				'my-custom-header': 'my-custom-header-value'
			},
			body: { foo: 'bar' }
		});
		if (error) {
			console.log('error:', error);
			message = `Error ${error.message}`;
		}
		console.log('data:', data);
		message = data.message;
		name=data.name
	}
</script>

<p>{message}</p>
<p>{name}</p>
<button on:click={handleHello}>Call Hello</button>
