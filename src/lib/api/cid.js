// @ts-nocheck
import { apiDelete, apiGet, apiPatch, apiPost, apiPut } from "$lib/util/api"
import { API_HOST } from "$lib/variable"

/**
 * @param {number} [limit]
 * @param {number} [offset]
 * @param {string} [groupcidUuid]
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetCids = async (limit = 99, offset = 0, params = {}, token = null) => {
    params.limit = limit
    params.offset = offset
    return apiGet(API_HOST + "/hotline/v1/cid", params, token)
}

/**
 * @param {number} [limit]
 * @param {number} [offset]
 * @param {string} [groupcidUuid]
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetCidsByGroupId = async (limit = 99, offset = 0, groupcidUuid = null, params = {}, token = null) => {
    params.group_cid_id = groupcidUuid
    params.limit = limit
    params.offset = offset
    return apiGet(API_HOST + "/hotline/v1/cid", params, token)
}
/**
 * @param {object} cid
 * @param {string} [token]
 */
export const apiPostCid = async (cid, token = null) => {
    return apiPost(API_HOST + "/hotline/v1/cid", cid, token)
}

/**
 * @param {string} id
 * @param {object} cid
 * @param {string} [token]
 */
export const apiPutCid= async (id, hotline, token = null) => {
    return apiPut(API_HOST + `/hotline/v1/cid/${id}`, hotline, token)
}

/**
 * @param {string} id
 * @param {string} [token]
 */
export const apiDeleteCid = async (id, token = null) => {
    return apiDelete(API_HOST + `/hotline/v1/cid/${id}`, null, token)
}

/**
 * @param {string} id
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetCidById = async (id, params = {}, token = null) => {
    return apiGet(API_HOST + `/hotline/v1/cid/${id}`, params, token)
}

/**
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetCidsOption = async (params = {}, token = null) => {
    return apiGet(API_HOST + `/hotline/v1/cid/option`, params, token)
}
/**
 * @param {string} id
 * @param {object} body
 * @param {string} [token]
 */
export const apiPatchCidActive = async (id, body, token = null) => {
    return apiPatch(API_HOST + `/hotline/v1/cid/${id}/active`, body, token)
}