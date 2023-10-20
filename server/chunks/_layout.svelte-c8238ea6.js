import { c as create_ssr_component, v as validate_component, g as add_attribute, a as subscribe, i as each, h as escape, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, j as createEventDispatcher, o as onDestroy, k as identity } from './index-288b18f9.js';
import { p as page } from './stores-1c76c6b0.js';
import { c as classnames } from './Offcanvas.svelte_svelte_type_style_lang-273b5b4d.js';

function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const NavbarBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "href"]);
  let { class: className = "" } = $$props;
  let { href = "/" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, "navbar-brand");
  return `<a${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { href: escape_attribute_value(href) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const css$4 = {
  code: ".v-scrollbar.svelte-iodyq2{position:absolute;top:0;right:0;width:var(--svrollbar-track-width, 10px)}.v-scrollbar.fixed.svelte-iodyq2{position:fixed}.v-track.svelte-iodyq2{position:absolute;top:0;right:0;border-radius:var(--svrollbar-track-radius, initial);width:var(--svrollbar-track-width, 10px);opacity:var(--svrollbar-track-opacity, 1);background:var(--svrollbar-track-background, initial);box-shadow:var(--svrollbar-track-shadow, initial)}.v-thumb.svelte-iodyq2{position:relative;margin:0 auto;border-radius:var(--svrollbar-thumb-radius, 0.25rem);width:var(--svrollbar-thumb-width, 6px);opacity:var(--svrollbar-thumb-opacity, 0.5);background:var(--svrollbar-thumb-background, gray);box-shadow:var(--svrollbar-thumb-shadow, initial)}",
  map: null
};
const Svrollbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teardownViewport;
  let teardownContents;
  let teardownTrack;
  let teardownThumb;
  let marginTop;
  let marginBottom;
  let marginRight;
  let marginLeft;
  let wholeHeight;
  let scrollTop;
  let trackHeight;
  let thumbHeight;
  let thumbTop;
  let scrollable;
  let visible;
  let { viewport } = $$props;
  let { contents } = $$props;
  let { hideAfter = 1e3 } = $$props;
  let { alwaysVisible = false } = $$props;
  let { initiallyVisible = false } = $$props;
  let { margin = {} } = $$props;
  let { vTrackIn = (node) => fade(node, { duration: 100 }) } = $$props;
  let { vTrackOut = (node) => fade(node, { duration: 300 }) } = $$props;
  let { vThumbIn = (node) => fade(node, { duration: 100 }) } = $$props;
  let { vThumbOut = (node) => fade(node, { duration: 300 }) } = $$props;
  const dispatch = createEventDispatcher();
  let vTrack;
  let vThumb;
  let startTop = 0;
  let startY = 0;
  let timer = 0;
  let windowScrollEnabled = false;
  let interacted = false;
  function setupViewport(viewport2) {
    if (!viewport2)
      return;
    teardownViewport?.();
    if (typeof window.ResizeObserver === "undefined") {
      throw new Error("window.ResizeObserver is missing.");
    }
    windowScrollEnabled = document.scrollingElement === viewport2;
    const element = windowScrollEnabled ? document : viewport2;
    element.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver((entries) => {
      for (const _entry of entries) {
        wholeHeight = viewport2?.scrollHeight ?? 0;
        trackHeight = viewport2?.clientHeight - (marginTop + marginBottom);
      }
    });
    observer.observe(viewport2);
    return () => {
      element.removeEventListener("scroll", onScroll);
      observer.unobserve(contents);
      observer.disconnect();
    };
  }
  function setupTrack(track) {
    if (!track)
      return;
    teardownTrack?.();
    vTrack.addEventListener("mouseenter", onTrackEnter);
    vTrack.addEventListener("mouseleave", onTrackLeave);
    return () => {
      vTrack.removeEventListener("mouseenter", onTrackEnter);
      vTrack.removeEventListener("mouseleave", onTrackLeave);
    };
  }
  function setupThumb(thumb) {
    if (!thumb)
      return;
    teardownThumb?.();
    vThumb.addEventListener("mousedown", onThumbDown, { passive: true });
    vThumb.addEventListener("touchstart", onThumbDown, { passive: true });
    return () => {
      vThumb.removeEventListener("mousedown", onThumbDown);
      vThumb.removeEventListener("touchstart", onThumbDown);
    };
  }
  function setupContents(contents2) {
    if (!contents2)
      return;
    teardownContents?.();
    if (typeof window.ResizeObserver === "undefined") {
      throw new Error("window.ResizeObserver is missing.");
    }
    const observer = new ResizeObserver((entries) => {
      for (const _entry of entries) {
        wholeHeight = viewport?.scrollHeight ?? 0;
      }
    });
    observer.observe(contents2);
    return () => {
      observer.unobserve(contents2);
      observer.disconnect();
    };
  }
  function setupTimer() {
    timer = window.setTimeout(
      () => {
        visible = scrollable && (alwaysVisible || initiallyVisible && !interacted) || false;
        dispatch("hide");
      },
      hideAfter
    );
  }
  function clearTimer() {
    if (timer) {
      window.clearTimeout(timer);
      timer = 0;
    }
  }
  function onScroll() {
    if (!scrollable)
      return;
    clearTimer();
    setupTimer();
    visible = alwaysVisible || initiallyVisible && !interacted || true;
    scrollTop = viewport?.scrollTop ?? 0;
    interacted = true;
    dispatch("show");
  }
  function onTrackEnter() {
    clearTimer();
  }
  function onTrackLeave() {
    clearTimer();
    setupTimer();
  }
  function onThumbDown(event) {
    event.stopPropagation();
    event.preventDefault();
    startTop = viewport.scrollTop;
    startY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    document.addEventListener("mousemove", onThumbMove);
    document.addEventListener("touchmove", onThumbMove);
    document.addEventListener("mouseup", onThumbUp);
    document.addEventListener("touchend", onThumbUp);
  }
  function onThumbMove(event) {
    event.stopPropagation();
    event.preventDefault();
    const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    const ratio = wholeHeight / trackHeight;
    viewport.scrollTop = startTop + ratio * (clientY - startY);
  }
  function onThumbUp(event) {
    event.stopPropagation();
    event.preventDefault();
    startTop = 0;
    startY = 0;
    document.removeEventListener("mousemove", onThumbMove);
    document.removeEventListener("touchmove", onThumbMove);
    document.removeEventListener("mouseup", onThumbUp);
    document.removeEventListener("touchend", onThumbUp);
  }
  onDestroy(() => {
    teardownViewport?.();
    teardownContents?.();
    teardownTrack?.();
    teardownThumb?.();
  });
  if ($$props.viewport === void 0 && $$bindings.viewport && viewport !== void 0)
    $$bindings.viewport(viewport);
  if ($$props.contents === void 0 && $$bindings.contents && contents !== void 0)
    $$bindings.contents(contents);
  if ($$props.hideAfter === void 0 && $$bindings.hideAfter && hideAfter !== void 0)
    $$bindings.hideAfter(hideAfter);
  if ($$props.alwaysVisible === void 0 && $$bindings.alwaysVisible && alwaysVisible !== void 0)
    $$bindings.alwaysVisible(alwaysVisible);
  if ($$props.initiallyVisible === void 0 && $$bindings.initiallyVisible && initiallyVisible !== void 0)
    $$bindings.initiallyVisible(initiallyVisible);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.vTrackIn === void 0 && $$bindings.vTrackIn && vTrackIn !== void 0)
    $$bindings.vTrackIn(vTrackIn);
  if ($$props.vTrackOut === void 0 && $$bindings.vTrackOut && vTrackOut !== void 0)
    $$bindings.vTrackOut(vTrackOut);
  if ($$props.vThumbIn === void 0 && $$bindings.vThumbIn && vThumbIn !== void 0)
    $$bindings.vThumbIn(vThumbIn);
  if ($$props.vThumbOut === void 0 && $$bindings.vThumbOut && vThumbOut !== void 0)
    $$bindings.vThumbOut(vThumbOut);
  $$result.css.add(css$4);
  teardownViewport = setupViewport(viewport);
  teardownContents = setupContents(contents);
  teardownTrack = setupTrack(vTrack);
  teardownThumb = setupThumb(vThumb);
  marginTop = margin.top ?? 0;
  marginBottom = margin.bottom ?? 0;
  marginRight = margin.right ?? 0;
  marginLeft = margin.left ?? 0;
  wholeHeight = viewport?.scrollHeight ?? 0;
  scrollTop = viewport?.scrollTop ?? 0;
  trackHeight = viewport?.clientHeight ?? 0 - (marginTop + marginBottom);
  thumbHeight = wholeHeight > 0 ? trackHeight / wholeHeight * trackHeight : 0;
  thumbTop = wholeHeight > 0 ? scrollTop / wholeHeight * trackHeight : 0;
  scrollable = wholeHeight > trackHeight;
  visible = scrollable && (alwaysVisible || initiallyVisible);
  return `${visible ? `<div class="${["v-scrollbar svelte-iodyq2", windowScrollEnabled ? "fixed" : ""].join(" ").trim()}" style="${"height: " + escape(trackHeight, true) + "px; margin: " + escape(marginTop, true) + "px " + escape(marginRight, true) + "px " + escape(marginBottom, true) + "px " + escape(marginLeft, true) + "px"}"><div class="v-track svelte-iodyq2" style="${"height: " + escape(trackHeight, true) + "px"}"${add_attribute("this", vTrack, 0)}></div>
    <div class="v-thumb svelte-iodyq2" style="${"height: " + escape(thumbHeight, true) + "px; top: " + escape(thumbTop, true) + "px"}"${add_attribute("this", vThumb, 0)}></div></div>` : ``}`;
});
const css$3 = {
  code: ".svlr-wrapper.svelte-2auii3{position:relative}.svlr-viewport.svelte-2auii3{position:relative;overflow:scroll;box-sizing:border-box;-ms-overflow-style:none;scrollbar-width:none}.svlr-viewport.svelte-2auii3::-webkit-scrollbar{display:none}",
  map: null
};
const Svroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "10rem" } = $$props;
  let { height = "10rem" } = $$props;
  let { hideAfter = 1e3 } = $$props;
  let { alwaysVisible = false } = $$props;
  let { initiallyVisible = false } = $$props;
  let { margin = {} } = $$props;
  let { vTrackIn = (node) => fade(node, { duration: 100 }) } = $$props;
  let { vTrackOut = (node) => fade(node, { duration: 300 }) } = $$props;
  let { vThumbIn = (node) => fade(node, { duration: 100 }) } = $$props;
  let { vThumbOut = (node) => fade(node, { duration: 300 }) } = $$props;
  let viewport;
  let contents;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.hideAfter === void 0 && $$bindings.hideAfter && hideAfter !== void 0)
    $$bindings.hideAfter(hideAfter);
  if ($$props.alwaysVisible === void 0 && $$bindings.alwaysVisible && alwaysVisible !== void 0)
    $$bindings.alwaysVisible(alwaysVisible);
  if ($$props.initiallyVisible === void 0 && $$bindings.initiallyVisible && initiallyVisible !== void 0)
    $$bindings.initiallyVisible(initiallyVisible);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.vTrackIn === void 0 && $$bindings.vTrackIn && vTrackIn !== void 0)
    $$bindings.vTrackIn(vTrackIn);
  if ($$props.vTrackOut === void 0 && $$bindings.vTrackOut && vTrackOut !== void 0)
    $$bindings.vTrackOut(vTrackOut);
  if ($$props.vThumbIn === void 0 && $$bindings.vThumbIn && vThumbIn !== void 0)
    $$bindings.vThumbIn(vThumbIn);
  if ($$props.vThumbOut === void 0 && $$bindings.vThumbOut && vThumbOut !== void 0)
    $$bindings.vThumbOut(vThumbOut);
  $$result.css.add(css$3);
  return `<div class="svlr-wrapper svelte-2auii3" style="${"width: " + escape(width, true) + "; height: " + escape(height, true)}"><div class="svlr-viewport svelte-2auii3" style="${"width: " + escape(width, true) + "; height: " + escape(height, true)}"${add_attribute("this", viewport, 0)}><div class="svlr-contents"${add_attribute("this", contents, 0)}>${slots.default ? slots.default({}) : ``}</div></div>
  ${validate_component(Svrollbar, "Svrollbar").$$render(
    $$result,
    {
      viewport,
      contents,
      hideAfter,
      alwaysVisible,
      initiallyVisible,
      margin,
      vTrackIn,
      vTrackOut,
      vThumbIn,
      vThumbOut
    },
    {},
    {}
  )}
