/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}','./src/**/*.stories.svelte'],
	theme: {
		extend: {
			screens: {
				xl: { max: "1279px" },
				// => @media (max-width: 1279px) { ... }
	
				lg: { max: "1023px" },
				// => @media (max-width: 1023px) { ... }
	
				md: { max: "767px" },
				// => @media (max-width: 767px) { ... }
	
				sm: { max: "639px" },
				// => @media (max-width: 639px) { ... }
			},
			colors: {
				primary: {'200':'#FF8EA8','300':'#FF5E86','400':'#FF376B','DEFAULT':'#FF004F','600':'#EE0050','700':'#D9004D','800':'#C5004B',},
				secondary:{'200':'#7FD7F8','300':'#43BDF1','DEFAULT':'#43BDF1','500':'#00A1EC','600':'#0094DE','700':'#0081CA','800':'#0070B6',},
				tertiary:{'50':'#FAFAFA','100':'#F5F5F5','200':'#EEEEEE','300':'#E0E0E0','400':'#BDBDBD','DEFAULT':'#9E9E9E','600':'#757575','700':'#616161','800':'#424242',},
			}
		}
	}
};
