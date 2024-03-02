import { z } from 'zod';


export const schema = z
	.object({
		userName: z
			.string()
			.min(3, '_error_length_3')
			.refine((userName) => userName.trim() !== '', '_error_empty_field')
			.refine((username) => /^[a-zA-Z0-9_\-]+$/.test(username), {
				message: '_error_eng_char'
			}),
		email: z
			.string()
			.email('_error_email')
			.refine((email) => email.trim() !== '', '_error_empty_field'),
		password: z
			.string()
			.min(8, '_error_length_8')
			.refine((password) => password.trim() !== '', '_error_empty_field')
			.refine((password) => !/\s/.test(password), {
				message: '_error_space_not_allowed'
			}),
		confirmPassword: z
			.string()
			.min(8, '_error_length_8')
			.refine((confirmPassword) => confirmPassword.trim() !== '', '_error_empty_field'),
	})
	.refine((data) => data.password == data.confirmPassword, {
		message: '_error_password_match',
		path: ['confirm']
	});
