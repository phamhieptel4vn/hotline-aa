import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals }) => {
	const { session } = await parent();
	if (!session || !session.user_id) {
		throw redirect(302, "/signin");
	} else{
		throw redirect(302, "/campaign");
	}
};
