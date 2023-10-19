<script lang="ts">
	//@ts-nocheck
	import { onMount } from "svelte";
	import { Svroller } from "svrollbar";
	import { page } from "$app/stores";
	import { direction } from "../../store/direction";
	import type { Route } from "$lib/type/route";

	let urlPath: string = "";
	$: urlPath = $page.url.pathname;

	onMount(() => {
		try {
			/* Navbar list dropdown */
			const sidebarNav = document.querySelector(".sidebar_nav");
			const sidebarNavChild = sidebarNav.querySelectorAll(".has-child");
			const mainSidebar = document.querySelector(".sidebar");
			const menuItem = document.querySelectorAll(".menu-item a");

			menuItem.forEach((item) => {
				const itemPath = item.getAttribute("href");
				if (itemPath === urlPath) {
					let currentActiveMenu = document.querySelector(".has-child.open");
					let uList = currentActiveMenu.querySelector("ul");
					currentActiveMenu.querySelector(".has-child__toggle").classList.remove("active");
					currentActiveMenu.querySelector(".menu-item").classList.remove("active");
					uList.style.cssText = "";
					currentActiveMenu.classList.remove("open");

					let _closest = item.closest(".has-child");
					item.classList.add("active");
					if (_closest) {
						_closest.classList.add("open");
						_closest.querySelector(".has-child__toggle").classList.add("active");
						let uList = _closest.querySelector("ul");
						let uListHeight = uList.offsetHeight;
						uList.style.cssText = `height: ${uListHeight}px; padding-bottom: 12px;`;
					}
				}
				item.addEventListener("click", function () {
					this.closest(".sidebar_nav")
						.querySelectorAll(".menu-item")
						.forEach((elm) => {
							elm.classList.remove("active");
						});
					this.closest("li").classList.add("active");
					sidebarNavChild.forEach((elm) => {
						elm.querySelector(".has-child__toggle").classList.remove("active");
						elm.classList.remove("open");
						let uList = elm.querySelector("ul");
						uList.style.cssText = "height: 0; padding-bottom: 0;";
					});
					if (this.closest(".has-child")) {
						this.closest(".has-child").classList.add("open");
						this.closest(".has-child").querySelector(".has-child__toggle").classList.add("active");
						let uList = this.closest(".has-child").querySelector("ul");
						let uListHeight = uList.offsetHeight;
						uList.style.cssText = `height: ${uListHeight}px; padding-bottom: 12px;`;
					}

					if (window.innerWidth < 991) {
						mainSidebar.classList.toggle("sidebar--collapsed");
					}
				});
			});
			document.body.addEventListener("click", function (e) {
				if (window.innerWidth < 991) {
					if (!e.target.closest(".sidebar") && !e.target.closest(".sidebar-toggle")) {
						mainSidebar.classList.add("sidebar--collapsed");
					}
				}
			});

			/* Looping all dropdown items */
			sidebarNavChild.forEach((elm) => {
				let uList = elm.querySelector("ul");
				let uListHeight = uList.offsetHeight;

				/* Reset all submenu height and padding */
				uList.style.cssText = "height: 0; padding-bottom: 0;";

				/* Set height & padding to submenu if parent has 'open' class */
				if (elm.classList.contains("open")) {
					uList.style.cssText = `height: ${uListHeight}px; padding-bottom: 12px;`;
				}

				/* Event listener for all submenu trigger anchors */
				elm.children[0].addEventListener("click", function (e) {
					e.preventDefault();

					/* Close if any submenu already opened */
					sidebarNavChild.forEach((element) => {
						if (e.target.closest(".has-child") !== element) {
							element.classList.remove("open");
							element.querySelector("ul").style.cssText = "height: 0; padding-bottom: 0;";
						}
					});

					/* Current targeted submenu actions */
					let childParent = elm.children[0].closest(".has-child");
					let ul = childParent.querySelector("ul");
					childParent.classList.toggle("open");

					if (childParent.classList.contains("open")) {
						ul.style.cssText = `height: ${uListHeight}px; padding-bottom: 12px;`;
					} else {
						ul.style.cssText = "height: 0; padding-bottom: 0;";
					}
				});
			});

			/* Handling Sidebar Collapse */
			const sidebarToggler = document.querySelector(".sidebar-toggle");
			sidebarToggler.addEventListener("click", (e) => {
				e.preventDefault();
				mainSidebar.classList.toggle("sidebar--collapsed");

				document.querySelector(".contents").classList.toggle("expanded");
				document.querySelector(".footer-wrapper").classList.toggle("expanded");

				sidebarCollapsed();
			});

			/* Submenu position relative to it's parent */
			function sidebarCollapsed() {
				let direction = document.querySelector("html").getAttribute("dir");
				let collapsedChild = document.querySelectorAll(".sidebar--collapsed .has-child");
				collapsedChild.forEach((item) => {
					item.addEventListener("mouseover", function () {
						if (mainSidebar.classList.contains("sidebar--collapsed")) {
							let menuItem = this;
							let menuItemRect = menuItem.getBoundingClientRect();
							let submenuWrapper = menuItem.querySelector("ul");
							menuItem.classList.add("open");
							submenuWrapper.style.cssText = `height: auto; padding-bottom: 12px; top: ${menuItemRect.top}px;`;
							if (direction === "ltr") {
								submenuWrapper.style.left = `${
									menuItemRect.left + Math.round(menuItem.offsetWidth * 0.75) + 10
								}px`;
								submenuWrapper.style.right = "auto";
							} else if (direction === "rtl") {
								submenuWrapper.style.right = `${Math.round(menuItem.offsetWidth * 0.75) + 10}px`;
								submenuWrapper.style.left = "auto";
							}
						}
					});
				});
			}

			/* sidebar scroll to active link on page load */
			const activeLink = document.querySelector(".sidebar_nav .menu-item a.active");
			if (activeLink !== null) {
				const activeLinkOffset = activeLink.offsetTop;
				document.querySelector(".svlr-viewport").scrollTop = activeLinkOffset;
			}

			//collapse sidebar if window is < 991px
			if (window.innerWidth < 991) {
				mainSidebar.classList.add("sidebar--collapsed");
			}
		} catch (error) {
			console.log("error:", error);
		}
	});

	function handleLayoutDirecction(e: any, direction: any) {
		e.preventDefault();

		document.documentElement.setAttribute("dir", direction);
		if (direction === "rtl") {
			document.getElementById("bootstrap-css-link").href = "../css/bootstrap.rtl.min.css";
		} else {
			document.getElementById("bootstrap-css-link").href = "../css/bootstrap.min.css";
		}
	}

	/* Active Top Menu */
	function handleMenuType(e: any) {
		e.preventDefault();
		document.body.classList.add("top-menu");
		document.body.classList.remove("side-menu");
	}

	export let dashboardRoutes: Route[] = [];
	export let applicationRoutes: Route[] = [];
