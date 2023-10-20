import { r as redirect } from './index2-64aa7a5e.js';

const load = async ({ parent, locals }) => {
  const { session } = await parent();
  if (!session || !session.user_id) {
    throw redirect(302, "/signin");
  } else {
    throw redirect(302, "/campaign");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5e4fa18a.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/3.984ecbc8.js","_app/immutable/chunks/index.44600393.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-fdebb1b9.js.map
