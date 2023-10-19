// @ts-nocheck

import { apiGetCidById, apiGetCids } from '$lib/api/cid';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals, params, url }) => {
    const { session } = await parent();
    let referrer = url.searchParams.get('referrer') ?? ''
    let id = params.id
    let cid;
    let cids = []
    await apiGetCidById(id, {}, session.token).then(
        async (result) => {
            if (result.ok) {
                let {data} = await result.json();
                cid = data
            }
        })
    await apiGetCids(-1, 0, {}, session.token).then(async (result) => {
        if (result.ok) {
            let { data } = await result.json()
            cids = data ?? []
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
        cid: cid,
        cids: cids
    };
}