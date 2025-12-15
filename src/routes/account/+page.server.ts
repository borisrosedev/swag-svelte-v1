import { getOneByEmail } from "../../data/users";
import type { PageServerLoad, Actions } from "./$types";
import { fail, redirect } from '@sveltejs/kit';


export const load: PageServerLoad = async ({ cookies }) => {

    const user = await getOneByEmail(cookies.get('sessionid') as string);
    return { user };


};

export const actions = {
    logout: async (event) => {
        console.log('ye')
		event.cookies.delete('sessionid', { path: '/' });
		//event.locals.use = null;
        if (event.url.searchParams.has('redirectTo')) {
            redirect(303, event.url.searchParams.get('redirectTo') as any);
        }
	}
} satisfies Actions;