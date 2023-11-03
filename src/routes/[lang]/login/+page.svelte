<script lang="ts">
	import { enhance } from '$app/forms';
	let form={
		email:'',
		password:''
	};
	export let data;
	$: clearUser = data?.clearUser;
	$: {
		if (clearUser) console.log('cleaning user');
	}
	function login() {
		console.log(form)

		let body=JSON.stringify({
			email: form.email,
			password: form.password,
			language: 1
		})
		fetch('https://.com/auth/login', {
			headers: {
				accept: 'application/json, text/plain, */*',
				'cache-control': 'no-cache',
				'content-type': 'application/json;charset=UTF-8',
				pragma: 'no-cache',
				
			},
			body: body,
			method: 'POST',
		}).then(response =>{
			console.log(response)
			return response.json()
		}).then(data=>{
			console.log(data)
		}).catch(err=>{
			console.log(err)
		})
	}
</script>

<div>
	<h1>Login</h1>
	<form action="?/login" method="POST" use:enhance>
		<input type="text" name="mail" placeholder="mail" bind:value={form.email } id="email" />
		<input
			type="password"
			name="password"
			placeholder="password"
			bind:value={form.password }
			id="password"
			/>
		</form>
		<button on:click={login}>Login</button>
</div>
