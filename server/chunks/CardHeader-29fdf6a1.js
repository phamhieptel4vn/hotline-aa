import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value } from './index-288b18f9.js';
import { c as classnames } from './Offcanvas.svelte_svelte_type_style_lang-273b5b4d.js';

const CardHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "tag"]);
  let { class: className = "" } = $$props;
  let { tag = "div" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, "card-header");
  return `${tag === "h3" ? `
  <h3${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</h3>` : `
  <div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`}`;
});

export { CardHeader as C };
//# sourceMappingURL=CardHeader-29fdf6a1.js.map
