<script lang="ts">
	import { enhance } from '$app/forms';
	function getCookie(name) {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.startsWith(name + '=')) {
				return cookie.substring(name.length + 1);
			}
		}
		return null;
	}
	let bearer;
	try {
		const token = JSON.parse(getCookie('token'));
		const tokenJson = getCookie('token');
		bearer = 'Bearer ' + token.accessToken;

		// console.log(JSON.stringify(token));
		// console.log("token",token);
		// console.log("tokenJson",tokenJson);
	} catch (e) {
		console.log(e);
	}
	let form = {
		email: '',
		password: ''
	};
	// console.log("bearer",bearer);
	export let data;
	$: clearUser = data?.clearUser;
	$: {
		if (clearUser) console.log('cleaning user');
	}
	function login() {
		console.log(form);

		let body = JSON.stringify({
			email: form.email,
			password: form.password,
			language: 1
		});
		fetch('https://.com/auth/login', {
			headers: {
				accept: 'application/json, text/plain, */*',
				'cache-control': 'no-cache',
				'content-type': 'application/json;charset=UTF-8',
				pragma: 'no-cache'
			},
			body: body,
			method: 'POST'
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				document.cookie = `token=${JSON.stringify(data.token)}; path=/; expires=${new Date(
					data.token.accessTokenExpiration
				).toUTCString()}`;
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function getValuation() {
			fetch('', {
				headers: {
					Authorization: bearer,
					accept: 'application/json, text/plain, */*',
					'accept-language': 'en',
					'cache-control': 'no-cache',
					pragma: 'no-cache',
					'sec-ch-ua': '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
					'sec-ch-ua-mobile': '?0',
					'sec-ch-ua-platform': '"Linux"',
					'sec-fetch-dest': 'empty',
					'sec-fetch-mode': 'cors',
					'sec-fetch-site': 'cross-site'
				},
				referrer: 'http://localhost:8080/',
				referrerPolicy: 'strict-origin-when-cross-origin',
				body: null,
				method: 'GET',
				mode: 'no-cors',
				credentials: 'include'
			})
			.then((response) => {
				console.log(response);
				return response;
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}
</script>

<div>
	<h1>Login</h1>
	<form action="?/login" method="POST" use:enhance>
		<input type="text" name="mail" placeholder="mail" bind:value={form.email} id="email" />
		<input
			type="password"
			name="password"
			placeholder="password"
			bind:value={form.password}
			id="password"
		/>
	</form>
	<button on:click={login}>Login</button>
	<button on:click={getValuation}>Get valuation</button>
</div>
