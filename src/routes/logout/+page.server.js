import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
    await locals.session.destroy();
    throw redirect(302, '/signin');
};