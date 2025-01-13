import { browser } from "$app/environment";

export function LocalStorageFunction<T>(key: string, value: T) {
	let storage = $state<{value:T}>({ value });
	if (browser) {
		const item = localStorage.getItem(key);
		if (item) {
			storage.value = JSON.parse(item);
		}
	}
	$effect(() => {
		localStorage.setItem(key, JSON.stringify(storage.value));
	});

	return storage;
}

export class LocalStorageClass<T>{
	value = $state<T>() as T
	key = ''
	constructor(key: string , value: T) {
		this.key = key
		this.value = value;

		if (browser) {
			const item = localStorage.getItem(key)
			if (item){
				this.value = this.deserialize(item)
			} else {
				localStorage.setItem(key, this.serialize(this.value))
			}
		}
		// using getters and setter so we dont have to use effect

		$effect (()=>{
			localStorage.setItem(this.key, this.serialize(this.value))
		})
	}

	// problem on using getter and setter on nested object
	// get value() {
	// 	return this.#value
	// }
	// set value(newValue: T) {
	// 	console.log('setting value', newValue)
	// 	this.#value = newValue
	// 	// this.#value = this.createProxy(newValue);
	// 	if (browser) {
	// 		localStorage.setItem(this.key, this.serialize(this.#value))
	// 	}
	// }

	serialize(value: T): string {
		return JSON.stringify(value)
	}

	deserialize(value: string) {
		return JSON.parse(value)
	}
}

// shadowing class from caller
export function useLocalStorage<T>(key: string, value: T) {
	return new LocalStorageClass(key, value)
}