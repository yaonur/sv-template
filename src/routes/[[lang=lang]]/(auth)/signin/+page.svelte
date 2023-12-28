<script lang="ts">
    import type { PageData } from './$types';
    import {enhance} from "$app/forms"
    
    export let data: PageData;


</script>

<p>Signin Page</p>
<form action="?/login" method="POST" use:enhance>
    <input type="text" name="email" id="email" placeholder="Email">
    <input type="password" name="password" id="password" placeholder="Password">
    <button type="submit">Sign In</button>
</form>