</script>

<aside class="sidebar">
	<Svroller width="100%" height="100%">
		<div class="sidebar__menu-group">
			<ul class="sidebar_nav">
				<li class="has-child open d-none">
					<a href={"#"} class="has-child__toggle active">
						<span class="nav-icon uil uil-create-dashboard" />
						<span class="menu-text">Init</span>
						<span class="toggle-icon" />
					</a>
					<ul>
						<li class="menu-item active">
							<a href="/demo">Demo</a>
						</li>
					</ul>
				</li>
				{#if dashboardRoutes.length > 0}
					<li class="menu-title mt-30">
						<span>Dashboard</span>
					</li>
					{#each dashboardRoutes as route}
						<li class={route.childRoutes?.length > 0 ? "has-child" : "menu-item"}>
							<a href={route.childRoutes?.length > 0 ? "#" : route.path}>
								<span class="nav-icon {route.icon}" />
								<span class="menu-text">{route.name}</span>
								{#if route.childRoutes?.length > 0}
									<span class="toggle-icon" />
								{/if}
							</a>
							{#if route.childRoutes?.length > 0}
								<ul>
									{#each route.childRoutes as child}
										<li class="menu-item">
											<a href={child.path}>{child.name}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				{/if}
				{#if applicationRoutes.length > 0}
					<li class="menu-title mt-30">
						<span>Application</span>
					</li>
					{#each applicationRoutes as route}
						<li class={route.childRoutes?.length > 0 ? "has-child" : "menu-item"}>
							<a href={route.childRoutes?.length > 0 ? "#" : route.path}>
								<span class="nav-icon {route.icon}" />
								<span class="menu-text">{route.name}</span>
								{#if route.childRoutes?.length > 0}
									<span class="toggle-icon" />
								{/if}
							</a>
							{#if route.childRoutes?.length > 0}
								<ul>
									{#each route.childRoutes as child}
										<li class="menu-item">
											<a href={child.path}>{child.name}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	</Svroller>
</aside>

<style lang="scss">
	:global {
		@import "../../../assets/sass/mixins/directional.scss";
		@import "./style.scss";

		$dir: ltr;
	}
</style>
