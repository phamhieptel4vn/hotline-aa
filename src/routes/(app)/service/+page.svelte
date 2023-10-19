<script lang="ts">
	import {
		Button,
		Card,
		CardBody,
		CardHeader,
		Col,
		Container,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Row
	} from "sveltestrap";
	import Loading from "$lib/components/common/Loading.svelte";
	import { _ } from "svelte-i18n";
	import { PaginationNav } from "svelte-paginate";
	import { RestClient } from "$lib/rest/rest";
	import queryString from "query-string";
	import BreadcrumbOne from "@components/breadcrumb/BreadcrumbOne.svelte";
	let isLoading = true;
	isLoading = false;
	let currentPage = 1;
	let pageSize = 10;
	let paginatedItems: any[] = [];
	let totalItems = 0;
	const breadcrumbData = {
		pageTitle: "Service",
		bcItem: "Apps",
		bcItemActive: "Service"
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

		RestClient.get(`/aaa/v1/service?${queryString.stringify(param)}`)
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
			<Col lg={12}>
				<Card class="card-md">
					<CardHeader>
						<h6>{$_("service")}</h6>
					</CardHeader>
					<CardBody>
						{#if isLoading}
							<div class="d-flex">
								<div class="m-auto">
									<Loading />
								</div>
							</div>
						{:else}
							<div class="userDatatable">
								<div class="table-responsive">
									<table class="table mb-0 table-borderless">
										<thead>
											<tr class="userDatatable-header">
												<th><span class="userDatatable-title">{$_("name")}</span></th>
												<th><span class="userDatatable-title float-end">{$_("action")}</span></th>
											</tr>
										</thead>
										<tbody>
											{#each paginatedItems as row}
												<tr>
													<td>
														{row.service_name}
													</td>
													<td>
														<ul class="orderDatatable_actions mb-0 d-flex flex-wrap">
															<!-- <li><a href="#" class="view"><i class="uil uil-eye" /></a></li> -->
															<li>
																<a href="/service/{row.service_id}"
																 class="edit">
																	<i class="uil uil-edit mx-auto" />
																</a>
															</li>
															<li>
																<a href="#" class="remove"><i class="uil uil-trash-alt mx-auto" /></a>
															</li>
														</ul>
													</td>
												</tr>
											{/each}
										</tbody>
									</table>
								</div>
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
							</div>
						{/if}
					</CardBody>
				</Card>
			</Col>
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
