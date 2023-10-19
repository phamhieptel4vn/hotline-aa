<script>
	// @ts-nocheck
	import { navigating } from "$app/stores";
	import { onMount } from "svelte";
	import { init, isLoading, register } from "svelte-i18n";
	import { Col, Container, Row, Spinner } from "sveltestrap";

	/** @type {import('./$types').LayoutData} */
	export let data;
	const defaultLocale = "en-US";
	register('en-US', () => import('$lib/i18n/en/common.json'));
	register('en-US', () => import('$lib/i18n/en/cid.json'));
	register('en-US', () => import('$lib/i18n/en/campaign.json'));
	register('en-US', () => import('$lib/i18n/en/server.json'));
	register('en-US', () => import('$lib/i18n/en/groupcid.json'));
	
	register('vi-VN', () => import('$lib/i18n/vi/common.json'));
	// register('vi-VN', () => import('$lib/i18n/vi/message.json'));
	// // register('vi-VN', () => import('$lib/i18n/vi/lower_case.json'));
	// register('vi-VN', () => import('$lib/i18n/vi/campaign.json'));
	register('vi-VN', () => import('$lib/i18n/vi/groupcid.json'));

	init({
		fallbackLocale: defaultLocale,
		initialLocale: data.lang ?? defaultLocale
	});

	let reloadTemplate = () => {};

	onMount(() => {
		reloadTemplate = () => {
			if (window.NioApp) {
				console.log("load");
				window.initTemplate(NioApp);
				window.NioApp.Custom.init();
			}
		};
		reloadTemplate();
	});
	let httpStatus = 404;
	let httpStatusText = 404;
</script>

{#if $isLoading || Boolean($navigating)}
	<main class="main-content">
		<Container fluid>
			<Row>
				<Col lg={12}>
					<div class="preloader-wrap">
						<Spinner color="primary" size="lg" type="grow" />
					</div>
				</Col>
			</Row>
		</Container>
	</main>
{:else if !data.session.user_id}
	<slot />
{:else}
	<slot />
{/if}

<style lang="scss">
	:global {
		@import "../assets/sass/style.scss";
	}

	.preloader-wrap {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
