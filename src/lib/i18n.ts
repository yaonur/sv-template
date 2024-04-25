// src/lib/i18n.js
import { createI18n } from "@inlang/paraglide-sveltekit"
import * as runtime from "$lib/paraglide/runtime.js"

export const i18n = createI18n(runtime,{
	pathnames: {
		"/about": {
			en: "/about",
			de: "/about",
			tr: "/hakkimizda",
		},
	},
});
