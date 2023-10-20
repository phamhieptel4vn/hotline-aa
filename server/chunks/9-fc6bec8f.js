import { b as apiGetGroupCidById, a as apiGetGroupCids } from './groupcid-d4281457.js';
import { e as error } from './index2-64aa7a5e.js';
import './variable-aefe6ab7.js';
import 'query-string';
import './shared-server-b7e48788.js';

const load = async ({ parent, locals, params, url }) => {
  const { session } = await parent();
  let referrer = url.searchParams.get("referrer") ?? "";
  let id = params.id;
  let groupcid;
  let groupcids = [];
  await apiGetGroupCidById(id, {}, session.token).then(
    async (result) => {
      if (result.ok) {
        let data = await result.json();
        groupcid = data;
      }
    }
  );
  await apiGetGroupCids(-1, 0, {}, session.token).then(async (result) => {
    if (result.ok) {
      let { data } = await result.json();
      groupcids = data ?? [];
    } else {
      throw error(500, "Lấy danh sách chiến dịch bị lỗi");
    }
  }).catch((error2) => {
    console.log(error2);
  });
  return {
    id,
    session,
    referrer,
    groupcid,
    groupcids
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8606a706.js')).default;
const server_id = "src/routes/(app)/groupcid/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/9.989b250f.js","_app/immutable/chunks/index.44600393.js","_app/immutable/chunks/groupcid.dedbb90e.js","_app/immutable/chunks/CardTitle.96b8a700.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c813ed7b.js","_app/immutable/chunks/index.8ef7e701.js","_app/immutable/chunks/public.e689485d.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/cid.84b3ac91.js","_app/immutable/chunks/runtime.esm.486ca76f.js","_app/immutable/chunks/Button.5b07cb5c.js","_app/immutable/chunks/Row.83492d24.js","_app/immutable/chunks/FormGroup.6fca83d2.js","_app/immutable/chunks/Label.cb5f6fe0.js","_app/immutable/chunks/paginate.03609e53.js","_app/immutable/chunks/DarkPaginationNav.svelte_svelte_type_style_lang.0d9e63c9.js","_app/immutable/chunks/CardBody.b9c64b67.js"];
const stylesheets = ["_app/immutable/assets/5.dde05287.css","_app/immutable/assets/airbnb.84387246.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/DarkPaginationNav.f4e8cc59.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-fc6bec8f.js.map
