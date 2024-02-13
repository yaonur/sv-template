<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { browser } from '$app/environment';

	import type { PageData } from './$types';

	export let data: PageData;
	const URL = ' https://dummyjson.com/products';
	const state = {
		isLoading: false,
		products: null
	};
	function render() {
		console.log('rendering');
		let html = '';
		if (state.isLoading) {
			html = '<p>Loading...</p>';
		} else if (state.products === null) {
			html = '<p>Theres no data yet.</p>';
		} else {
			console.log('mapping');
			html = state.products
				.map((product) => {
					return `<div>
                    <p>${product.title}</p>
                </div>`;
				})
				.join('');
			console.log('html', html);
		}
		document.querySelector('#container').innerHTML = html;
	}
	afterUpdate(async () => {
		if (browser) {
            render()
            state.isLoading= true;
			console.log('window is loaded');
			console.log('event fired');
			render();
			state.products = await loadData();
			console.log('data loaded', state.products);
			render();
		}
	});
	function loadData() {
		return new Promise((done, reject) => {
			setTimeout(async () => {
				try {
					const res = await fetch(URL);
					const data = await res.json();
                    state.isLoading= false;
					done(data.products);
				} catch (err) {
					reject(err);
				}
			}, 2000);
		});
	}
</script>

<div>
	<p>Container area</p>
	<div id="container" />
</div>
