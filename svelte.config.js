import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$ui: './src/lib/components/ui',
			$elements: './src/lib/components/elements',
			$stores: './src/lib/stores',
			$utils: './src/lib/utils',
			$lib: './src/lib',
			$components: './src/lib/components',
		}
	}
};

export default config;
