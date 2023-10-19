// @ts-nocheck

import { apiGetServers } from '$lib/api/server';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals }) => {
    const { session } = await parent();
    let servers = []
    await apiGetServers(99, 0, {}, session.token).then(async (result) => {
        if (result.ok) {
            let { data } = await result.json()
            servers = data ?? []
        } else {
            throw error(500, 'Lấy danh sách server bị lỗi');
        }
    }).catch((error) => {
        console.log(error)
    })
    return {
        session: session,
        servers: servers,
    };
}