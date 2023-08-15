<script lang='ts'>
    import Logo from "$logo/Logo.svg"
import "../app.css"
    import Navbar from "$ui/Navbar/";
</script>
<svelte:head>
    <link rel="icon" type="image/svg" href={Logo} />
</svelte:head>
<Navbar/>
<slot />
