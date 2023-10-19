// @ts-nocheck

import { apiGetCampaignById, apiGetCampaigns } from '$lib/api/campaign';
import { apiGetGroupCids } from '$lib/api/groupcid';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals, params, url }) => {
    const { session } = await parent();
    let referrer = url.searchParams.get('referrer') ?? ''
    let id = params.id
    let campaign;
    let campaigns = []
    let groupcids = []

    await apiGetCampaignById(id, {}, session.token).then(
        async (result) => {
            if (result.ok) {
                let {data} = await result.json();
                campaign = data
                if (campaign) {
                    campaign.is_enabled = campaign.is_enabled ? true : false
                }
            }
        })
    await apiGetCampaigns(-1, 0, {}, session.token).then(async (result) => {
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
        id: id,
        session: session,
        referrer,
        campaign: campaign,
        groupcids: groupcids,
        campaigns: campaigns
    };
}