// @ts-nocheck

import { apiGetGroupCids } from '$lib/api/groupcid';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals }) => {
    const { session } = await parent();
    let groupcids = []
    await apiGetGroupCids(99, 0, {}, session.token).then(async (result) => {
        if (result.ok) {
            let { data } = await result.json()
            groupcids = data ?? []
        } else {
            throw error(500, 'Lấy danh sách cid bị lỗi');
        }
    }).catch((error) => {
        console.log(error)
    })
    return {
        session: session,
        groupcids: groupcids,
    };
}