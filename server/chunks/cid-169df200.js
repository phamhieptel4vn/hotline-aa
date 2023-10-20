import { a as apiGet, A as API_HOST, b as apiDelete } from './variable-aefe6ab7.js';

const apiGetCids = async (limit = 99, offset = 0, params = {}, token = null) => {
  params.limit = limit;
  params.offset = offset;
  return apiGet(API_HOST + "/hotline/v1/cid", params, token);
};
const apiGetCidsByGroupId = async (limit = 99, offset = 0, groupcidUuid = null, params = {}, token = null) => {
  params.group_cid_id = groupcidUuid;
  params.limit = limit;
  params.offset = offset;
  return apiGet(API_HOST + "/hotline/v1/cid", params, token);
};
const apiDeleteCid = async (id, token = null) => {
  return apiDelete(API_HOST + `/hotline/v1/cid/${id}`, null, token);
};
const apiGetCidById = async (id, params = {}, token = null) => {
  return apiGet(API_HOST + `/hotline/v1/cid/${id}`, params, token);
};

export { apiGetCids as a, apiGetCidById as b, apiDeleteCid as c, apiGetCidsByGroupId as d };
//# sourceMappingURL=cid-169df200.js.map
