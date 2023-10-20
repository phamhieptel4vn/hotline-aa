import axios from 'axios';
import { p as public_env } from './shared-server-b7e48788.js';
import Cookies from 'js-cookie';

const API_HOST = public_env.PUBLIC_API_HOST;
const getItem = (key = "") => {
  const data = Cookies.get(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};
const authHeader = () => ({
  Authorization: `Bearer ${getItem("token")}`
});
const client = axios.create({
  baseURL: API_HOST,
  headers: {
    Authorization: `Bearer ${getItem("token")}`,
    "Content-Type": "application/json"
  }
});
class RestClient {
  static get(path = "") {
    return client({
      method: "GET",
      url: path,
      headers: { ...authHeader() }
    });
  }
  static post(path = "", data = {}, optionalHeader = {}) {
    return client({
      method: "POST",
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader }
    });
  }
  static patch(path = "", data = {}) {
    return client({
      method: "PATCH",
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    });
  }
  static put(path = "", data = {}) {
    return client({
      method: "PUT",
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    });
  }
}
client.interceptors.request.use((config) => {
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer ${getItem("token")}` };
  return requestConfig;
});
client.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if (response.status === 500)
        ;
      else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  }
);

export { API_HOST as A, RestClient as R };
//# sourceMappingURL=rest-65f39e96.js.map
