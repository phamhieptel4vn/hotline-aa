// @ts-nocheck

import { apiGetGroupCidById, apiGetGroupCids } from '$lib/api/groupcid';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals, params, url }) => {
    const { session } = await parent();
    let referrer = url.searchParams.get('referrer') ?? ''
    let id = params.id
    let groupcid;
    let groupcids = []
    await apiGetGroupCidById(id, {}, session.token).then(
        async (result) => {
            if (result.ok) {
                let data = await result.json();
                groupcid = data
            }
        })
    await apiGetGroupCids(-1, 0, {}, session.token).then(async (result) => {
        if (result.ok) {
            let { data } = await result.json()
            groupcids = data ?? []
        } else {
            throw error(500, 'Lấy danh sách chiến dịch bị lỗi');
        }
    }).catch((error) => {
        console.log(error)
    })
    return {
        id: id,
        session: session,
        referrer,
        groupcid: groupcid,
        groupcids: groupcids
    };
}