</div>`;
});
const css$2 = {
  code: '.content-center{display:flex;align-items:center;justify-content:center}.inline-content-center{display:inline-flex;align-items:center;justify-content:center}.align-center{display:flex;align-items:center}.sidebar{position:fixed;height:calc(100% - 72px);left:0;top:72px;box-shadow:0 0 30px rgba(var(--light-gray-rgba), 0.1);width:280px;background:var(--color-white);padding:0;transition:var(--transition);z-index:999}@media only screen and (max-width: 767px){.sidebar{top:56px;height:calc(100% - 56px)}}.sidebar__feature h3{line-height:1.2272727273}.sidebar__feature button{height:50px;font-size:15px;padding:2px 25px}.sidebar .menu-text{transition:0.2s}.sidebar .menuItem{display:inline-block}.sidebar.sidebar--collapsed{width:76px;padding:0}@media(max-width: 1150px){.sidebar.sidebar--collapsed{left:-76px}}.sidebar.sidebar--collapsed .menu-text{display:none}.sidebar.sidebar--collapsed .sidebar__menu-group ul.sidebar_nav li>a .menuItem,.sidebar.sidebar--collapsed .menuItem{display:none}.sidebar.sidebar--collapsed .sidebar__feature{display:none}.sidebar.sidebar--collapsed .sidebar__menu-group{margin-bottom:0}.sidebar.sidebar--collapsed .sidebar__menu-group>span{display:none}.sidebar.sidebar--collapsed .sidebar__menu-group li{position:relative}.sidebar.sidebar--collapsed .sidebar__menu-group li.menu-title{display:none}.sidebar.sidebar--collapsed .sidebar__menu-group li a{width:42px;height:42px;border-radius:50%;padding:15px 0;justify-content:center;margin:0 auto}.sidebar.sidebar--collapsed .sidebar__menu-group li a .nav-icon{margin-right:0}.sidebar.sidebar--collapsed .sidebar__menu-group li a .toggle-icon{display:none}.sidebar.sidebar--collapsed .sidebar__menu-group li a.active,.sidebar.sidebar--collapsed .sidebar__menu-group li a:hover{background-color:rgba(var(--color-primary-rgba), 0.05);color:var(--color-primary)}.sidebar.sidebar--collapsed .sidebar__menu-group .has-child ul{width:240px;background:var(--color-white);border-radius:5px;box-shadow:0 10px 20px rgba(0, 0, 0, 0.1);right:auto;position:fixed;top:auto;padding:10px 20px;transform:scale(0.8);transition:0.3s ease;visibility:hidden;opacity:0;pointer-events:none;max-height:350px;overflow-y:auto;z-index:999;padding-left:0}@media only screen and (max-width: 1399px){.sidebar.sidebar--collapsed .sidebar__menu-group .has-child ul{max-height:300px}}.sidebar.sidebar--collapsed .sidebar__menu-group .has-child ul li a{width:100%;height:auto;padding:8px 0;text-align:left;justify-content:flex-start}@media only screen and (max-width: 1599px){.sidebar.sidebar--collapsed .sidebar__menu-group .has-child ul li a{padding:6px 0}}.sidebar.sidebar--collapsed .sidebar__menu-group .has-child ul li a:hover,.sidebar.sidebar--collapsed .sidebar__menu-group .has-child ul li a.active{background-color:transparent;color:var(--color-primary)}@media screen and (min-width: 991px){.sidebar.sidebar--collapsed .sidebar__menu-group .has-child:hover ul{visibility:visible;display:block !important;transform:scale(1);opacity:1;pointer-events:all}}.sidebar.sidebar--collapsed .mCustomScrollBox,.sidebar.sidebar--collapsed .mCSB_container{overflow:visible}.sidebar:not(.sidebar--collapsed) .sidebar__menu-group ul.sidebar_nav>li:first-child>a{padding:21.5px 20px 10.5px 20px}.sidebar.sidebar--collapsed .sidebar__menu-group ul.sidebar_nav>li:first-child{margin-top:15px}.mCustomScrollbar .sidebar__menu-group ul.sidebar_nav li ul li{transition:var(--transition)}.mCustomScrollbar .sidebar__menu-group ul.sidebar_nav li ul li:hover,.mCustomScrollbar .sidebar__menu-group ul.sidebar_nav li ul li.active{background-color:rgba(var(--color-primary-rgba), 0.1)}.sidebar__menu-group{margin-bottom:25px}.sidebar__menu-group ul.sidebar_nav{margin:0;padding:0;list-style:none}.sidebar__menu-group ul.sidebar_nav li.menu-title span{text-transform:uppercase;display:block;color:var(--color-light);font-size:12px;font-weight:500;padding:0 20px;margin-bottom:10px}.sidebar__menu-group ul.sidebar_nav li.active>a{color:var(--color-primary)}.sidebar__menu-group ul.sidebar_nav li.active>a .nav-icon{color:currentColor}.sidebar__menu-group ul.sidebar_nav li.active>a .toggle-icon{color:currentColor}.sidebar__menu-group ul.sidebar_nav li>a{display:flex;align-items:center;padding:10.5px 20px 10.5px 20px;color:var(--color-gray);font-size:14px;position:relative;font-weight:500;line-height:1.3571428571;text-transform:capitalize}.sidebar__menu-group ul.sidebar_nav li>a .nav-icon{color:var(--color-lighten);display:inline-block;margin-right:20px;width:16px;font-size:calc(16.2px + 0.15vw);transition:var(--transition)}@media(min-width: 1200px){.sidebar__menu-group ul.sidebar_nav li>a .nav-icon{font-size:18px}}.sidebar__menu-group ul.sidebar_nav li>a .toggle-icon{font-size:12px;font-family:"Line Awesome Free";font-weight:900;margin-left:auto;transition:var(--transition)}.sidebar__menu-group ul.sidebar_nav li>a .toggle-icon:before{content:"\\f105"}.sidebar__menu-group ul.sidebar_nav li>a .menuItem{position:absolute;right:52px;top:50%;transform:translateY(-50%);height:auto;font-size:10px;font-weight:700;border-radius:3px;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;line-height:1}.sidebar__menu-group ul.sidebar_nav li>a:hover,.sidebar__menu-group ul.sidebar_nav li>a.active{color:var(--color-primary)}.sidebar__menu-group ul.sidebar_nav li>a:hover .toggle-icon,.sidebar__menu-group ul.sidebar_nav li>a:hover .nav-icon,.sidebar__menu-group ul.sidebar_nav li>a.active .toggle-icon,.sidebar__menu-group ul.sidebar_nav li>a.active .nav-icon{color:var(--color-primary)}.sidebar__menu-group ul.sidebar_nav li ul{padding:1px 36px 12px 0}.sidebar__menu-group ul.sidebar_nav li.has-child ul{transition:all 0.4s ease-in-out;overflow:hidden}.sidebar__menu-group ul.sidebar_nav li.has-child.open>a .toggle-icon:before{content:"\\f107"}.sidebar__menu-group ul.sidebar_nav li.has-child.open ul li a span{right:16px}.sidebar__menu-group ul.sidebar_nav li.has-child ul li{border-radius:0 50rem 50rem 0}.sidebar__menu-group ul.sidebar_nav li.has-child ul li a{margin-left:36px}.sidebar__menu-group ul.sidebar_nav li ul li{color:var(--color-dark);transition:0.3s}.sidebar__menu-group ul.sidebar_nav li ul li:hover,.sidebar__menu-group ul.sidebar_nav li ul li.active{color:var(--color-primary);background-color:rgba(var(--color-primary-rgba), 0.1)}.sidebar-toggle{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background-color:transparent}.sidebar-toggle:hover{background-color:rgba(var(--color-primary-rgba), 0.1)}.sidebar-toggle:hover svg,.sidebar-toggle:hover i{color:var(--color-primary)}.sidebar-toggle:hover svg path{fill:var(--color-primary) !important;color:var(--color-primary) !important}.sidebar-toggle:hover svg #Path_1,.sidebar-toggle:hover svg #Path_2,.sidebar-toggle:hover svg #Path_3{fill:var(--color-primary);color:var(--color-primary)}',
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { dashboardRoutes = [] } = $$props;
  let { applicationRoutes = [] } = $$props;
  if ($$props.dashboardRoutes === void 0 && $$bindings.dashboardRoutes && dashboardRoutes !== void 0)
    $$bindings.dashboardRoutes(dashboardRoutes);
  if ($$props.applicationRoutes === void 0 && $$bindings.applicationRoutes && applicationRoutes !== void 0)
    $$bindings.applicationRoutes(applicationRoutes);
  $$result.css.add(css$2);
  $page.url.pathname;
  $$unsubscribe_page();
  return `<aside class="sidebar">${validate_component(Svroller, "Svroller").$$render($$result, { width: "100%", height: "100%" }, {}, {
    default: () => {
      return `<div class="sidebar__menu-group"><ul class="sidebar_nav"><li class="has-child open d-none"><a${add_attribute("href", "#", 0)} class="has-child__toggle active"><span class="nav-icon uil uil-create-dashboard"></span>
						<span class="menu-text">Init</span>
						<span class="toggle-icon"></span></a>
					<ul><li class="menu-item active"><a href="/demo">Demo</a></li></ul></li>
				${dashboardRoutes.length > 0 ? `<li class="menu-title mt-30"><span>Dashboard</span></li>
					${each(dashboardRoutes, (route) => {
        return `<li${add_attribute(
          "class",
          route.childRoutes?.length > 0 ? "has-child" : "menu-item",
          0
        )}><a${add_attribute("href", route.childRoutes?.length > 0 ? "#" : route.path, 0)}><span class="${"nav-icon " + escape(route.icon, true)}"></span>
								<span class="menu-text">${escape(route.name)}</span>
								${route.childRoutes?.length > 0 ? `<span class="toggle-icon"></span>` : ``}</a>
							${route.childRoutes?.length > 0 ? `<ul>${each(route.childRoutes, (child) => {
          return `<li class="menu-item"><a${add_attribute("href", child.path, 0)}>${escape(child.name)}</a>
										</li>`;
        })}
								</ul>` : ``}
						</li>`;
      })}` : ``}
				${applicationRoutes.length > 0 ? `<li class="menu-title mt-30"><span>Application</span></li>
					${each(applicationRoutes, (route) => {
        return `<li${add_attribute(
          "class",
          route.childRoutes?.length > 0 ? "has-child" : "menu-item",
          0
        )}><a${add_attribute("href", route.childRoutes?.length > 0 ? "#" : route.path, 0)}><span class="${"nav-icon " + escape(route.icon, true)}"></span>
								<span class="menu-text">${escape(route.name)}</span>
								${route.childRoutes?.length > 0 ? `<span class="toggle-icon"></span>` : ``}</a>
							${route.childRoutes?.length > 0 ? `<ul>${each(route.childRoutes, (child) => {
          return `<li class="menu-item"><a${add_attribute("href", child.path, 0)}>${escape(child.name)}</a>
										</li>`;
        })}
								</ul>` : ``}
						</li>`;
      })}` : ``}</ul></div>`;
    }
  })}
