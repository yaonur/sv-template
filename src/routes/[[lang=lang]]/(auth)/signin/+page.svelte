<script lang="ts">
    import type { PageData } from './$types';
    import {enhance} from "$app/forms"
    
    // export let data: PageData;
    let email   = "test";
    let password = "test";


</script>

<p>Signin Page</p>
<form action="?/login" method="POST" use:enhance>
    <input type="text" name="email" id="email" placeholder="Email" bind:value={email}>
    <input type="password" name="password" id="password" placeholder="Password" bind:value={password}>
    <button type="submit">Sign In</button>
</form>