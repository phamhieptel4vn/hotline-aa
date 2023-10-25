import { b as apiGetCampaignById, a as apiGetCampaigns } from './campaign-331a29ce.js';
import { a as apiGetGroupCids } from './groupcid-d4281457.js';
import { e as error } from './index2-64aa7a5e.js';
import './variable-aefe6ab7.js';
import 'query-string';
import './shared-server-b7e48788.js';

const load = async ({ parent, locals, params, url }) => {
  const { session } = await parent();
  let referrer = url.searchParams.get("referrer") ?? "";
  let id = params.id;
  let campaign;
  let campaigns = [];
  let groupcids = [];
  await apiGetCampaignById(id, {}, session.token).then(
    async (result) => {
      if (result.ok) {
        let { data } = await result.json();
        campaign = data;
        if (campaign) {
          campaign.is_enabled = campaign.is_enabled ? true : false;
        }
      }
    }
  );
  await apiGetCampaigns(-1, 0, {}, session.token).then(async (result) => {
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
    id,
    session,
    referrer,
    campaign,
    groupcids,
    campaigns
  };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e46acb97.js')).default;
const server_id = "src/routes/(app)/campaign/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/5.952be346.js","_app/immutable/chunks/index.44600393.js","_app/immutable/chunks/campaign.45a45854.js","_app/immutable/chunks/CardTitle.09e14cfa.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c813ed7b.js","_app/immutable/chunks/index.8ef7e701.js","_app/immutable/chunks/public.55f5fa90.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.ab60173f.js","_app/immutable/chunks/runtime.esm.486ca76f.js","_app/immutable/chunks/Button.5b07cb5c.js","_app/immutable/chunks/CardBody.b9c64b67.js","_app/immutable/chunks/Row.83492d24.js","_app/immutable/chunks/Label.cb5f6fe0.js"];
const stylesheets = ["_app/immutable/assets/5.dde05287.css","_app/immutable/assets/airbnb.84387246.css","_app/immutable/assets/Offcanvas.60614438.css","_app/immutable/assets/index.4e8a9448.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-eb0b8bd4.js.map
