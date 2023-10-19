// @ts-nocheck
import { apiDelete, apiGet, apiPatch, apiPost, apiPut } from "$lib/util/api"
import { API_HOST } from "$lib/variable"

/**
 * @param {number} [limit]
 * @param {number} [offset]
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetCampaigns = async (limit = 99, offset = 0, params = {}, token = null) => {
    params.limit = limit
    params.offset = offset
    return apiGet(API_HOST + "/hotline/v1/campaign", params, token)
}

/**
 * @param {object} campaign
 * @param {string} [token]
 */
export const apiPostCampaign = async (campaign, token = null) => {
    return apiPost(API_HOST + "/hotline/v1/campaign", campaign, token)
}

/**
 * @param {string} id
 * @param {object} campaign
 * @param {string} [token]
 */
export const apiPutCampaign = async (id, campaign, token = null) => {
    return apiPut(API_HOST + `/hotline/v1/campaign/${id}`, campaign, token)
}

/**
 * @param {string} id
 * @param {string} [token]
 */
export const apiDeleteCampaign = async (id, token = null) => {
    return apiDelete(API_HOST + `/hotline/v1/campaign/${id}`, null, token)
}

/**
 * @param {string} id
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetCampaignById = async (id, params = {}, token = null) => {
    return apiGet(API_HOST + `/hotline/v1/campaign/${id}`, params, token)
}

/**
 * @param {Record<string, unknown>|object} [params]
 * @param {string} [token]
 */
export const apiGetCampaignsOption = async (params = {}, token = null) => {
    return apiGet(API_HOST + `/hotline/v1/campaign/option`, params, token)
}

/**
 * @param {string} id
 * @param {object} body
 * @param {string} [token]
 */
export const apiPatchCampaignActive = async (id, body, token = null) => {
    return apiPatch(API_HOST + `/hotline/v1/campaign/${id}/active`, body, token)
}

/**
 * @param {string} id
 * @param {object} body
 * @param {string} [token]
 */
export const apiPostCampaignRun = async (id, action, token = null) => {
    return apiPost(API_HOST + `/v1/campaign/${id}/run/${action}`, {}, token)
}

/**
 * @param {object} campaign
 * @param {string} [token]
 */
export const apiPostCopyCampaign = async (campaign, token = null) => {
    return apiPost(API_HOST + "/hotline/v1/campaign/copy", campaign, token)
}