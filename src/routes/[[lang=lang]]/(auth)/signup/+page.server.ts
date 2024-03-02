import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect } from '@sveltejs/kit';
import {schema} from './schema'
import { route } from '$lib/i18n-routing.js';


export const load = (async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		console.log('default action');
		console.log("making a delay")
		console.log("request:",event.request)
		await new Promise(resolve => setTimeout(resolve, 1000));
		const form = await superValidate(event.request, zod(schema));
		if (!form.valid) {
			// Again, return { form } and things will just work.
			console.log("form is not valid")
			console.log("form data:",form.data)
			console.log("form errors:",form.errors)
			return fail(400, { form });
		}
		console.log("form is valid data:",form.data)
		let { data, error } = await event.locals.supabase.auth.signUp({
			email: form.data.email,
			password: form.data.password
		  })
		if(error){
			console.log("error from signup:",error)
			return {form}
		}
		console.log("data from signup:",data)


		// TODO: Do something with the validated form.data

		// Yep, return { form } here too
		throw redirect(302,"/en/signin");
		// throw redirect(302,route('/signin',  'en' ));

		return {form}
	}
};
