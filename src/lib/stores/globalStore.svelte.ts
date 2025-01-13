
type Options = {
	theme: string;
	lang: string;
}
class GlobalStoreClass  {
	#options = $state() as Options;
	#defaultOptions = {} as Options;
	constructor(value: Options) {
		this.#options = value;
		this.#defaultOptions = value;
	}
	reset() {
		this.options = this.#defaultOptions;
	}
	get options() {
		return this.#options;
	}
	set options(value: Options) {
		this.#options = value;
	}
	update(newOptions: Partial<Options>) {
        this.options = { ...this.#options, ...newOptions };
    }
} 
export const globalStore = new GlobalStoreClass(
	{
		theme: 'light',
		lang: 'en',
	}
);