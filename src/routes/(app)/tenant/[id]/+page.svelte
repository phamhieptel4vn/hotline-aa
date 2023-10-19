<script lang="ts">
	import Loading from "$lib/components/common/Loading.svelte";
	import { RestClient } from "$lib/rest/rest";
	import BreadcrumbOne from "@components/breadcrumb/BreadcrumbOne.svelte";
	import queryString from "query-string";
	import {
		Col,
		Container,
		Row
	} from "sveltestrap";
	let isLoading = true;
	isLoading = false;
	let currentPage = 1;
	let pageSize = 10;
	let paginatedItems: any[] = [];
	let totalItems = 0;
	const breadcrumbData = {
		pageTitle: "Tenant",
		bcItem: "Apps",
		bcItemActive: "Tenant"
	};
	const handlePaging = (page: number) => {
		currentPage = page;
		let offset = pageSize * (page - 1);
		offset = offset < 0 ? 0 : offset;
		handleGetPaginatedItems(pageSize, offset);
	};

	const handleGetPaginatedItems = (limit: number = 10, offset: number = 0) => {
		let param = {
			limit: limit,
			offset: offset
		};

		RestClient.get(`/aaa/v1/tenant?${queryString.stringify(param)}`)
			.then(function (response) {
				paginatedItems = response.data?.data || [];
				totalItems = response.data?.total || 0;
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				isLoading = false;
			});
	};
	handlePaging(1);
</script>

<div class="component-page mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
			{#if isLoading}
				<div class="d-flex">
					<div class="m-auto">
						<Loading />
					</div>
				</div>
			{:else}{/if}
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import "../../../../assets/sass/components/_table";
		@import "../../../../assets/sass/components/breadcrumb";
		@import "../../../../assets/sass/components/users";
		@import "../../../../assets/sass/components/profile";
		@import "../../../../assets/sass/components/responsive";
	}
</style>
