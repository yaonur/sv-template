import { superValidate } from 'sveltekit-superforms';
import { z } from 'zod';
import type { PageServerLoad, Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect } from '@sveltejs/kit';
import { schema } from './schema';

// Define outside the load function so the adapter can be cached
// const schema = z.object({
//   password: z.string(),
//   email: z.string().email()
// });

export const load = (async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const form = await superValidate(event.request, zod(schema));
		console.log("form in signin",form)

		if (!form.valid) {
			console.log('form not valid');
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}
		// console.log("form signin",form.data)
		const { data, error } = await event.locals.supabase.auth.signInWithPassword({
			email: form.data.email,
			password: form.data.password
		});
		if (error) {
			console.log('error from signin:', error);
			return fail(400, { form });
		}
		console.log("data from signin",data.session)
		// console.log('res from signin:', data);
		  throw redirect(302,"/");
		//   console.log("success returning form",form)

		// TODO: Do something with the validated form.data

		// Yep, return { form } here too
		return { form };
	}
};
