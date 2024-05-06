<script lang='ts'> 
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { page } from '$app/stores';

	import { i18n } from '$lib/i18n.js';
</script>
<div class="flex gap-4 bg-black">
	{#each availableLanguageTags as lang}
		<!-- the hreflang attribute decides which language the link points to -->
		<a
			href={i18n.route($page.url.pathname)}
			hreflang={lang}
			aria-current={lang === languageTag() ? 'page' : undefined}
			class="text-primary-500 px-4 py-2 bg-slate-300"
		>
			{lang} 
		</a>
	{/each}
</div>