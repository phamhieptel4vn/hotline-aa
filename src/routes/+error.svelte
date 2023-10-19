<script>
	// @ts-nocheck
	import { page } from "$app/stores";
	import { Container, Row, Col } from "sveltestrap";
	let httpStatus = $page.status == 404 ? 404 : 500;
	let httpStatusText =
		$page.status == 404
			? "Trang bạn yêu cầu hiện không tồn tại"
			: "Trang bạn yêu cầu hiện đang bị lỗi";
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<div class="maintenance-wrapper content-center">
					<div class="maintenance-page text-center">
						<img class="svg" alt="" src={"/img/svg/" + httpStatus + ".svg"} />
						<h5 class="maintenance-page__title">
							{httpStatusText}
						</h5>
						<p class="fw-500">{httpStatus}</p>
						<div class="d-flex justify-content-evenly">
							<a href="/logout" class="btn btn-outline-danger mt-4" data-sveltekit-reload>Logout</a>
							<a href="/" class="btn btn-outline-success mt-4">Go To Home</a>
						</div>
					</div>
				</div>
			</Col>
		</Row>
	</Container>
</div>

<style lang="scss">
	.maintenance-wrapper {
		height: calc(100vh - 169px);
	}
	.maintenance-page__title {
		font-weight: 500;
		margin: 70px 0 14px;
	}

	.maintenance-page p {
		font-size: 14px;
		color: var(--color-gray);
	}

	:global {
		.maintenance-page svg {
			max-width: 100%;
			height: auto;
		}
	}
</style>
