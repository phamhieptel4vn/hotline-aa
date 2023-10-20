import { b as private_env } from './shared-server-b7e48788.js';

const API_HOST = private_env.API_HOST;
const load = ({ locals, cookies }) => {
  let session = locals.session.data;
  let lang = cookies.get("lang");
  return {
    session,
    lang,
    API_HOST
  };
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-5533c42d.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.a1cb17db.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.44600393.js","_app/immutable/chunks/stores.f8e8d599.js","_app/immutable/chunks/singletons.8e44f27d.js","_app/immutable/chunks/index.8ef7e701.js","_app/immutable/chunks/runtime.esm.486ca76f.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/Row.83492d24.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.c813ed7b.js","_app/immutable/chunks/Container.32d27a0e.js"];
const stylesheets = ["_app/immutable/assets/0.165d88d3.css","_app/immutable/assets/Offcanvas.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-4cbdea58.js.map
