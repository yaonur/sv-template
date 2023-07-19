<script>
	import NavRightContainer from "$elements/NavRightContainer.svelte";
  import screenSize from '$lib/stores/screenSize';
	const faviconPath = '/favicon.svg';

  $:innerWidth=0
  // $: ss=screenSize('sm')
  
</script>

<svelte:window bind:innerWidth/>

  <h1 class="bg-primary text-white ">{$screenSize}</h1>
  <img src={faviconPath} alt="Icon" />
  <div class="bg-primary-800  h-4 sm:bg-blue-500"></div>
  <NavRightContainer/>
