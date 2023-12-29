import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async (event) => {
		const data = await event.request.formData();
		// console.log(data);

		const email = data.get('email');
		const password = data.get('password');
		const body = JSON.stringify({ email, password });
		// console.log('body', body);
		const response = await fetch('http://localhost:3000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: body
		});
		let result;
		try {
			result = await response;
            console.log("response:",result.statusText)
			if (response.ok ) {
                console.log("response is 200")
                // console.log(">>>>>>>>>>>result  is:",result)
				// result = await response.json();
			}

		} catch (error) {
			console.log('error:', error);
		}

		return {
			status: 200,
			body: {
				message: 'login',
			}
		};
	}
};
