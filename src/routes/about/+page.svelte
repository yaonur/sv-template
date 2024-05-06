<script lang="ts">
    import type { PageData } from './$types';
    import * as m from '$lib/paraglide/messages';
    export let data: PageData;
</script>
<h1>{m._about()}</h1>
<p>{@html m._hello_user({user:"onur",brand:"dumdaras co."})}</p>