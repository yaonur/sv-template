<script lang='ts'>
    import Logo from "$logo/Logo.svg"
import "../app.css"
</script>
<svelte:head>
    <link rel="icon" type="image/svg" href={Logo} />
</svelte:head>
<slot />
