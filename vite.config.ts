import { sveltekit } from '@sveltejs/kit/vite';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vite';
// import path from 'path'

export default defineConfig({
	plugins: [
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		sveltekit()
	]
	//    resolve: {
	// 	alias: {
	// 		$ui: path.resolve(__dirname, 'src/lib/components/ui'),
	// 		$elements: path.resolve(__dirname, 'src/lib/components/elements'),
	// 		$stores: path.resolve(__dirname, 'src/lib/stores'),
	// 		$utils: path.resolve(__dirname, 'src/lib/utils'),
	// 		$img: path.resolve(__dirname, 'src/public/assets/img'),
	// 		$icon: path.resolve(__dirname, 'src/static/icon'),
	// 		$logo: path.resolve(__dirname, 'src/static/logo'),
	// 		$lib: path.resolve(__dirname, 'src/lib'),
	// 		$components: path.resolve(__dirname, 'src/lib/components'),
	// 	},
	// }
});
