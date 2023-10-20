import { a as apiGet, A as API_HOST, b as apiDelete } from './variable-aefe6ab7.js';

const apiGetServers = async (limit = 99, offset = 0, params = {}, token = null) => {
  params.limit = limit;
  params.offset = offset;
  return apiGet(API_HOST + "/hotline/v1/server", params, token);
};
const apiDeleteServer = async (id, token = null) => {
  return apiDelete(API_HOST + `/hotline/v1/server/${id}`, null, token);
};
const apiGetServerById = async (id, params = {}, token = null) => {
  return apiGet(API_HOST + `/hotline/v1/server/${id}`, params, token);
};

export { apiGetServers as a, apiGetServerById as b, apiDeleteServer as c };
//# sourceMappingURL=server-f2f1c50d.js.map
