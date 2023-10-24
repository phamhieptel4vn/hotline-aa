import { a as apiGetCampaigns } from './campaign-331a29ce.js';
import { a as apiGetGroupCids } from './groupcid-d4281457.js';
import { e as error } from './index2-64aa7a5e.js';
import './variable-aefe6ab7.js';
import 'query-string';
import './shared-server-b7e48788.js';

const load = async ({ parent, locals }) => {
  const { session } = await parent();
  let campaigns = [];
  let groupcids = [];
  await apiGetCampaigns(99, 0, {}, session.token).then(async (result) => {
    if (result.ok) {
      let { data } = await result.json();
      campaigns = data ?? [];
    } else {
      throw error(500, "Lấy danh sách chiến dịch bị lỗi");
    }
  }).catch((error2) => {
    console.log(error2);
  });
  await apiGetGroupCids(1e3, 0, {}, session.token).then(async (result) => {
    if (result.ok) {
      let { data } = await result.json();
      groupcids = data ?? [];
    } else {
      throw error(500, "Lấy nhóm số bị lỗi");
    }
  }).catch((error2) => {
    console.log(error2);
  });
  return {
    session,
    campaigns,
    groupcids
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-41a3d17a.js')).default;
const server_id = "src/routes/(app)/campaign/+page.server.js";
const imports = ["_app/immutable/nodes/4.baa31be1.js","_app/immutable/chunks/index.44600393.js","_app/immutable/chunks/campaign.91f05867.js","_app/immutable/chunks/CardTitle.b126185e.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c813ed7b.js","_app/immutable/chunks/index.8ef7e701.js","_app/immutable/chunks/public.4ce8af9a.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/runtime.esm.486ca76f.js","_app/immutable/chunks/Button.5b07cb5c.js","_app/immutable/chunks/Row.83492d24.js","_app/immutable/chunks/FormGroup.6fca83d2.js","_app/immutable/chunks/Label.cb5f6fe0.js","_app/immutable/chunks/paginate.03609e53.js","_app/immutable/chunks/CardBody.b9c64b67.js","_app/immutable/chunks/DarkPaginationNav.svelte_svelte_type_style_lang.0d9e63c9.js"];
const stylesheets = ["_app/immutable/assets/4.fa7a862b.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/DarkPaginationNav.f4e8cc59.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-1bcb542c.js.map
