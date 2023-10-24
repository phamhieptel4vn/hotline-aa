<script>
	// @ts-nocheck
	import { apiPutGroupCid } from "$lib/api/groupcid";
	import AddModalOnGroup from "$lib/components/cid/AddModalOnGroup.svelte";
	import CardTitle from "$lib/components/other/CardTitle.svelte";
	import { apiDeleteCid, apiGetCidsByGroupId } from "$lib/api/cid";
	import TableCid from "./TableCid.svelte";
	import { notifyApiError, notifySuccess } from "$lib/util/notify/_notify";
	import "flatpickr/dist/flatpickr.css";
	import "flatpickr/dist/themes/airbnb.css";
	import { _ } from "svelte-i18n";
	import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from "sveltestrap";
	/** @type {import('./$types').PageData} */
	export let data;
	const groupcidUuid = data.id;
	const token = data.session.token;
	const tenantId = data.session.tenant_id;
	console.log("tenantId", tenantId);
	let cids = data.groupcid.data.cids;
	let modalAddCidOpen = false;
	let groupcid = data.groupcid;

	const handleUpdateGroupCid = async (e) => {
		e.preventDefault();
		let groupcidUpdate = { data: groupcid };
		await apiPutGroupCid(groupcidUuid, groupcidUpdate, token)
			.then(async (result) => {
				if (result.ok) {
					notifySuccess($_("message.update_success"));
					setTimeout(async () => {
						location.reload();
					}, 1500);
				} else {
					notifyApiError(result);
				}
			})
			.catch((error) => {
				console.log("error", error);
				notifyApiError(error);
				return;
			});
	};
	
	const handleGetCids = async () => {
		let result = await apiGetCidsByGroupId(99, 0, groupcidUuid, {}, token);
		if (result.ok) {
			let { data } = await result.json();
			cids = data ?? [];
		} else {
			notifyApiError(result);
		}
	};

	const refreshTableCid = async () => {
		try {
			await handleGetCids();
		} catch (e) {
			console.log(e);
		}
	};

	const handleDeleteCid = async (cid) => {
		Swal.fire({
			title: $_("message.do_you_want_to_delete") + " ?",
			showCancelButton: true,
			cancelButtonText: $_("message.cancel"),
			confirmButtonText: $_("delete")
		}).then(async (result) => {
			if (result.isConfirmed) {
				await apiDeleteCid(cid.id, token)
					.then(async (result) => {
						if (result.ok) {
							notifySuccess($_("message.delete_success"), 1500);
							refreshTableCid();
						} else {
							notifyApiError(result);
							return;
						}
					})
					.catch((error) => {
						console.log("error", error);
					});
			}
		});
	};
	refreshTableCid();
</script>

<Card class="border-0 mb-4 rounded">
	<CardBody>
		<CardTitle title={$_("common.groupcid")} icon="ti ti-rocket" />
		<Form method="post" action="#" on:submit={handleUpdateGroupCid}>
			<TabContent class="nav-tabs-s1">
				<TabPane tabId="basicSettings" tab={$_("common.configuration")} active>
					<Row class="mb-3 mt-3">
						<Col md="4">
							<Label for="groupCidIdName">{$_("common.group_cid_name")}</Label>
							<Input type="text" class="form-control" name="groupCidIdName" placeholder="Group CID Name" bind:value={groupcid.data.group_cid_name} />
						</Col>
						<Col md="3">
							<Label for="refCarrierId">{$_("common.ref_carrier_uuid")}</Label>
							<Input type="text" class="form-control" name="refCarrierId" placeholder="Ref Carrier UUID" bind:value={groupcid.data.ref_carrier_uuid} />
						</Col>
						<!-- <Col md="3">
							<Label for="tenantId">{$_("common.tenant_id")}</Label>
							<Input type="text" class="form-control" name="tenantId" placeholder="Tenant UUID" bind:value={groupcid.data.tenant_id} />
						</Col> -->
						<Col md="3">
							<Label for="telCampId">{$_("common.tel_campaign_id")}</Label>
							<Input type="text" class="form-control" name="telCampId" placeholder="Tel Campaign UUID" bind:value={groupcid.data.tel_campaign_id} />
						</Col>
						<Col md="3">
							<Label for="network">{$_("common.network")}</Label>
							<Input type="text" class="form-control" name="network" placeholder="Network" bind:value={groupcid.data.network} />
						</Col>
						<Col md="3">
							<Label for="order">{$_("common.order")}</Label>
							<Input type="text" class="form-control" name="order" placeholder="Order" bind:value={groupcid.data.order} />
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</Form>
		<Row>
			<Col md="12" class="">
				<div class="float-end">
					<Button
						type="button"
						color="soft-warning"
						on:click={function () {
							location.href = "/groupcid";
						}}>{$_("back")}</Button
					>
					<Button type="submit" color="soft-primary">{$_("update")}</Button>
				</div>
			</Col>
		</Row>
	</CardBody>
	<CardBody>
		<CardTitle title={$_("common.cid_management")} icon="ti ti-rocket" />
		<Col lg="10">
			<div class="d-flex justify-content-end">
				<button
					type="button"
					class="btn-custom btn-custom-info me-1"
					on:click={() => {
						modalAddCidOpen = true;
					}}
				>
					<i class="ti ti-plus" />
					{$_("common.add_new")}
				</button>
				<!-- {/if} -->
				<button
					type="button"
					class="btn-custom btn-custom-info"
					on:click={() => {
						refreshTableCid();
					}}
				>
					<i class="ti ti-refresh" />
					{$_("common.refresh")}
				</button>
			</div>
		</Col>
		<TableCid data={cids} handleDelete={handleDeleteCid} />
	</CardBody>
</Card>
<AddModalOnGroup {data} {token} bind:isOpen={modalAddCidOpen} />

<style>
	@import "$lib/css/custom_form.css";
	:global(.svelecte-control) {
		--sv-bg: transparent !important;
		--sv-color: inherit;
		--sv-min-height: 42px;
		--sv-border-color: transparent;
		--sv-border: none !important;
		--sv-active-border: none !important;
		--sv-active-outline: none;
		--sv-item-selected-bg: #478ffc !important;
	}
	:global(.sv-dropdown) {
		background-color: #fff !important;
	}
	:global(.sv-item) {
		border-radius: 0.375rem !important;
	}
	:global(.sv-item .sv-item-content) {
		color: #fff !important;
		font-size: 0.85rem !important;
	}
	:global(.sv-dropdown-content .sv-item-content) {
		color: #6c6c6c !important;
	}
	:global(.sv-item .sv-item-btn) {
		border-radius: 0.375rem !important;
	}
</style>