</aside>`;
});
const css$1 = {
  code: ".top-menu .contents.expanded+.footer-wrapper{padding-left:0}.footer-wrapper{position:absolute;left:0;bottom:0;padding:24px 0 24px 280px;width:100%;background:var(--color-white);transition:var(--transition);z-index:1;box-shadow:rgba(146, 153, 184, 0.05) 0 -5px 10px}@media only screen and (max-width: 991px){.footer-wrapper{padding:14px 0 14px 8px}}@media only screen and (max-width: 991px){.footer-wrapper{padding:20px 0 20px 0 !important}}@media only screen and (max-width: 767px){.footer-wrapper{padding:15px 0 15px 0 !important}}.footer-wrapper p{margin:0}.contents.expanded+.footer-wrapper{padding-left:93px}@media only screen and (max-width: 1150px){.contents.expanded+.footer-wrapper{padding-left:0}}.footer-copyright{padding-left:12px}@media only screen and (max-width: 767px){.footer-copyright{text-align:center;padding-left:0}}.footer-copyright p{font-size:14px;color:var(--color-gray);font-weight:500;display:flex;align-items:center}@media only screen and (max-width: 767px){.footer-copyright p{justify-content:center}}.footer-copyright p a{margin-left:4px;color:var(--color-primary)}.footer-copyright p a:hover{color:var(--color-secondary)}.footer-menu.svelte-1b89f7m.svelte-1b89f7m{padding-right:12px}@media only screen and (max-width: 767px){.footer-menu.text-end.svelte-1b89f7m.svelte-1b89f7m{margin-top:10px;text-align:center !important;padding-right:0}}.footer-menu.svelte-1b89f7m ul li.svelte-1b89f7m{display:inline-block}.footer-menu.svelte-1b89f7m ul li.svelte-1b89f7m:not(:last-child){margin-right:18px}.footer-menu.svelte-1b89f7m ul li a.svelte-1b89f7m{font-size:14px;color:var(--color-light)}.footer-menu.svelte-1b89f7m ul li a.svelte-1b89f7m:hover{color:var(--color-primary)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="footer-wrapper"><div class="footer-wrapper__inside"><div class="container-fluid"><div class="row"><div class="col-md-6"><div class="footer-copyright"><p><span>© 2023</span><a${add_attribute("href", "#", 0)}>PITEL</a></p></div></div>
				<div class="col-md-6"><div class="footer-menu text-end svelte-1b89f7m"><ul><li class="svelte-1b89f7m"><a${add_attribute("href", "#", 0)} class="svelte-1b89f7m">About</a></li>
							<li class="svelte-1b89f7m"><a${add_attribute("href", "#", 0)} class="svelte-1b89f7m">Team</a></li>
							<li class="svelte-1b89f7m"><a${add_attribute("href", "#", 0)} class="svelte-1b89f7m">Contact</a></li></ul></div></div></div></div></div>
</footer>`;
});
const css = {
  code: "body.top-menu .navbar-left .top-menu{margin-left:30px}.top-menu .search-form{display:none}.top-menu .navbar-right__menu .nav-search{display:block !important}.top-menu .sidebar-toggle{display:none}@media only screen and (max-width: 991px){.top-menu .sidebar-toggle{display:flex !important}}.top-menu .sidebar{display:none}@media only screen and (max-width: 991px){.top-menu .sidebar{display:block}}.top-menu .contents{padding-left:15px}@media only screen and (max-width: 991px){.top-menu .contents{padding:73px 15px 64px 16px}}@media only screen and (max-width: 767px){.top-menu .contents{padding:56px 0 85px 0}}.top-menu .footer-wrapper{padding-left:10px}.side-menu .top-menu{display:none}",
  map: null
};
const LogoArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="logo-area">${validate_component(NavbarBrand, "NavbarBrand").$$render($$result, { href: "#" }, {}, {
    default: () => {
      return `<img class="dark" src="/img/fins-logo-transparent.png" alt="img" style="padding: 0rem 1.5rem;">
		<img class="light" src="/img/fins-logo-transparent.png" alt="img">`;
    }
  })}
	<a${add_attribute("href", "#", 0)} class="sidebar-toggle"><img class="svg" alt=""${add_attribute("src", "/img/svg/align-center-alt.svg", 0)}></a>
