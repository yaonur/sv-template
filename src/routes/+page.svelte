<script>
    import NavRightContainer from '$elements/NavRightContainer.svelte';
    import Home from '$icon/Home.svg?component'
    import screenSize from '$lib/stores/screenSize';


    $: innerWidth = 0;
    // $: ss=screenSize('sm')
</script>

<svelte:window bind:innerWidth/>

<h1 class="bg-primary text-white">{$screenSize}</h1>

<Home class="w-10 fill-primary"/>
<div class="bg-primary-800 h-4 sm:bg-blue-500"/>
<NavRightContainer/>

