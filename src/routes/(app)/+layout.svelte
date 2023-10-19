<script lang="ts">
	import Sidebar from "@components/sidebar/Sidebar.svelte";
	import Footer from "@components/footer/Footer.svelte";
	import LogoArea from "@components/header/LogoArea.svelte";
	import NavProfile from "$lib/components/header/NavProfile.svelte";
	import type { Route } from "$lib/type/route";

	let applicationRoutes: Route[] = [
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
</script>

<svelte:head>
	<title>CID - AutoTool</title>
</svelte:head>
<div class="mobile-search">
	<form action="/" class="search-form">
		<img class="svg" alt="" src="/img/svg/search.svg" />
		<input
			class="form-control me-sm-2 box-shadow-none"
			type="search"
			placeholder="Search..."
			aria-label="Search"
		/>
	</form>
</div>
<div class="mobile-author-actions">
	<ul class="navbar-right__menu">
		<!-- <li class="nav-search"><NavSearch /></li>
        <li class="nav-message"><NavMessage /></li>
        <li class="nav-notification"><NavNotification /></li>
        <li class="nav-settings"><NavSettings /></li>
        <li class="nav-flag-select"><NavFlags /></li>
        <li class="nav-author"><NavAuthor /></li> -->
	</ul>
</div>
<header class="header-top">
	<nav class="navbar navbar-light">
		<div class="navbar-left">
			<LogoArea />
		</div>
		<div class="navbar-right">
			<ul class="navbar-right__menu">
				<li class="nav-author"><NavProfile /></li>
			</ul>

			<div class="navbar-right__mobileAction d-md-none">
				<a href={"#"} class="btn-search">
					<img class="svg" alt="" src={"/img/svg/search.svg"} />
					<img class="svg" alt="" src={"/img/svg/x.svg"} /></a
				>
				<a href={"#"} class="btn-author-action">
					<img class="svg" alt="" src={"/img/svg/more-vertical.svg"} /></a
				>
			</div>
		</div>
	</nav>
</header>

<main class="main-content">
	<Sidebar {applicationRoutes} />
	<div class="contents">
		<slot />
	</div>
	<Footer />
</main>
