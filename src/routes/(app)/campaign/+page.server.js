// @ts-nocheck

import { apiGetCampaigns } from '$lib/api/campaign';
import { apiGetGroupCids } from '$lib/api/groupcid';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals }) => {
    const { session } = await parent();
    let campaigns = []
    let groupcids = []
    await apiGetCampaigns(99, 0, {}, session.token).then(async (result) => {
        if (result.ok) {
            let { data } = await result.json()
            campaigns = data ?? []
        } else {
            throw error(500, 'Lấy danh sách chiến dịch bị lỗi');
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
        campaigns: campaigns,
        groupcids: groupcids,
    };
}