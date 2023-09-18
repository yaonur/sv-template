<script>
    import NavRightContainer from '$elements/NavRightContainer.svelte';
    // import Home from '$icon/Home.svg?component'
    import screenSize from '$lib/stores/screenSize';
    import {TestCompCn} from '$ui/TestCompCn';


    $: innerWidth = 0;
    // $: ss=screenSize('sm')
</script>

<svelte:window bind:innerWidth/>

<div class="mt-8">
    <TestCompCn class="h-8 bg-primary" disabled="{true}"/>
</div>


