import type { PageServerLoad,Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions:Actions =  {
    login: async (event) => {
        console.log(event);
        return {
            status: 200,
            body: {
                message: 'login'
            }
        };
    }
}