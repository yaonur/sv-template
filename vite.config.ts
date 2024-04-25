import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { paraglide } from "@inlang/paraglide-js-adapter-vite"
import { paraglide } from "@inlang/paraglide-sveltekit/vite"
import path from 'path'
// import svg from '@poppanator/sveltekit-svg'
// const svgOptions={
// 	includePaths: [ 'src/static/icon'],
// 	svgoOptions: {
// 		multipass: true,
// 		plugins: [
// 			{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
// 		],
// 	},
// }
//@ts-ignore
// const svgPlugin= svg(svgOptions)

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	//@ts-ignore
	// plugins: [sveltekit(),svg(svgOptions)],
	plugins: [sveltekit(),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
		}),],
	resolve: {
		alias: {
			$ui: path.resolve(__dirname, 'src/lib/components/ui'),
			$elements: path.resolve(__dirname, 'src/lib/components/elements'),
			$stores: path.resolve(__dirname, 'src/lib/stores'),
			$utils: path.resolve(__dirname, 'src/lib/utils'),
			$img: path.resolve(__dirname, 'src/public/assets/img'),
			$static: path.resolve(__dirname, 'src/static'),
			$icon: path.resolve(__dirname, 'src/static/icon'),
			$logo: path.resolve(__dirname, 'src/static/logo'),
			$lib: path.resolve(__dirname, 'src/lib'),
			$components: path.resolve(__dirname, 'src/lib/components'),
		},
	},
});


