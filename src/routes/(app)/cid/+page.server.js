// @ts-nocheck

import { apiGetCids } from '$lib/api/cid';
import { apiGetGroupCids } from '$lib/api/groupcid';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals }) => {
    const { session } = await parent();
    let cids = []
    let groupcids = []
    await apiGetCids(99, 0, {}, session.token).then(async (result) => {
        if (result.ok) {
            let { data } = await result.json()
            cids = data ?? []
        } else {
            throw error(500, 'Lấy danh sách cid bị lỗi');
        }
    }).catch((error) => {
        console.log(error)
    })
    await apiGetGroupCids(1000, 0, {}, session.token).then(async (result) => {
        if (result.ok) {
            let { data } = await result.json()
            groupcids = data ?? []
        } else {
            throw error(500, 'Lấy nhóm số bị lỗi');
        }
    }).catch((error) => {
        console.log(error)
    })
    return {
        session: session,
        cids: cids,
        groupcids: groupcids,
    };
}