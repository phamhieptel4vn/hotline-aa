// @ts-nocheck
import { apiDelete, apiGet, apiPatch, apiPost, apiPut } from "$lib/util/api"
import { API_HOST } from "$lib/variable"

/**
 * @param {number} [limit]
 * @param {number} [offset]
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetGroupCids = async (limit = 99, offset = 0, params = {}, token = null) => {
    params.limit = limit
    params.offset = offset
    return apiGet(API_HOST + "/hotline/v1/group-cid", params, token)
}

/**
 * @param {object} groupcid
 * @param {string} [token]
 */
export const apiPostGroupCid = async (groupcid, token = null) => {
    return apiPost(API_HOST + "/hotline/v1/group-cid", groupcid, token)
}

/**
 * @param {string} id
 * @param {object} groupcid
 * @param {string} [token]
 */
export const apiPutGroupCid= async (id, hotline, token = null) => {
    return apiPut(API_HOST + `/hotline/v1/group-cid/${id}`, hotline, token)
}

/**
 * @param {string} id
 * @param {string} [token]
 */
export const apiDeleteGroupCid = async (id, token = null) => {
    return apiDelete(API_HOST + `/hotline/v1/group-cid/${id}`, null, token)
}

/**
 * @param {string} id
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetGroupCidById = async (id, params = {}, token = null) => {
    return apiGet(API_HOST + `/hotline/v1/group-cid/${id}`, params, token)
}

/**
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetGroupCidsOption = async (params = {}, token = null) => {
    return apiGet(API_HOST + `/hotline/v1/group-cid/option`, params, token)
}
/**
 * @param {string} id
 * @param {object} body
 * @param {string} [token]
 */
export const apiPatchGroupCidActive = async (id, body, token = null) => {
    return apiPatch(API_HOST + `/hotline/v1/group-cid/${id}/active`, body, token)
}