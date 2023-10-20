import queryString from 'query-string';
import { p as public_env } from './shared-server-b7e48788.js';

function apiPost(resource, data, token = null) {
  return fetch(resource, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + token
    },
    body: data && JSON.stringify(data)
  });
}
function apiGet(resource, params = {}, token = null) {
  resource += "?" + queryString.stringify(params);
  return fetch(resource, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + token
    }
  });
}
function apiDelete(resource, data, token = null) {
  return fetch(resource, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + token
    },
    body: data && JSON.stringify(data)
  });
}

const API_HOST = public_env.PUBLIC_API_HOST;

export { API_HOST as A, apiGet as a, apiDelete as b, apiPost as c };
//# sourceMappingURL=variable-aefe6ab7.js.map
