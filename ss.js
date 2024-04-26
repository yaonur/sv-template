	const _aboutDe = () => {
		return  "abstrande"
	}
	const _aboutEn = () => {
		return  "about"
	}

	const _aboutTr = () => {
		return  "hakkında"
	}

const lang = {
	de: _aboutDe,
	en: _aboutEn,
	tr: _aboutTr
}["de"]()
console.log(lang)