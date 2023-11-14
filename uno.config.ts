import {
	defineConfig,

	// presets
	presetAttributify,
	presetUno,
	presetWind,
	presetWebFonts,
	presetTypography,
	presetIcons,

	// transformers
	transformerAttributifyJsx
} from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
	// ...UnoCSS options
	presets: [
		presetUno(),
		presetAttributify()
		//   presetWind(),
		//   presetWebFonts({
		// 	provider: 'bunny',
		// 	fonts: {
		// 	  base: 'Inter:400,500,600,700,800,900',
		// 	},
		//   }),
		//   presetTypography(),
		//   presetIcons()
	],
	transformers: [transformerVariantGroup(), transformerAttributifyJsx()],
	theme: {
		colors: {
			primary: {
				'200': '#FF8EA8',
				'300': '#FF5E86',
				'400': '#FF376B',
				'500': '#FF004F',
				'600': '#EE0050',
				'700': '#D9004D',
				'800': '#C5004B',
				DEFAULT: '#FF004F'
			},
			secondary: {
				'200': '#7FD7F8',
				'300': '#43BDF1',
				'400': '#00A1EC',
				'500': '#00A1EC',
				'600': '#0094DE',
				'700': '#0081CA',
				'800': '#0070B6',
				DEFAULT: '#43BDF1'
			},
			tertiary: {
				'50': '#FAFAFA',
				'100': '#F5F5F5',
				'200': '#EEEEEE',
				'300': '#E0E0E0',
				'400': '#BDBDBD',
				'500': '#9E9E9E',
				'600': '#757575',
				'700': '#616161',
				'800': '#424242',
				DEFAULT: '#9E9E9E'
			}
		}
	},
	preflights: [
		{
			getCSS: ({ theme }) => {
				const t = theme as any;

				return `
			body {
			  --c-primary: ${t.colors.primary};
			  --c-text: ${t.colors.text};
			  --c-bg: ${t.colors.bg};
			}
			html {
			  scroll-behavior: smooth;
			  height: 100%;
			}
		  `;
			}
		}
	]
});
