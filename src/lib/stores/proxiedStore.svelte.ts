import {browser} from '$app/environment';
type Options = {
	key1: string;
	key2: string;
}
let defaultOptions: Options = {
	key1: 'default value for key1',
	key2: 'default value for key2',
}
let proxyTest = () => {
	let obj = $state<Options>(defaultOptions);
	if (browser) {
		const item = localStorage.getItem('proxyTest');
		if (item) {
			obj = JSON.parse(item);
		}
	}
	return obj;
};
let initProxy = proxyTest();
export const proxiedState = new Proxy(initProxy, {
	get(target, prop, receiver) {
		return Reflect.get(target, prop, receiver);
	},
	set(target, prop, value, receiver) {
		// do effect here update the localstorage maybe
		localStorage.setItem('proxyTest', JSON.stringify({...target, [prop]: value}));
		return Reflect.set(target, prop, value, receiver);
	},
});