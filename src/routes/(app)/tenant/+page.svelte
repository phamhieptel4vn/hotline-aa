<script lang="ts">
	import Loading from "$lib/components/common/Loading.svelte";
	import { RestClient } from "$lib/rest/rest";
	import BreadcrumbOne from "@components/breadcrumb/BreadcrumbOne.svelte";
	import queryString from "query-string";
	import { _ } from "svelte-i18n";
	import { PaginationNav } from "svelte-paginate";
	import {
		Button,
		Card,
		CardBody,
		CardFooter,
		Col,
		Container,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
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
			{:else}
				{#each paginatedItems as row, i}
					<Col xxl={3} md={6} class="mb-25">
						<Card>
							<CardBody class="text-center pt-30 px-25 pb-0">
								<div class="account-profile-cards">
									<div class="ap-img d-flex justify-content-center">
										<img
											class="ap-img__main bg-opacity-primary wh-120 rounded-circle mb-3"
											src="{row.logo ?? ''}?nocache={i}"
											alt="profile"
										/>
									</div>
									<div class="ap-nameAddress">
										<h6 class="ap-nameAddress__title">{row.tenant_name}</h6>
										<p class="ap-nameAddress__subTitle fs-14 pt-1 m-0">{row.description ?? ""}</p>
									</div>
									<div
										class="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap pt-20"
									>
										<Button
											color="transparent"
											class="border text-capitalize px-25 color-gray transparent radius-md"
											on:click={() => {
												window.location.href = `/tenant/${row.id}`;
											}}
										>
											<span class="uil uil-list-ul follow-icon" />
											Manage
										</Button>
										<Button
											color="transparent"
											class="border text-capitalize px-25 color-gray transparent follow radius-md"
										>
											<span class="uil uil-user-plus follow-icon" />
											Delete
										</Button>
									</div>
								</div>

								<CardFooter class="mt-20 pt-20 pb-20 px-0 bg-transparent">
									<div class="profile-overview d-flex justify-content-between flex-wrap">
										<div class="po-details">
											<h6 class="po-details__title">{row.total_business_unit ?? 0}</h6>
											<span class="po-details__sTitle">Total BU</span>
										</div>
										<div class="po-details">
											<h6 class="po-details__title">{row.total_user ?? 0}</h6>
											<span class="po-details__sTitle">Total Users</span>
										</div>
									</div>
								</CardFooter>
							</CardBody>
						</Card>
					</Col>
				{/each}
				<div class="d-flex justify-content-between">
					<div class="d-flex">
						<span class="table-info"
							>{pageSize * (currentPage - 1) + 1} - {pageSize * (currentPage - 1) +
								paginatedItems.length} của {totalItems}</span
						>
						<Dropdown class="me-2">
							<DropdownToggle class="table-info-dropdown table-info-dropdown-toggle">
								{pageSize}
								{$_("row")}
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem
									active={pageSize == 5}
									on:click={() => {
										pageSize = 5;
										handlePaging(1);
									}}
								>
									5 {$_("row")}
								</DropdownItem>
								<DropdownItem
									active={pageSize == 10}
									on:click={() => {
										pageSize = 10;
										handlePaging(1);
									}}
								>
									10 {$_("row")}
								</DropdownItem>
								<DropdownItem
									active={pageSize == 20}
									on:click={() => {
										pageSize = 20;
										handlePaging(1);
									}}
								>
									20 {$_("row")}
								</DropdownItem>
								<DropdownItem
									active={pageSize == 30}
									on:click={() => {
										pageSize = 30;
										handlePaging(1);
									}}
								>
									30 {$_("row")}
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
					<div class="float-end table-pagination mb-3">
						<PaginationNav
							{totalItems}
							{pageSize}
							{currentPage}
							limit={1}
							showStepOptions={true}
							on:setPage={(e) => handlePaging(e.detail.page)}
						/>
					</div>
				</div>
			{/if}
		</Row>
	</Container>
</div>

<style lang="scss">
	:global {
		@import "../../../assets/sass/components/_table";
		@import "../../../assets/sass/components/breadcrumb";
		@import "../../../assets/sass/components/users";
		@import "../../../assets/sass/components/profile";
		@import "../../../assets/sass/components/responsive";
	}
</style>
