<script lang="ts">
	import Logo from '$logo/Logo.svg';
	import '../app.pcss';
	import Navbar from '$ui/Navbar/';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={Logo} />
</svelte:head>
<Navbar  />
<p class="bg-primary">aaaaa</p>
<slot />
