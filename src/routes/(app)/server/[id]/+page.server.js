// @ts-nocheck

import { apiGetServerById, apiGetServers } from '$lib/api/server';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageData} */
export const load = async ({ parent, locals, params, url }) => {
    const { session } = await parent();
    let referrer = url.searchParams.get('referrer') ?? ''
    let id = params.id
    let server;
    let servers = []
    await apiGetServerById(id, {}, session.token).then(
        async (result) => {
            if (result.ok) {
                let {data} = await result.json();
                server = data
            }
        })
    await apiGetServers(-1, 0, {}, session.token).then(async (result) => {
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
        id: id,
        session: session,
        referrer,
        server: server,
        servers: servers
    };
}