<script>
	import NavRightContainer from '$elements/NavRightContainer.svelte';
	import Home from '$icon/Home.svg?component' ;
	import {_} from 'svelte-i18n'
	import screenSize from '$lib/stores/screenSize';
	import { TestCompCn } from '$ui/TestCompCn';

	$: innerWidth = 0;
	// $: ss=screenSize('sm')
</script>

<svelte:window bind:innerWidth />

<p>Example img svg as component</p>
<Home class="w-8" />

<p class="flex flex-auto bg-primary">{$_('_test')}</p>
<div class="mt-8">
	<TestCompCn class="h-8 bg-primary" disabled={true} />
</div>
