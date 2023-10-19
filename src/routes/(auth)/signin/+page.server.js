// @ts-nocheck
import { API_HOST } from '$lib/variable/variable';
import { redirect } from '@sveltejs/kit';
import { RestClient } from '$lib/rest/rest.js';
export const load = async ({ parent, locals, cookies, url }) => {
    const { session } = await parent();
    console.log("🚀 ~ file: +page.server.js:7 ~ load ~ session:", session)
    // Already logged in:
    if (session.user_id) {
        throw redirect(302, '/')
    }
    let message = url.searchParams.get("message") ?? "";
    return {
        message
    };
}
/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request, locals }) => {
        const fd = await request.formData();
        let body = {
            username: fd.get('username'),
            password: fd.get('password'),
        }
        const loginResponse = await RestClient.post(API_HOST + "/aaa/v1/login", body)
            .catch((e) => {
                return {
                    errors: "Lỗi hệ thống"
                }
            });
            console.log("🚀 ~ file: +page.server.js:31 ~ login: ~ loginResponse", loginResponse)
        if (loginResponse.status !== 200 || loginResponse.data?.code === "ERR_AAA_USERNAME_NOT_FOUND") {
            return {
                errors: "Tên hoặc Mật khẩu không đúng!"
            }
        }

        let {data} = await loginResponse.data
        console.log("🚀 ~ file: +page.server.js:38 ~ login: ~ data:", data)
        // if (data.is_active !== true) {
        //     return {
        //         errors: "Tài khoản bị khoá"
        //     }
        // }
        let ses = {
            user_id: data.user_id,
            username: data.username,
            token: data.token,
            refresh_token: data.refresh_token,
            tenant_name: data.tenant_name,
            tenant_id: data.tenant_id,
            fullname: data.fullname
        }
        console.log("🚀 ~ file: +page.server.js:54 ~ login: ~ ses:", ses)
        // try {
        //     cookies.set('lang', 'en-US', {
        //         expires: new Date(Date.now() + (30 * 24 * 3600000)),
        //         httpOnly: false,
        //     });
        //     cookies.set('sidebar_toggled', "true", {
        //         expires: new Date(Date.now() + (30 * 24 * 3600000)),
        //         httpOnly: false,
        //     });
        // } catch (error) {
        //     console.log("error", error)
        //     return fail(500, {
        //         message: error.message,
        //         invalid: true
        //     })
        // }
        await locals.session.set(ses).then(() => {
        })
        cookies.set('token', data.token, {
            expires: new Date(Date.now() + (30 * 24 * 3600000)),
            httpOnly: false,
        });
        cookies.set('refresh_token', data.refresh_token, {
            expires: new Date(Date.now() + (30 * 24 * 3600000)),
            httpOnly: false,
        })
        return {
            success: true,
            message: "Đăng nhập thành công"
        }
    }
}