</div>`;
});
const NavProfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username = "admin" } = $$props;
  let { fullname = "Admin" } = $$props;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.fullname === void 0 && $$bindings.fullname && fullname !== void 0)
    $$bindings.fullname(fullname);
  return `<div class="dropdown-custom"><a${add_attribute("href", "#", 0)} class="nav-item-toggle"><img src="/img/avatar.png" alt="" class="rounded-circle">
		<span class="nav-item__title">${escape(fullname)}<i class="las la-angle-down nav-item__arrow"></i></span></a>
	<div class="dropdown-parent-wrapper"><div class="dropdown-wrapper"><div class="nav-author__info"><div class="author-img"><img src="/img/avatar.png" alt="" class="rounded-circle"></div>
				<div><h6>${escape(fullname)}</h6>
					<span>${escape(username)}</span></div></div>
			<div class="nav-author__options"><ul><li><a${add_attribute("href", "#", 0)}><i class="uil uil-user"></i> Profile</a></li></ul>
				<a${add_attribute("href", "#", 0)} class="nav-author__signout"><i class="uil uil-sign-out-alt"></i> Sign Out</a></div></div>
		</div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let applicationRoutes = [
    // {
    // 	name: "Service",
    // 	icon: "uil uil-apps",
    // 	path: "/service",
    // 	childRoutes: null
    // },
    // {
    // 	name: "Tenant",
    // 	icon: "uil uil-server",
    // 	path: "/tenant",
    // 	childRoutes: null
    // },
    // {
    // 	name: "Role",
    // 	icon: "uil uil-user-md",
    // 	path: "#",
    // 	childRoutes: [
    // 		{
    // 			name: "Role",
    // 			path: "/role"
    // 		},
    // 		{
    // 			name: "Permission",
    // 			path: "/role/permission"
    // 		}
    // 	]
    // },
    {
      name: "Campaigns",
      icon: "uil uil-object-ungroup",
      path: "/campaign",
      childRoutes: null
    },
    {
      name: "Servers",
      icon: "uil uil-server",
      path: "/server",
      childRoutes: null
    },
    {
      name: "CIDS",
      icon: "uil uil-focus-target",
      path: "/cid",
      childRoutes: null
    },
    {
      name: "Group CIDS",
      icon: "uil uil-line-spacing",
      path: "/groupcid",
      childRoutes: null
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-17wl9zs_START -->${$$result.title = `<title>CID - AutoTool</title>`, ""}<!-- HEAD_svelte-17wl9zs_END -->`, ""}
<div class="mobile-search"><form action="/" class="search-form"><img class="svg" alt="" src="/img/svg/search.svg">
		<input class="form-control me-sm-2 box-shadow-none" type="search" placeholder="Search..." aria-label="Search"></form></div>
<div class="mobile-author-actions"><ul class="navbar-right__menu"></ul></div>
<header class="header-top"><nav class="navbar navbar-light"><div class="navbar-left">${validate_component(LogoArea, "LogoArea").$$render($$result, {}, {}, {})}</div>
		<div class="navbar-right"><ul class="navbar-right__menu"><li class="nav-author">${validate_component(NavProfile, "NavProfile").$$render($$result, {}, {}, {})}</li></ul>

			<div class="navbar-right__mobileAction d-md-none"><a${add_attribute("href", "#", 0)} class="btn-search"><img class="svg" alt=""${add_attribute("src", "/img/svg/search.svg", 0)}>
					<img class="svg" alt=""${add_attribute("src", "/img/svg/x.svg", 0)}></a>
				<a${add_attribute("href", "#", 0)} class="btn-author-action"><img class="svg" alt=""${add_attribute("src", "/img/svg/more-vertical.svg", 0)}></a></div></div></nav></header>

<main class="main-content">${validate_component(Sidebar, "Sidebar").$$render($$result, { applicationRoutes }, {}, {})}
	<div class="contents">${slots.default ? slots.default({}) : ``}</div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-c8238ea6.js.map
