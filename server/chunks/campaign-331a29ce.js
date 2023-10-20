import { a as apiGet, A as API_HOST, b as apiDelete, c as apiPost } from './variable-aefe6ab7.js';

const apiGetCampaigns = async (limit = 99, offset = 0, params = {}, token = null) => {
  params.limit = limit;
  params.offset = offset;
  return apiGet(API_HOST + "/hotline/v1/campaign", params, token);
};
const apiDeleteCampaign = async (id, token = null) => {
  return apiDelete(API_HOST + `/hotline/v1/campaign/${id}`, null, token);
};
const apiGetCampaignById = async (id, params = {}, token = null) => {
  return apiGet(API_HOST + `/hotline/v1/campaign/${id}`, params, token);
};
const apiPostCampaignRun = async (id, action, token = null) => {
  return apiPost(API_HOST + `/v1/campaign/${id}/run/${action}`, {}, token);
};

export { apiGetCampaigns as a, apiGetCampaignById as b, apiDeleteCampaign as c, apiPostCampaignRun as d };
//# sourceMappingURL=campaign-331a29ce.js.map
