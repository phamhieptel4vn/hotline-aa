import { c as create_ssr_component, a as subscribe, v as validate_component, h as escape } from './index-288b18f9.js';
import 'query-string';
import './variable-aefe6ab7.js';
import { C as CardTitle, F as Form, T as TabContent, a as TabPane } from './CardTitle-7539ab47.js';
import 'moment';
import 'sweetalert2';
import './index-57374619.js';
import { a as $format } from './runtime.esm-7041db2b.js';
import { B as Button } from './Button-90a7368c.js';
import { C as Card, a as CardBody } from './CardBody-8a7529a7.js';
import { R as Row, C as Col } from './Row-10945340.js';
import { L as Label, I as Input } from './Label-76b9c5fa.js';
import './shared-server-b7e48788.js';
import './Offcanvas.svelte_svelte_type_style_lang-273b5b4d.js';
import './index3-1a5be8d5.js';

const css = {
  code: '@import "$lib/css/custom_form.css";.svelecte-control{--sv-bg:transparent !important;--sv-color:inherit;--sv-min-height:42px;--sv-border-color:transparent;--sv-border:none !important;--sv-active-border:none !important;--sv-active-outline:none;--sv-item-selected-bg:#478ffc !important}.sv-dropdown{background-color:#fff !important}.sv-item{border-radius:0.375rem !important}.sv-item .sv-item-content{color:#fff !important;font-size:0.85rem !important}.sv-dropdown-content .sv-item-content{color:#6c6c6c !important}.sv-item .sv-item-btn{border-radius:0.375rem !important}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { data } = $$props;
  data.id;
  data.session.token;
  let server = data.server;
  console.log("server: ", server);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, { class: "border-0 mb-4 rounded" }, {}, {
      default: () => {
        return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CardTitle, "CardTitle").$$render(
              $$result,
              {
                title: $_("common.server"),
                icon: "ti ti-rocket"
              },
              {},
              {}
            )}
		${validate_component(Form, "Form").$$render($$result, { method: "post", action: "#" }, {}, {
              default: () => {
                return `${validate_component(TabContent, "TabContent").$$render($$result, { class: "nav-tabs-s1" }, {}, {
                  default: () => {
                    return `${validate_component(TabPane, "TabPane").$$render(
                      $$result,
                      {
                        tabId: "basicSettings",
                        tab: $_("common.configuration"),
                        active: true
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Row, "Row").$$render($$result, { class: "mb-3 mt-3" }, {}, {
                            default: () => {
                              return `${validate_component(Col, "Col").$$render($$result, { md: "4" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "serverName" }, {}, {
                                    default: () => {
                                      return `${escape($_("server.server_name"))}`;
                                    }
                                  })}
							${validate_component(Input, "Input").$$render(
                                    $$result,
                                    {
                                      type: "text",
                                      class: "form-control",
                                      name: "serverName",
                                      placeholder: "Server Name",
                                      value: server.server_name
                                    },
                                    {
                                      value: ($$value) => {
                                        server.server_name = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })}
                        ${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "serverIP" }, {}, {
                                    default: () => {
                                      return `${escape($_("server.server_ip"))}`;
                                    }
                                  })}
							${validate_component(Input, "Input").$$render(
                                    $$result,
                                    {
                                      type: "text",
                                      class: "form-control",
                                      name: "serverIP",
                                      placeholder: "Server IP",
                                      value: server.server_ip
                                    },
                                    {
                                      value: ($$value) => {
                                        server.server_ip = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })}
                        
                        ${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "serverAPI" }, {}, {
                                    default: () => {
                                      return `${escape($_("server.server_api"))}`;
                                    }
                                  })}
							${validate_component(Input, "Input").$$render(
                                    $$result,
                                    {
                                      type: "text",
                                      class: "form-control",
                                      name: "serverAPI",
                                      placeholder: "Server API Host",
                                      value: server.server_api
                                    },
                                    {
                                      value: ($$value) => {
                                        server.server_api = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })}`;
                            }
                          })}`;
                        }
                      }
                    )}`;
                  }
                })}
			${validate_component(Row, "Row").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Col, "Col").$$render($$result, { md: "12", class: "" }, {}, {
                      default: () => {
                        return `<div class="float-end">${validate_component(Button, "Button").$$render($$result, { type: "button", color: "soft-warning" }, {}, {
                          default: () => {
                            return `${escape($_("back"))}`;
                          }
                        })}
						${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "soft-primary" }, {}, {
                          default: () => {
                            return `${escape($_("update"))}`;
                          }
                        })}</div>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe__();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f9fcab0f.js.map
