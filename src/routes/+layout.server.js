// @ts-nocheck
import { API_HOST } from '$lib/variable/variable_server';
/** @type {import('./$types').LayoutServerLoad} */
export const load = ({ locals, cookies }) => {
    let session = locals.session.data
    let lang = cookies.get('lang')
    return {
        session: session,
        lang: lang,
        API_HOST: API_HOST,
    };
};