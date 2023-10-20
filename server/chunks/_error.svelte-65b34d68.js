import { c as create_ssr_component, a as subscribe, v as validate_component, g as add_attribute, h as escape } from './index-288b18f9.js';
import { p as page } from './stores-1c76c6b0.js';
import { R as Row, C as Col } from './Row-10945340.js';
import { C as Container } from './Container-d1509d04.js';
import './Offcanvas.svelte_svelte_type_style_lang-273b5b4d.js';

const css = {
  code: ".maintenance-wrapper.svelte-9tb10v.svelte-9tb10v{height:calc(100vh - 169px)}.maintenance-page__title.svelte-9tb10v.svelte-9tb10v{font-weight:500;margin:70px 0 14px}.maintenance-page.svelte-9tb10v p.svelte-9tb10v{font-size:14px;color:var(--color-gray)}.maintenance-page svg{max-width:100%;height:auto}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let httpStatus = $page.status == 404 ? 404 : 500;
  let httpStatusText = $page.status == 404 ? "Trang bạn yêu cầu hiện không tồn tại" : "Trang bạn yêu cầu hiện đang bị lỗi";
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-dwr16m_START -->${$$result.title = `<title>Error</title>`, ""}<!-- HEAD_svelte-dwr16m_END -->`, ""}

<div class="component-page mb-25">${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: 12 }, {}, {
            default: () => {
              return `<div class="maintenance-wrapper content-center svelte-9tb10v"><div class="maintenance-page text-center svelte-9tb10v"><img class="svg" alt=""${add_attribute("src", "/img/svg/" + httpStatus + ".svg", 0)}>
						<h5 class="maintenance-page__title svelte-9tb10v">${escape(httpStatusText)}</h5>
						<p class="fw-500 svelte-9tb10v">${escape(httpStatus)}</p>
						<div class="d-flex justify-content-evenly"><a href="/logout" class="btn btn-outline-danger mt-4" data-sveltekit-reload>Logout</a>
							<a href="/" class="btn btn-outline-success mt-4">Go To Home</a></div></div></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}
</div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-65b34d68.js.map
