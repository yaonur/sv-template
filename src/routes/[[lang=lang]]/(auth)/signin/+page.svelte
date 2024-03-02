<script lang="ts">
	import type { PageData } from './$types';
	import { valibotClient, zod, valibot } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { route } from '$lib/i18n-routing';
	import { page } from '$app/stores';
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
	import { schema } from './schema';
	import * as m from '$paraglide/messages';
	import { goto } from '$app/navigation';
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;

	// export let data: PageData;

	// $appStore.popUp = false;

	export let data;

	const { form, errors, enhance, options, delayed } = superForm(data.form, {
		validators: zod(schema),
		validationMethod: 'oninput',
		// applyAction: false,
		// onResult: ({ result }) => {
		// 	// console.log('result:', result);
		// 	if (result.type === 'redirect') {
		// 		// console.log( "routing to:", route('', lang) )
		// 		goto(route('', lang));
		// 	}
		// }
	});
	$form.email = 'onur.yanik.ynr@gmail.com';
	$form.password = '12345678';

	// console.log("signin page:",$page)
</script>

<form
	method="POST"
	class="bg-light w-40 text-dark dark:bg-dark dark:text-light xs:px-4 xs:min-w-[340px] flex min-w-[440px] flex-col gap-8 rounded-xl px-12 py-12"
	use:enhance
> 
	<SuperDebug data={$form}/>
	<input type="text" placeholder="email" bind:value={$form.email} name="email"/>
	<input type="password" placeholder="password" bind:value={$form.password} name="password"/>
	<button>SignIn</button>
</form>
