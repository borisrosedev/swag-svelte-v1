// import * as db from '$lib/server/db';
import { getOneByEmail } from '../../data/users';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
    try {
	    const user = await getOneByEmail(cookies.get('sessionid') as string);
        return { user };
    } catch(e){
        console.log('❌ e => ', e)
    }

};

export const actions = {
	login: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

        const user = (await getOneByEmail(email as string) as any) ;
        if (user.password  == password)  {
            cookies.set('sessionid', user.email, { path: '/' });
            if (url.searchParams.has('redirectTo')) {
                console.log('redirectTo =>',url.searchParams.has('redirectTo'))
                redirect(303, url.searchParams.get('redirectTo') as string);
            }           
        } else {
            return fail(400, { password, incorrect: true });
        }
	},
	// register: async (event) => {
	// 	// TODO register the user
	// }
} satisfies Actions;