import { R as RestClient, A as API_HOST } from './rest-65f39e96.js';
import { r as redirect } from './index2-64aa7a5e.js';
import 'axios';
import './shared-server-b7e48788.js';
import 'js-cookie';

const load = async ({ parent, locals, cookies, url }) => {
  const { session } = await parent();
  console.log("🚀 ~ file: +page.server.js:7 ~ load ~ session:", session);
  if (session.user_id) {
    throw redirect(302, "/");
  }
  let message = url.searchParams.get("message") ?? "";
  return {
    message
  };
};
const actions = {
  login: async ({ cookies, request, locals }) => {
    const fd = await request.formData();
    let body = {
      username: fd.get("username"),
      password: fd.get("password")
    };
    const loginResponse = await RestClient.post(API_HOST + "/aaa/v1/login", body).catch((e) => {
      return {
        errors: "Lỗi hệ thống"
      };
    });
    console.log("🚀 ~ file: +page.server.js:31 ~ login: ~ loginResponse", loginResponse);
    if (loginResponse.status !== 200 || loginResponse.data?.code === "ERR_AAA_USERNAME_NOT_FOUND") {
      return {
        errors: "Tên hoặc Mật khẩu không đúng!"
      };
    }
    let { data } = await loginResponse.data;
    console.log("🚀 ~ file: +page.server.js:38 ~ login: ~ data:", data);
    let ses = {
      user_id: data.user_id,
      username: data.username,
      token: data.token,
      refresh_token: data.refresh_token,
      tenant_name: data.tenant_name,
      tenant_id: data.tenant_id,
      fullname: data.fullname
    };
    console.log("🚀 ~ file: +page.server.js:54 ~ login: ~ ses:", ses);
    await locals.session.set(ses).then(() => {
    });
    cookies.set("token", data.token, {
      expires: new Date(Date.now() + 30 * 24 * 36e5),
      httpOnly: false
    });
    cookies.set("refresh_token", data.refresh_token, {
      expires: new Date(Date.now() + 30 * 24 * 36e5),
      httpOnly: false
    });
    return {
      success: true,
      message: "Đăng nhập thành công"
    };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2c912436.js')).default;
const server_id = "src/routes/(auth)/signin/+page.server.js";
const imports = ["_app/immutable/nodes/15.6f35fe78.js","_app/immutable/chunks/index.44600393.js","_app/immutable/chunks/navigation.d0e3f0e5.js","_app/immutable/chunks/singletons.040d4709.js","_app/immutable/chunks/index.8ef7e701.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c813ed7b.js","_app/immutable/chunks/Button.5b07cb5c.js","_app/immutable/chunks/CardBody.b9c64b67.js","_app/immutable/chunks/CardHeader.1999c2fd.js","_app/immutable/chunks/Row.83492d24.js","_app/immutable/chunks/Container.32d27a0e.js","_app/immutable/chunks/FormGroup.6fca83d2.js","_app/immutable/chunks/Label.cb5f6fe0.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/parse.bee59afc.js"];
const stylesheets = ["_app/immutable/assets/15.d6f3c60f.css","_app/immutable/assets/Offcanvas.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=15-c5a01508.js.map
