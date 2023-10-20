import { a as apiGetServers } from './server-f2f1c50d.js';
import { e as error } from './index2-64aa7a5e.js';
import './variable-aefe6ab7.js';
import 'query-string';
import './shared-server-b7e48788.js';

const load = async ({ parent, locals }) => {
  const { session } = await parent();
  let servers = [];
  await apiGetServers(99, 0, {}, session.token).then(async (result) => {
    if (result.ok) {
      let { data } = await result.json();
      servers = data ?? [];
    } else {
      throw error(500, "Lấy danh sách server bị lỗi");
    }
  }).catch((error2) => {
    console.log(error2);
  });
  return {
    session,
    servers
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1441fbf8.js')).default;
const server_id = "src/routes/(app)/server/+page.server.js";
const imports = ["_app/immutable/nodes/11.39d14b89.js","_app/immutable/chunks/index.44600393.js","_app/immutable/chunks/server.9f663a1d.js","_app/immutable/chunks/CardTitle.96b8a700.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c813ed7b.js","_app/immutable/chunks/index.8ef7e701.js","_app/immutable/chunks/public.e689485d.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/runtime.esm.486ca76f.js","_app/immutable/chunks/Button.5b07cb5c.js","_app/immutable/chunks/Row.83492d24.js","_app/immutable/chunks/FormGroup.6fca83d2.js","_app/immutable/chunks/Label.cb5f6fe0.js","_app/immutable/chunks/paginate.03609e53.js","_app/immutable/chunks/CardBody.b9c64b67.js","_app/immutable/chunks/DarkPaginationNav.svelte_svelte_type_style_lang.0d9e63c9.js"];
const stylesheets = ["_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/DarkPaginationNav.f4e8cc59.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-96a49ca7.js.map
