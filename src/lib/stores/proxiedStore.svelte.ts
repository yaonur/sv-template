import { browser } from '$app/environment';
type Options = {
	key1: string;
	key2: string;
};
let defaultOptions: Options = {
	key1: 'default value for key1',
	key2: 'default value for key2'
};
let proxyTest = (options:Options) => {
	let obj = $state<Options>(options);
	if (browser) {
		const item = localStorage.getItem('proxyTest');
		if (item) {
			obj = JSON.parse(item);
		}
	}
	
	return  obj;
};
function reset() {
	console.log("reset")
	localStorage.setItem('proxyTest', JSON.stringify(defaultOptions));
	// for (const key in defaultOptions) {
	// 	proxiedState[key as keyof Options] = defaultOptions[key as keyof Options];
    // }
	Object.assign(proxiedState,defaultOptions)
}
let initProxy = proxyTest(defaultOptions);

export const proxiedState = new Proxy(initProxy, {
	get(target, prop, receiver) {
		if (prop === 'reset') {
            return reset;
        }
		return Reflect.get(target, prop, receiver);
	},
	set(target, prop, value, receiver) {
		// do effect here update the localstorage maybe
		localStorage.setItem('proxyTest', JSON.stringify({ ...target, [prop]: value }));
		return Reflect.set(target, prop, value, receiver);
	},
});


