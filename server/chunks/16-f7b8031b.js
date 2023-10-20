import { r as redirect } from './index2-64aa7a5e.js';

const load = async ({ locals }) => {
  await locals.session.destroy();
  throw redirect(302, "/signin");
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-4d8ca14b.js')).default;
const server_id = "src/routes/logout/+page.server.js";
const imports = ["_app/immutable/nodes/16.b5182db9.js","_app/immutable/chunks/index.44600393.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=16-f7b8031b.js.map
