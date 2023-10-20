import { c as create_ssr_component, a as subscribe, v as validate_component, h as escape, i as each, g as add_attribute } from './index-288b18f9.js';
import { c as apiDeleteGroupCid, a as apiGetGroupCids } from './groupcid-d4281457.js';
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
  let groupcid = {
    tenant_id: tenantId,
    tel_campaign_id: "",
    group_cid_name: "",
    network: "",
    ref_carrier_uuid: "",
    order: 1
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
                          return `<h6 class="text-white mb-0 fw-bold">${escape($_("common.add_new"))} ${escape($_("common.groupcid"))}</h6>
					
					<small class="text-white mb-0">${escape($_("common.add_new"))} ${escape($_("common.groupcid"))}</small>`;
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
                                          for: "groupCidName",
                                          class: "float-end fs-6"
                                        },
                                        {},
                                        {
                                          default: () => {
                                            return `${escape($_("groupcid.group_cid_name"))} :`;
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
                                          id: "groupCidName",
                                          invalid: groupcid.group_cid_name.length < 3,
                                          value: groupcid.group_cid_name
                                        },
                                        {
                                          value: ($$value) => {
                                            groupcid.group_cid_name = $$value;
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
                                          for: "telCampId",
                                          class: "float-end fs-6"
                                        },
                                        {},
                                        {
                                          default: () => {
                                            return `${escape($_("groupcid.tel_campaign_id"))} :`;
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
                                          id: "telCampId",
                                          value: groupcid.tel_campaign_id
                                        },
                                        {
                                          value: ($$value) => {
                                            groupcid.tel_campaign_id = $$value;
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
                                      return `${validate_component(Label, "Label").$$render($$result, { for: "network", class: "float-end fs-6" }, {}, {
                                        default: () => {
                                          return `${escape($_("groupcid.network"))} :`;
                                        }
                                      })}`;
                                    }
                                  })}
							${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                                    default: () => {
                                      return `${validate_component(Input, "Input").$$render(
                                        $$result,
                                        {
                                          type: "select",
                                          id: "network",
                                          value: groupcid.network
                                        },
                                        {
                                          value: ($$value) => {
                                            groupcid.network = $$value;
                                            $$settled = false;
                                          }
                                        },
                                        {
                                          default: () => {
                                            return `<option value="viettel">Viettel</option>
									<option value="mobi">Mobi</option>
									<option value="vina">Vina</option>
									<option value="offnet">Offnet</option>
									<option value="tel">Tel</option>`;
                                          }
                                        }
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
                                          for: "refCarrierId",
                                          class: "float-end fs-6"
                                        },
                                        {},
                                        {
                                          default: () => {
                                            return `${escape($_("groupcid.ref_carrier_uuid"))} :`;
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
                                          id: "refCarrierId",
                                          value: groupcid.ref_carrier_uuid
                                        },
                                        {
                                          value: ($$value) => {
                                            groupcid.ref_carrier_uuid = $$value;
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
                                      return `${validate_component(Label, "Label").$$render($$result, { for: "order", class: "float-end fs-6" }, {}, {
                                        default: () => {
                                          return `${escape($_("groupcid.order"))} :`;
                                        }
                                      })}`;
                                    }
                                  })}
							${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                                    default: () => {
                                      return `${validate_component(Input, "Input").$$render(
                                        $$result,
                                        {
                                          type: "number",
                                          id: "order",
                                          value: groupcid.order
                                        },
                                        {
                                          value: ($$value) => {
                                            groupcid.order = $$value;
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
const TableGroupCid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="table-custom"><div class="table-responsive"><table class="table table-sm"><thead><tr><th class="fw-semibold" style="width: 25%;">${escape($_("groupcid.group_cid_name"))}</th>
					<th class="fw-semibold">${escape($_("groupcid.tel_campaign_id"))}</th>
					
					<th class="fw-semibold">${escape($_("groupcid.network"))}</th>
					<th class="fw-semibold">${escape($_("groupcid.ref_carrier_uuid"))}</th>
					<th class="fw-semibold" style="width: 5%;">${escape($_("groupcid.order"))}</th>
					<th class="fw-semibold" style="width: 15%;">${escape($_("common.action"))}</th></tr></thead>
			<tbody>${data?.length > 0 ? `${each(paginatedItems, (row, i) => {
    return `<tr><td><strong>${escape(row.group_cid_name)}</strong></td>
							<td><strong>${escape(row.tel_campaign_id)}</strong></td>
							
							<td><strong>${escape(row.network)}</strong></td>
							<td><strong>${escape(row.ref_carrier_uuid)}</strong></td>
							<td><strong>${escape(row.order)}</strong></td>
							<td class="btn-group" role="group"><div class="d-flex justify-content-center"><a class="btn btn-icon btn-soft btn-outline-primary btnDetail"${add_attribute("href", `/groupcid/${row.id}`, 0)}><i class="uil uil-edit mx-auto"></i></a>
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
  let groupcids = data.groupcids;
  let modalAddGroupCidOpen = false;
  const handleGetGroupCids = async () => {
    let result = await apiGetGroupCids(99, 0, {}, token);
    if (result.ok) {
      let { data: data2 } = await result.json();
      groupcids = data2 ?? [];
    } else {
      notifyApiError(result);
    }
  };
  const refreshTableGroupCid = async () => {
    try {
      await handleGetGroupCids();
    } catch (e) {
      console.log(e);
    }
  };
  const handleDeleteGroupCid = async (cid) => {
    Swal.fire({
      title: $_("message.do_you_want_to_delete") + " ?",
      showCancelButton: true,
      cancelButtonText: $_("message.cancel"),
      confirmButtonText: $_("delete")
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiDeleteGroupCid(cid.id, token).then(async (result2) => {
          if (result2.ok) {
            notifySuccess($_("message.delete_success"), 1500);
            refreshTableGroupCid();
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
                            tabId: "cidsTab",
                            tab: $_("common.groupcid"),
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
                                          title: $_("common.groupcid_management"),
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
						${validate_component(TableGroupCid, "TableGroupCid").$$render(
                                $$result,
                                {
                                  data: groupcids,
                                  handleDelete: handleDeleteGroupCid
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
      { token, isOpen: modalAddGroupCidOpen },
      {
        isOpen: ($$value) => {
          modalAddGroupCidOpen = $$value;
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
//# sourceMappingURL=_page.svelte-ecbb4e6d.js.map
