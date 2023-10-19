// @ts-nocheck
import { apiDelete, apiGet, apiPatch, apiPost, apiPut } from "$lib/util/api"
import { API_HOST } from "$lib/variable"

/**
 * @param {number} [limit]
 * @param {number} [offset]
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetServers = async (limit = 99, offset = 0, params = {}, token = null) => {
    params.limit = limit
    params.offset = offset
    return apiGet(API_HOST + "/hotline/v1/server", params, token)
}

/**
 * @param {object} server
 * @param {string} [token]
 */
export const apiPostServer = async (server, token = null) => {
    return apiPost(API_HOST + "/hotline/v1/server", server, token)
}

/**
 * @param {string} id
 * @param {object} server
 * @param {string} [token]
 */
export const apiPutServer = async (id, server, token = null) => {
    return apiPut(API_HOST + `/hotline/v1/server/${id}`, server, token)
}

/**
 * @param {string} id
 * @param {string} [token]
 */
export const apiDeleteServer = async (id, token = null) => {
    return apiDelete(API_HOST + `/hotline/v1/server/${id}`, null, token)
}

/**
 * @param {string} id
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetServerById = async (id, params = {}, token = null) => {
    return apiGet(API_HOST + `/hotline/v1/server/${id}`, params, token)
}

/**
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetServersOption = async (params = {}, token = null) => {
    return apiGet(API_HOST + `/hotline/v1/server/option`, params, token)
}
/**
 * @param {string} id
 * @param {object} body
 * @param {string} [token]
 */
export const apiPatchServerActive = async (id, body, token = null) => {
    return apiPatch(API_HOST + `/hotline/v1/server/${id}/active`, body, token)
}