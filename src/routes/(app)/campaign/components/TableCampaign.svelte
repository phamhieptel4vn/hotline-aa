<script lang="ts">
	import { startCase, upperCase } from "lodash-es";
	import { _ } from "svelte-i18n";
	import { PaginationNav, paginate } from "svelte-paginate";
	import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "sveltestrap";
	export let data: any[] = [];
	export let handleDelete = (row: any) => {};

	$: items = data ?? [];
	let currentPage = 1;
	let pageSize = 10;
	$: totalItems = data.length;
	$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<div class="table-custom">
	<div class="table-responsive">
		<table class="table table-sm">
			<thead>
				<tr>
					<th class="fw-semibold" style="width: 20%;">{$_("campaign.campaign_name")}</th>
					<th class="fw-semibold">{$_("campaign.mode")}</th>
					<th class="fw-semibold">{$_("campaign.callee_id")}</th>
					<th class="fw-semibold">{$_("campaign.ccu")}</th>
					<th class="fw-semibold">{$_("campaign.gateway_id")}</th>
					<!-- <th class="fw-semibold">{$_("campaign.tenant_id")}</th> -->
					<th class="fw-semibold">{$_("campaign.group_cid_name")}</th>
					<th class="fw-semibold">{$_("campaign.enable")}</th>
					<th class="fw-semibold" style="width: 15%;">{$_("common.action")}</th>
				</tr>
			</thead>
			<tbody>
				{#if data?.length > 0}
					{#each paginatedItems as row, i}
						<tr>
							<td><strong>{row.campaign_name}</strong></td>
							<td><strong>{row.mode}</strong></td>
							<td><strong>{row.callee_id}</strong></td>
							<td><strong>{row.ccu}</strong></td>
							<td><strong>{row.gateway_id}</strong></td>
							<!-- <td><strong>{row.tenant_id}</strong></td> -->
							<td><strong>{row.group_cid_name}</strong></td>
							<td>
								<strong class="text-success">{upperCase(row.is_enabled)}</strong>
							</td>
							<td class="btn-group" role="group">
								<div class="d-flex justify-content-center">
										<a class="btn btn-icon btn-soft btn-outline-primary btnDetail" href={`/campaign/${row.id}`}>
											<i class="uil uil-edit mx-auto" />
										</a>
											<button
												type="button"
												class="btn btn-icon btn-soft btn-outline-danger btnDelete"
												on:click={() => {
													handleDelete(row);
												}}
											>
												<i class="uil uil-minus-circle mx-auto" />
											</button>
								</div>
							</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan="4" class="text-center">{$_("no_data")}</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>
	<div class="d-flex justify-content-between">
		<div class="d-flex">
			<span class="table-info">{pageSize * (currentPage - 1) + 1} - {pageSize * (currentPage - 1) + paginatedItems.length} của {totalItems}</span>
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
						}}
					>
						5 {$_("row")}
					</DropdownItem>
					<DropdownItem
						active={pageSize == 10}
						on:click={() => {
							pageSize = 10;
						}}
					>
						10 {$_("row")}
					</DropdownItem>
					<DropdownItem
						active={pageSize == 20}
						on:click={() => {
							pageSize = 20;
						}}
					>
						20 {$_("row")}
					</DropdownItem>
					<DropdownItem
						active={pageSize == 30}
						on:click={() => {
							pageSize = 30;
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
				on:setPage={(e) => {
					currentPage = e.detail.page;
				}}
			/>
		</div>
	</div>
</div>