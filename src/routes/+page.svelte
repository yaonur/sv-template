<script>
	import NavRightContainer from '$elements/NavRightContainer.svelte';
	import screenSize from '$lib/stores/screenSize';
	const faviconPath = '/favicon.svg';

	$: innerWidth = 0;
	// $: ss=screenSize('sm')
</script>

<svelte:window bind:innerWidth />

<h1 class="bg-primary text-white">{$screenSize}</h1>
<img src={faviconPath} alt="Icon" />
<div class="bg-primary-800 h-4 sm:bg-blue-500" />
<NavRightContainer />
<div
	class="text-ui-dark font-inter border-ui-dark relative box-border flex w-full flex-row items-center justify-start gap-[20px] rounded-2xl border-[3px] border-solid px-[41px] py-[27px] text-left text-xl [text-decoration:none]  hover:opacity-[1] sm:flex-col sm:items-start sm:justify-start sm:gap-[5px] md:flex-col md:items-start md:justify-start md:gap-[20px] lg:flex-row lg:items-center lg:justify-between lg:gap-[20px]"
>
	<img class="relative h-[66px] w-[66px]" alt="" src="Logo.svg" />
	<a
		class="relative font-medium tracking-[0.02em] text-[inherit] [text-decoration:none] hover:animate-[0.2s_ease_0s_1_normal_forwards_shadow-pop-tr] hover:opacity-[1]"
		href="/home">Home</a
	>
	<a
		class="text-ui-instruction-background relative text-center font-bold tracking-[0.02em] [text-decoration:none] hover:animate-[0.1s_ease_0s_1_normal_forwards_shadow-pop-tr] hover:opacity-[1]"
		href="/project">Project</a
	>
	<a
		class="relative font-medium tracking-[0.02em] text-[inherit] [text-decoration:none] hover:animate-[0.1s_ease_0s_1_normal_forwards_shadow-pop-tr] hover:opacity-[1]"
		href="/settings">Settings</a
	>
	<a
		class="relative font-medium tracking-[0.02em] text-[inherit] [text-decoration:none] hover:animate-[0.1s_ease_0s_1_normal_forwards_shadow-pop-tr] hover:opacity-[1]"
		href="/help">Help</a
	>
</div>
