<script>
    import NavRightContainer from '$elements/NavRightContainer.svelte';
    import Home from '$icon/Home.svg?component'
    import screenSize from '$lib/stores/screenSize';


    $: innerWidth = 0;
    // $: ss=screenSize('sm')
</script>

<svelte:window bind:innerWidth/>


