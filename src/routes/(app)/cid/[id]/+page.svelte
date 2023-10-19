<script>
	// @ts-nocheck
	import { apiPutCid } from "$lib/api/cid";
	import CardTitle from "$lib/components/other/CardTitle.svelte";
	import { removeDuplicate } from "$lib/util/data/data";
	import { convertDuration, parseSecondToTimeFormat } from "$lib/util/time";
	import { notifyApiError, notifySuccess } from "$lib/util/notify/_notify";
	import "flatpickr/dist/flatpickr.css";
	import "flatpickr/dist/themes/airbnb.css";
	import Svelecte from "svelecte";
	import Flatpickr from "svelte-flatpickr";
	import { _ } from "svelte-i18n";
	import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row, TabContent, Table, TabPane } from "sveltestrap";
	/** @type {import('./$types').PageData} */
	export let data;

	const cidUuid = data.id;
	const referrer = data.referrer;
	const token = data.session.token;
	const tenantId = data.session.tenant_id;
    let cid = data.cid;

	const handleUpdateCid = async (e) => {
		e.preventDefault();
		let cidUpdate = {"data": cid};
		await apiPutCid(cidUuid, cidUpdate, token)
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
</script>

<Card class="border-0 mb-4 rounded">
	<CardBody>
		<CardTitle title={$_("common.cid")} icon="ti ti-rocket" />
		<Form method="post" action="#" on:submit={handleUpdateCid}>
			<TabContent class="nav-tabs-s1">
				<TabPane tabId="basicSettings" tab={$_("common.configuration")} active>
					<Row class="mb-3 mt-3">
						<Col md="4">
							<Label for="callerId">{$_("common.caller_id")}</Label>
							<Input type="text" class="form-control" name="callerId" placeholder="Caller ID" bind:value={cid.caller_id} />
						</Col>
                        <Col md="3">
							<Label for="groupCidId">{$_("common.group_cid_id")}</Label>
							<Input type="text" class="form-control" name="groupCidId" placeholder="Server IP" bind:value={cid.group_cid_id} />
						</Col>
                        <!-- <Col md="3">
							<Label for="tenantId">{$_("common.tenant_id")}</Label>
							<Input type="text" class="form-control" name="tenantId" placeholder="Tenant UUID" bind:value={cid.tenant_id} />
						</Col> -->
                        <Col md="3">
							<Label for="status">{$_("common.status")}</Label>
							<Input type="text" class="form-control" name="status" placeholder="Status" bind:value={cid.status} readonly/>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
			<Row>
				<Col md="12" class="">
					<div class="float-end">
						<Button
							type="button"
							color="soft-warning"
							on:click={function () {
									location.href = "/cid";
							}}>{$_("back")}</Button
						>
						<Button type="submit" color="soft-primary">{$_("update")}</Button>
					</div>
				</Col>
			</Row>
		</Form>
	</CardBody>
</Card>

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