<script>
    import NavRightContainer from '$elements/NavRightContainer.svelte';
    import Home from '$icon/Home.svg?component'
    import screenSize from '$lib/stores/screenSize';
	import Uploader from '$lib/components/ui/Uploader/Uploader.svelte';

	$: innerWidth = 0;
	// $: ss=screenSize('sm')
</script>

<svelte:window bind:innerWidth />

<div>
    <p>Uploader</p>
    <Uploader/>
</div>
