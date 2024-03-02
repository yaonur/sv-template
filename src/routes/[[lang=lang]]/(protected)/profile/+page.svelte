<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    async function signOut() {
        const { error } = await data.supabase.auth.signOut();
        if (error) console.log('Error logging out:', error.message);
    }
</script>
<p>Profile</p>
<p>user: {data.session?.user.email}</p>
<button on:click={signOut}>Logout</button>
