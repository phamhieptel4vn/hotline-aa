import { a as apiGet, A as API_HOST, b as apiDelete } from './variable-aefe6ab7.js';

const apiGetGroupCids = async (limit = 99, offset = 0, params = {}, token = null) => {
  params.limit = limit;
  params.offset = offset;
  return apiGet(API_HOST + "/hotline/v1/group-cid", params, token);
};
const apiDeleteGroupCid = async (id, token = null) => {
  return apiDelete(API_HOST + `/hotline/v1/group-cid/${id}`, null, token);
};
const apiGetGroupCidById = async (id, params = {}, token = null) => {
  return apiGet(API_HOST + `/hotline/v1/group-cid/${id}`, params, token);
};

export { apiGetGroupCids as a, apiGetGroupCidById as b, apiDeleteGroupCid as c };
//# sourceMappingURL=groupcid-d4281457.js.map
