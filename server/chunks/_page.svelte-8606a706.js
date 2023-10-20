import { c as create_ssr_component, a as subscribe, v as validate_component, h as escape, i as each, g as add_attribute } from './index-288b18f9.js';
import 'query-string';
import './variable-aefe6ab7.js';
import 'sweetalert2';
import 'moment';
import { a as $format } from './runtime.esm-7041db2b.js';
import { B as Button } from './Button-90a7368c.js';
import { R as Row, C as Col } from './Row-10945340.js';
import { C as CardTitle, F as Form, T as TabContent, a as TabPane } from './CardTitle-7539ab47.js';
import { F as FormGroup } from './FormGroup-52cd2108.js';
import { L as Label, I as Input } from './Label-76b9c5fa.js';
import { n as notifySuccess, a as notifyApiError, M as Modal, b as ModalBody, c as ModalFooter, p as paginate } from './paginate-393ff22a.js';
import { c as apiDeleteCid, d as apiGetCidsByGroupId } from './cid-169df200.js';
import { D as Dropdown, a as DropdownToggle, b as DropdownMenu, c as DropdownItem, P as PaginationNav } from './DarkPaginationNav.svelte_svelte_type_style_lang-c11b1c6a.js';
import { C as Card, a as CardBody } from './CardBody-8a7529a7.js';
import './shared-server-b7e48788.js';
import './index3-1a5be8d5.js';
import './Offcanvas.svelte_svelte_type_style_lang-273b5b4d.js';

const AddModalOnGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { isOpen = false } = $$props;
  let { token } = $$props;
  let { data } = $$props;
  let cid = {
    caller_id: "",
    tenant_id: "",
    group_cid_id: data.groupcid.data.id,
    status: "ok"
  };
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.token === void 0 && $$bindings.token && token !== void 0)
    $$bindings.token(token);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
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
                          return `<h6 class="text-white mb-0 fw-bold">1. ${escape($_("common.add_new"))} ${escape($_("common.cid"))}</h6>
					
					<small class="text-white mb-0">${escape($_("common.add_new"))} ${escape($_("common.cid"))}</small>`;
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
                                      return `${validate_component(Label, "Label").$$render($$result, { for: "cId", class: "float-end fs-6" }, {}, {
                                        default: () => {
                                          return `${escape($_("caller_id"))} :`;
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
                                          id: "cId",
                                          invalid: cid.caller_id.length < 3,
                                          value: cid.caller_id
                                        },
                                        {
                                          value: ($$value) => {
                                            cid.caller_id = $$value;
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
                                      return `${validate_component(Label, "Label").$$render($$result, { for: "groupCid", class: "float-end fs-6" }, {}, {
                                        default: () => {
                                          return `${escape($_("group_cid_id"))} :`;
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
                                          class: "form-control",
                                          name: "groupCid",
                                          readonly: true,
                                          value: cid.group_cid_id
                                        },
                                        {
                                          value: ($$value) => {
                                            cid.group_cid_id = $$value;
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
                                          for: "tenant_id",
                                          class: "float-end fs-6"
                                        },
                                        {},
                                        {
                                          default: () => {
                                            return `${escape($_("tenant_id"))} :`;
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
                                          id: "tenant_id",
                                          value: cid.tenant_id
                                        },
                                        {
                                          value: ($$value) => {
                                            cid.tenant_id = $$value;
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
                          })}`;
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
const TableCid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="table-custom"><div class="table-responsive"><table class="table table-sm"><thead><tr><th class="fw-semibold" style="width: 35%;">${escape($_("cid.caller_id"))}</th>
					
					<th class="fw-semibold">${escape($_("cid.tenant_id"))}</th>
					<th class="fw-semibold">${escape($_("cid.status"))}</th>
					<th class="fw-semibold" style="width: 15%;">${escape($_("common.action"))}</th></tr></thead>
			<tbody>${data?.length > 0 ? `${each(paginatedItems, (row, i) => {
    return `<tr><td><strong>${escape(row.caller_id)}</strong></td>
							
							<td><strong>${escape(row.tenant_id)}</strong></td>
							<td><strong>${escape(row.status)}</strong></td>
							<td class="btn-group" role="group"><div class="d-flex justify-content-center"><a class="btn btn-icon btn-soft btn-outline-primary btnDetail"${add_attribute("href", `/cid/${row.id}`, 0)}><i class="fas fa-pencil-alt"></i></a>
											<button type="button" class="btn btn-icon btn-soft btn-outline-danger btnDelete"><i class="ni ni-trash"></i></button>
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
const css = {
  code: '@import "$lib/css/custom_form.css";.svelecte-control{--sv-bg:transparent !important;--sv-color:inherit;--sv-min-height:42px;--sv-border-color:transparent;--sv-border:none !important;--sv-active-border:none !important;--sv-active-outline:none;--sv-item-selected-bg:#478ffc !important}.sv-dropdown{background-color:#fff !important}.sv-item{border-radius:0.375rem !important}.sv-item .sv-item-content{color:#fff !important;font-size:0.85rem !important}.sv-dropdown-content .sv-item-content{color:#6c6c6c !important}.sv-item .sv-item-btn{border-radius:0.375rem !important}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe($format, (value) => $_ = value);
  let { data } = $$props;
  const groupcidUuid = data.id;
  const token = data.session.token;
  data.session.tenant_id;
  let cids = data.groupcid.data.cids;
  let modalAddCidOpen = false;
  let groupcid = data.groupcid;
  const handleGetCids = async () => {
    let result = await apiGetCidsByGroupId(99, 0, groupcidUuid, {}, token);
    if (result.ok) {
      let { data: data2 } = await result.json();
      cids = data2 ?? [];
    } else {
      notifyApiError(result);
    }
  };
  const refreshTableCid = async () => {
    try {
      await handleGetCids();
    } catch (e) {
      console.log(e);
    }
  };
  const handleDeleteCid = async (cid) => {
    Swal.fire({
      title: $_("message.do_you_want_to_delete") + " ?",
      showCancelButton: true,
      cancelButtonText: $_("message.cancel"),
      confirmButtonText: $_("delete")
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiDeleteCid(cid.id, token).then(async (result2) => {
          if (result2.ok) {
            notifySuccess($_("message.delete_success"), 1500);
            refreshTableCid();
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
  refreshTableCid();
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
                title: $_("common.groupcid"),
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
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "groupCidIdName" }, {}, {
                                    default: () => {
                                      return `${escape($_("common.group_cid_name"))}`;
                                    }
                                  })}
							${validate_component(Input, "Input").$$render(
                                    $$result,
                                    {
                                      type: "text",
                                      class: "form-control",
                                      name: "groupCidIdName",
                                      placeholder: "Group CID Name",
                                      value: groupcid.data.group_cid_name
                                    },
                                    {
                                      value: ($$value) => {
                                        groupcid.data.group_cid_name = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })}
						${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "refCarrierId" }, {}, {
                                    default: () => {
                                      return `${escape($_("common.ref_carrier_uuid"))}`;
                                    }
                                  })}
							${validate_component(Input, "Input").$$render(
                                    $$result,
                                    {
                                      type: "text",
                                      class: "form-control",
                                      name: "refCarrierId",
                                      placeholder: "Ref Carrier UUID",
                                      value: groupcid.data.ref_carrier_uuid
                                    },
                                    {
                                      value: ($$value) => {
                                        groupcid.data.ref_carrier_uuid = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })}
						
						${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "telCampId" }, {}, {
                                    default: () => {
                                      return `${escape($_("common.tel_campaign_id"))}`;
                                    }
                                  })}
							${validate_component(Input, "Input").$$render(
                                    $$result,
                                    {
                                      type: "text",
                                      class: "form-control",
                                      name: "telCampId",
                                      placeholder: "Tel Campaign UUID",
                                      value: groupcid.data.tel_campaign_id
                                    },
                                    {
                                      value: ($$value) => {
                                        groupcid.data.tel_campaign_id = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })}
						${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "network" }, {}, {
                                    default: () => {
                                      return `${escape($_("common.network"))}`;
                                    }
                                  })}
							${validate_component(Input, "Input").$$render(
                                    $$result,
                                    {
                                      type: "text",
                                      class: "form-control",
                                      name: "network",
                                      placeholder: "Network",
                                      value: groupcid.data.network
                                    },
                                    {
                                      value: ($$value) => {
                                        groupcid.data.network = $$value;
                                        $$settled = false;
                                      }
                                    },
                                    {}
                                  )}`;
                                }
                              })}
						${validate_component(Col, "Col").$$render($$result, { md: "3" }, {}, {
                                default: () => {
                                  return `${validate_component(Label, "Label").$$render($$result, { for: "order" }, {}, {
                                    default: () => {
                                      return `${escape($_("common.order"))}`;
                                    }
                                  })}
							${validate_component(Input, "Input").$$render(
                                    $$result,
                                    {
                                      type: "text",
                                      class: "form-control",
                                      name: "order",
                                      placeholder: "Order",
                                      value: groupcid.data.order
                                    },
                                    {
                                      value: ($$value) => {
                                        groupcid.data.order = $$value;
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
                })}`;
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
        })}
	${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CardTitle, "CardTitle").$$render(
              $$result,
              {
                title: $_("common.cid_management"),
                icon: "ti ti-rocket"
              },
              {},
              {}
            )}
		${validate_component(Col, "Col").$$render($$result, { lg: "10" }, {}, {
              default: () => {
                return `<div class="d-flex justify-content-end"><button type="button" class="btn-custom btn-custom-info me-1"><i class="ti ti-plus"></i>
					${escape($_("common.add_new"))}</button>
				
				<button type="button" class="btn-custom btn-custom-info"><i class="ti ti-refresh"></i>
					${escape($_("common.refresh"))}</button></div>`;
              }
            })}
		${validate_component(TableCid, "TableCid").$$render(
              $$result,
              {
                data: cids,
                handleDelete: handleDeleteCid
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    })}
${validate_component(AddModalOnGroup, "AddModalOnGroup").$$render(
      $$result,
      { data, token, isOpen: modalAddCidOpen },
      {
        isOpen: ($$value) => {
          modalAddCidOpen = $$value;
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
//# sourceMappingURL=_page.svelte-8606a706.js.map
