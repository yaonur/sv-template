<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing.js';
	export let data;

	// console.log("{{{{-----------------------------")
	// console.log("page on protected:",$page.data.session)
	// console.log("data on protected:",data.session)
	// console.log("-----------------}}}")
	$: {
		if (!data.session) {
			goto(route('signin', 'en'));
		}
	}
</script>

<slot />
