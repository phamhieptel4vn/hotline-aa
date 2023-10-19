// @ts-nocheck
import { apiDelete, apiGet, apiPatch, apiPost, apiPut } from "$lib/util/api"
import { API_HOST } from "$lib/variable"

/**
 * @param {number} [limit]
 * @param {number} [offset]
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */

/**
 * @param {string} id
 * @param {string} [token]
 */
 export const apiDeleteCategoryStatus = async (id, token = null) => {
    return apiDelete(API_HOST + `/v3/status/category/${id}`, null, token)
}

/**
 * @param {number} [limit]
 * @param {number} [offset]
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetStatusOptions = async (limit = 99, offset = 0, params = {}, token = null) => {
    params.limit = limit
    params.offset = offset
    return apiGet(API_HOST + "/v3/status/option", params, token)
}