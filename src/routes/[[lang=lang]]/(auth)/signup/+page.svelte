<script lang="ts">
	import { valibotClient, zod, valibot } from 'sveltekit-superforms/adapters';
	import { schema } from './schema.js';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { page } from '$app/stores';
	import { setLanguageTag, sourceLanguageTag, type AvailableLanguageTag } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { route } from '$lib/i18n-routing.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;

	// $appStore.popUp = false;

	export let data;
	onMount(()=>{
		// goto('/en/signin')
	})
	const { form, errors, enhance, options, delayed,posted } = superForm(data.form, {
		validators: zod(schema),
		validationMethod: 'oninput',
		applyAction: false,
		onResult: ({result}) => {
			console.log('result:', result);
			if(result.type==='redirect'){
				console.log( "routing to:", route('signin', lang) )
				goto(route('signin', lang))
			}
		},
	});
	$form = {
		userName : "onrynk",
		email : "onur.yanik.ynr@gmail.com",
		password : "12345678",
		confirmPassword :"12345678"
	}
	
</script>

<form
	method="POST"
	class="relative flex w-[440px] flex-col rounded-xl bg-light px-12 py-12 text-dark dark:bg-dark dark:text-light xs:max-w-[340px] xs:px-4"
	use:enhance
>
	<SuperDebug data={$form} /> 
	<input type="text" bind:value={$form.userName} name="userName"/>
	<input type="text" bind:value={$form.email} name="email"/>
	<input type="password" bind:value={$form.password} name="password"/>
	<input type="password" bind:value={$form.confirmPassword} name="confirmPassword"/>
	<button>Create Account</button>
	
			
		
</form>

<style>
</style>
