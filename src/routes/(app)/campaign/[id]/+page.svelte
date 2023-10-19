<script>
	// @ts-nocheck
	import { apiPutCampaign } from "$lib/api/campaign";
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
	const campaignUuid = data.id;
    console.log("data: ", data);
	const token = data.session.token;
    let campaign = data.campaign;
	let groupcids = data.groupcids;

    const handleUpdateCampaign = async (e) => {
		e.preventDefault();
		let campaignUpdate = {"data": campaign};
		await apiPutCampaign(campaignUuid, campaignUpdate, token)
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
		<CardTitle title={$_("common.campaign")} icon="ti ti-rocket" />
		<Form method="post" action="#" on:submit={handleUpdateCampaign}>
			<TabContent class="nav-tabs-s1">
				<TabPane tabId="basicSettings" tab={$_("common.configuration")} active>
					<Row class="mb-3 mt-3">
						<Col md="4">
							<Label for="campaignName">{$_("campaign.campaign_name")}</Label>
							<Input type="text" class="form-control" name="campaignName" placeholder="Campaign Name" bind:value={campaign.campaign_name} />
						</Col>
						<Col md="3">
							<Label for="active">{$_("common.active")}</Label>
							<Input type="select" name="active" bind:value={campaign.is_enabled}>
								<option value={true}>{$_("true")}</option>
								<option value={false}>{$_("false")}</option>
							</Input>
						</Col>
                        <Col md="3">
							<Label for="ccu">{$_("campaign.ccu")}</Label>
							<Input type="text" class="form-control" name="ccu" placeholder="CCU" bind:value={campaign.ccu} />
						</Col>
                        <!-- <Col md="3">
							<Label for="tenantId">{$_("campaign.tenant_id")}</Label>
							<Input type="text" class="form-control" name="tenantId" placeholder="Tenant UUID" bind:value={campaign.tenant_id} />
						</Col> -->
                        <Col md="3">
							<Label for="gatewayId">{$_("campaign.gateway_id")}</Label>
							<Input type="text" class="form-control" name="gatewayId" placeholder="Gateway UUID" bind:value={campaign.gateway_id} />
						</Col>
						<Col md="3">
							<Label for="mode">{$_("campaign.mode")}</Label>
							<Input type="select" id="mode" bind:value={campaign.mode}>
								<option value="auto_check">Auto Check</option>
								<option value="auto_check_and_replace">Auto Check And Replace</option>
							</Input>
						</Col>
						<Col md="3">
							<Label for="groupCid">{$_("campaign.group_cid_id")}</Label>
							<Input type="select" name="groupCid" bind:value={campaign.group_cid_id}>
								{#each groupcids as groupcid}
									<option value={groupcid.id}>{groupcid.group_cid_name}</option>
								{/each}
							</Input>
						</Col>
						<Col md="3">
							<Label for="calleeId">{$_("campaign.callee_id")}</Label>
							<Input type="text" class="form-control" name="calleeId" placeholder="calleeId" bind:value={campaign.callee_id} />
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
									location.href = "/campaign";
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