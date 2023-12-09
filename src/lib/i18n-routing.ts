// ./src/lib/i18n-routing.ts
import {
	sourceLanguageTag,
	type AvailableLanguageTag,
	availableLanguageTags,
} from "$paraglide/runtime"

/**
 * Returns the path in the given language, regardless of which language the path is in.
 */
export function route(path: string, lang: AvailableLanguageTag) {
	console.log("<<<<<<<<route function>>>>>")
	const pathProcessed = withoutLanguageTag(path,lang)
	// if(lang === "en") {
	// 	console.log("path before withoutLanguageTag:", path)
	// 	console.log("path after:", pathProcessed)
	// 	console.log("lang is:",lang)
	// }

	// Don't prefix the default language
	// if (lang === sourceLanguageTag) {
	// 	if(lang==="en"){
	// 		console.log("----------returning pathProcessed:", pathProcessed)
	// 	}
	// 	console.log(("<<<<<<route function"))
	// 	return pathProcessed
	// }

	// Prefix all other languages
	if(lang === "en") console.log("!!!!----------returning concotaneted pathProcessed:", `/${lang}${pathProcessed}`)
	console.log(("<<<<<<route function"))
	return `/${lang}/${pathProcessed}`
}

/**
 * Returns the path without the language tag
 */
function withoutLanguageTag(path: string,lang: string) {
	const [_, maybeLang, ...rest] = path.split("/")
	// if(lang==="en"){
	// 	console.log("<<<<<<<-------withoutLanguageTag function>>>>>")
	// 	console.log("path:", path)
	// 	console.log("availableLanguageTags:", availableLanguageTags)
	// 	console.log("rest", rest)
	// 	console.log("maybeLang", maybeLang)
	// 	console.log("<<<<<<<<<<<<<<<<<<<<<<< withoutLanguageTag function")
	// }
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return rest.join("/")
	}
	return path
}
