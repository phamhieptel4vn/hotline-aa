import { b as apiGetCidById, a as apiGetCids } from './cid-169df200.js';
import { e as error } from './index2-64aa7a5e.js';
import './variable-aefe6ab7.js';
import 'query-string';
import './shared-server-b7e48788.js';

const load = async ({ parent, locals, params, url }) => {
  const { session } = await parent();
  let referrer = url.searchParams.get("referrer") ?? "";
  let id = params.id;
  let cid;
  let cids = [];
  await apiGetCidById(id, {}, session.token).then(
    async (result) => {
      if (result.ok) {
        let { data } = await result.json();
        cid = data;
      }
    }
  );
  await apiGetCids(-1, 0, {}, session.token).then(async (result) => {
    if (result.ok) {
      let { data } = await result.json();
      cids = data ?? [];
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
    cid,
    cids
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ed193e38.js')).default;
const server_id = "src/routes/(app)/cid/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/7.e19f9dc9.js","_app/immutable/chunks/index.44600393.js","_app/immutable/chunks/cid.815900ce.js","_app/immutable/chunks/CardTitle.b126185e.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c813ed7b.js","_app/immutable/chunks/index.8ef7e701.js","_app/immutable/chunks/public.4ce8af9a.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.ab60173f.js","_app/immutable/chunks/runtime.esm.486ca76f.js","_app/immutable/chunks/Button.5b07cb5c.js","_app/immutable/chunks/CardBody.b9c64b67.js","_app/immutable/chunks/Row.83492d24.js","_app/immutable/chunks/Label.cb5f6fe0.js"];
const stylesheets = ["_app/immutable/assets/5.dde05287.css","_app/immutable/assets/airbnb.84387246.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/index.4e8a9448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-93bc0f48.js.map
