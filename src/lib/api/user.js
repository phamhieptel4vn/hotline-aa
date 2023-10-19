// @ts-nocheck
import { apiDelete, apiGet, apiPatch, apiPost, apiPut } from "$lib/util/api"
import { API_HOST } from "$lib/variable"


/**
 * @param {number} [limit]
 * @param {number} [offset]
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetUsers = async (params = {}, token = null) => {
    return apiGet(API_HOST + "/v1/pn/user", params, token)
}

/**
 * @param {object} user
 * @param {string} [token]
 */
export const apiPostUser = async (user, token = null) => {
    return apiPost(API_HOST + "/v1/pn/user", user, token)
}

/**
 * @param {string} id
 * @param {object} user
 * @param {string} [token]
 */
export const apiPutUser = async (id, user, token = null) => {
    return apiPut(API_HOST + `/v1/pn/user/${id}`, user, token)
}

/**
 * @param {string} id
 * @param {string} [token]
 */
export const apiDeleteUser = async (id, token = null) => {
    return apiDelete(API_HOST + `/v1/pn/user/${id}`, null, token)
}

/**
 * @param {string} id
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetUserById = async (id, params = {}, token = null) => {
    return apiGet(API_HOST + `/v1/pn/user/${id}`, params, token)
}

/**
 * @param {object} body
 * @param {string} [token]
 */
export const apiPutUserPassword = async (body, token = null) => {
    return apiPut(API_HOST + "/v1/pn/user/password", body, token)
}


/**
 * @param {string} id
 * @param {object} body
 * @param {string} [token]
 */
export const apiPatchUserEnable = async (id, body, token = null) => {
    return apiPatch(API_HOST + `/v3/user/${id}/enable`, body, token)
}
