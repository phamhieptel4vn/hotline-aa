import { c as create_ssr_component, a as subscribe, v as validate_component, h as escape, i as each, g as add_attribute } from './index-288b18f9.js';
import { c as apiDeleteServer, a as apiGetServers } from './server-f2f1c50d.js';
import 'query-string';
import './variable-aefe6ab7.js';
import Swal from 'sweetalert2';
import 'moment';
import { a as $format } from './runtime.esm-7041db2b.js';
import { B as Button } from './Button-90a7368c.js';
import { R as Row, C as Col } from './Row-10945340.js';
import { T as TabContent, a as TabPane, C as CardTitle, F as Form } from './CardTitle-7539ab47.js';
import { F as FormGroup } from './FormGroup-52cd2108.js';
import { L as Label, I as Input } from './Label-76b9c5fa.js';
import { n as notifySuccess, a as notifyApiError, M as Modal, b as ModalBody, c as ModalFooter, p as paginate } from './paginate-393ff22a.js';
import { C as Card, a as CardBody } from './CardBody-8a7529a7.js';
import { D as Dropdown, a as DropdownToggle, b as DropdownMenu, c as DropdownItem, P as PaginationNav } from './DarkPaginationNav.svelte_svelte_type_style_lang-c11b1c6a.js';
import './shared-server-b7e48788.js';
import './index3-1a5be8d5.js';
import './Offcanvas.svelte_svelte_type_style_lang-273b5b4d.js';

const AddModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { isOpen = false } = $$props;
  let { token } = $$props;
  let { tenantId } = $$props;
  let server = {
    server_name: "",
    tenant_id: tenantId,
    server_ip: "",
    server_api: ""
  };
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.token === void 0 && $$bindings.token && token !== void 0)
    $$bindings.token(token);
  if ($$props.tenantId === void 0 && $$bindings.tenantId && tenantId !== void 0)
    $$bindings.tenantId(tenantId);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "md",
        isOpen,
        toggle: () => {
          isOpen = !isOpen;
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(Form, "Form").$$render($$result, { method: "POST", action: "#" }, {}, {
            default: () => {
              return `${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { lg: "12 bg-primary p-3" }, {}, {
                        default: () => {
                          return `<h6 class="text-white mb-0 fw-bold">1. ${escape($_("common.add_new"))} ${escape($_("common.server"))}</h6>
					
					<small class="text-white mb-0">${escape($_("common.add_new"))} ${escape($_("common.server"))}</small>`;
                        }
                      })}
				${validate_component(Col, "Col").$$render($$result, { lg: "12", class: "mt-3" }, {}, {
                        default: () => {
                          return `${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-3 align-items-center mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: "4" }, {}, {
                                    default: () => {
                                      return `${validate_component(Label, "Label").$$render(
                                        $$result,
                                        {
                                          for: "serverName",
                                          class: "float-end fs-6"
                                        },
                                        {},
                                        {
                                          default: () => {
                                            return `${escape($_("server.server_name"))} :`;
                                          }
                                        }
                                      )}`;
                                    }
                                  })}
							${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                                    default: () => {
                                      return `${validate_component(Input, "Input").$$render(
                                        $$result,
                                        {
                                          type: "text",
                                          id: "serverName",
                                          invalid: server.server_name.length < 3,
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
                                  })}`;
                                }
                              })}`;
                            }
                          })}
					${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-3 align-items-center mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: "4" }, {}, {
                                    default: () => {
                                      return `${validate_component(Label, "Label").$$render($$result, { for: "serverIp", class: "float-end fs-6" }, {}, {
                                        default: () => {
                                          return `${escape($_("server.server_ip"))} :`;
                                        }
                                      })}`;
                                    }
                                  })}
							${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                                    default: () => {
                                      return `${validate_component(Input, "Input").$$render(
                                        $$result,
                                        {
                                          type: "text",
                                          id: "serverIp",
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
                                  })}`;
                                }
                              })}`;
                            }
                          })}
					${validate_component(FormGroup, "FormGroup").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "g-3 align-items-center mb-3" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: "4" }, {}, {
                                    default: () => {
                                      return `${validate_component(Label, "Label").$$render(
                                        $$result,
                                        {
                                          for: "server_api",
                                          class: "float-end fs-6"
                                        },
                                        {},
                                        {
                                          default: () => {
                                            return `${escape($_("server.server_api"))} :`;
                                          }
                                        }
                                      )}`;
                                    }
                                  })}
							${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                                    default: () => {
                                      return `${validate_component(Input, "Input").$$render(
                                        $$result,
                                        {
                                          type: "text",
                                          id: "server_api",
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
                          })}
					`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}
		${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Button, "Button").$$render($$result, { color: "primary", type: "submit" }, {}, {
                    default: () => {
                      return `${escape($_("save"))}`;
                    }
                  })}
			${validate_component(Button, "Button").$$render($$result, { color: "secondary", type: "button" }, {}, {
                    default: () => {
                      return `${escape($_("cancel"))}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe__();
  return $$rendered;
});
const TableServer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let totalItems;
  let paginatedItems;
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { data = [] } = $$props;
  let { handleDelete = (row) => {
  } } = $$props;
  let currentPage = 1;
  let pageSize = 10;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.handleDelete === void 0 && $$bindings.handleDelete && handleDelete !== void 0)
    $$bindings.handleDelete(handleDelete);
  items = data ?? [];
  totalItems = data.length;
  paginatedItems = paginate({ items, pageSize, currentPage });
  $$unsubscribe__();
  return `<div class="table-custom"><div class="table-responsive"><table class="table table-sm"><thead><tr><th class="fw-semibold" style="width: 25%;">${escape($_("server.server_name"))}</th>
					<th class="fw-semibold">${escape($_("server.server_api"))}</th>
					<th class="fw-semibold">${escape($_("server.server_ip"))}</th>
					
					<th class="fw-semibold" style="width: 15%;">${escape($_("common.action"))}</th></tr></thead>
			<tbody>${data?.length > 0 ? `${each(paginatedItems, (row, i) => {
    return `<tr><td><strong>${escape(row.server_name)}</strong></td>
							<td><strong>${escape(row.server_api)}</strong></td>
							<td><strong>${escape(row.server_ip)}</strong></td>
							
							<td class="btn-group" role="group"><div class="d-flex justify-content-center"><a class="btn btn-icon btn-soft btn-outline-primary btnDetail"${add_attribute("href", `/server/${row.id}`, 0)}><i class="uil uil-edit mx-auto"></i></a>
											<button type="button" class="btn btn-icon btn-soft btn-outline-danger btnDelete"><i class="uil uil-minus-circle mx-auto"></i></button>
								</div></td>
						</tr>`;
  })}` : `<tr><td colspan="4" class="text-center">${escape($_("no_data"))}</td></tr>`}</tbody></table></div>
	<div class="d-flex justify-content-between"><div class="d-flex"><span class="table-info">${escape(pageSize * (currentPage - 1) + 1)} - ${escape(pageSize * (currentPage - 1) + paginatedItems.length)} của ${escape(totalItems)}</span>
			${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "me-2" }, {}, {
    default: () => {
      return `${validate_component(DropdownToggle, "DropdownToggle").$$render(
        $$result,
        {
          class: "table-info-dropdown table-info-dropdown-toggle"
        },
        {},
        {
          default: () => {
            return `${escape(pageSize)}
					${escape($_("row"))}`;
          }
        }
      )}
				${validate_component(DropdownMenu, "DropdownMenu").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { active: pageSize == 5 }, {}, {
            default: () => {
              return `5 ${escape($_("row"))}`;
            }
          })}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, { active: pageSize == 10 }, {}, {
            default: () => {
              return `10 ${escape($_("row"))}`;
            }
          })}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, { active: pageSize == 20 }, {}, {
            default: () => {
              return `20 ${escape($_("row"))}`;
            }
          })}
					${validate_component(DropdownItem, "DropdownItem").$$render($$result, { active: pageSize == 30 }, {}, {
            default: () => {
              return `30 ${escape($_("row"))}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>
		<div class="float-end table-pagination mb-3">${validate_component(PaginationNav, "PaginationNav").$$render(
    $$result,
    {
      totalItems,
      pageSize,
      currentPage,
      limit: 1,
      showStepOptions: true
    },
    {},
    {}
  )}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { data } = $$props;
  const token = data.session.token;
  let servers = data.servers;
  let modalAddServerOpen = false;
  const handleGetServers = async () => {
    let result = await apiGetServers(99, 0, {}, token);
    if (result.ok) {
      let { data: data2 } = await result.json();
      servers = data2 ?? [];
    } else {
      notifyApiError(result);
    }
  };
  const refreshTableServer = async () => {
    try {
      await handleGetServers();
    } catch (e) {
      console.log(e);
    }
  };
  const handleDeleteServer = async (server) => {
    Swal.fire({
      title: $_("message.do_you_want_to_delete") + " ?",
      showCancelButton: true,
      cancelButtonText: $_("message.cancel"),
      confirmButtonText: $_("delete")
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiDeleteServer(server.id, token).then(async (result2) => {
          if (result2.ok) {
            notifySuccess($_("message.delete_success"), 1500);
            refreshTableServer();
          } else {
            notifyApiError(result2);
            return;
          }
        }).catch((error) => {
          console.log("error", error);
        });
      }
    });
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Row, "Row").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Col, "Col").$$render($$result, { lg: "12" }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, { class: "border-0 mb-4 rounded" }, {}, {
              default: () => {
                return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TabContent, "TabContent").$$render($$result, { class: "nav-fill", pills: true }, {}, {
                      default: () => {
                        return `${validate_component(TabPane, "TabPane").$$render(
                          $$result,
                          {
                            tabId: "serversTab",
                            tab: $_("common.server"),
                            active: true
                          },
                          {},
                          {
                            default: () => {
                              return `${validate_component(Row, "Row").$$render($$result, { class: "mb-2" }, {}, {
                                default: () => {
                                  return `${validate_component(Col, "Col").$$render($$result, { lg: "6" }, {}, {
                                    default: () => {
                                      return `${validate_component(CardTitle, "CardTitle").$$render(
                                        $$result,
                                        {
                                          title: $_("common.server_management"),
                                          icon: "ti ti-rocket"
                                        },
                                        {},
                                        {}
                                      )}`;
                                    }
                                  })}
							${validate_component(Col, "Col").$$render($$result, { lg: "6" }, {}, {
                                    default: () => {
                                      return `<div class="d-flex justify-content-end"><button type="button" class="btn-custom btn-custom-info me-1"><i class="ti ti-plus"></i>
											${escape($_("common.add_new"))}</button>
									
									<button type="button" class="btn-custom btn-custom-info"><i class="ti ti-refresh"></i>
										${escape($_("common.refresh"))}</button></div>`;
                                    }
                                  })}`;
                                }
                              })}
						${validate_component(TableServer, "TableServer").$$render(
                                $$result,
                                {
                                  data: servers,
                                  handleDelete: handleDeleteServer
                                },
                                {},
                                {}
                              )}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}
${validate_component(AddModal, "AddModal").$$render(
      $$result,
      { token, isOpen: modalAddServerOpen },
      {
        isOpen: ($$value) => {
          modalAddServerOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe__();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1441fbf8.js.map
