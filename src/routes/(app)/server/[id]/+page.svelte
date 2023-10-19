<script>
	// @ts-nocheck
	import { apiPutServer } from "$lib/api/server";
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
	import id from "date-fns/locale/id";
	/** @type {import('./$types').PageData} */
	export let data;
	const serverUuid = data.id;
	const token = data.session.token;
    let server = data.server;
	console.log("server: ", server);
	const handleUpdateServer = async (e) => {
		e.preventDefault();
		let serverUpdate = {"data": server};
		await apiPutServer(serverUuid, serverUpdate, token)
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
		<CardTitle title={$_("common.server")} icon="ti ti-rocket" />
		<Form method="post" action="#" on:submit={handleUpdateServer}>
			<TabContent class="nav-tabs-s1">
				<TabPane tabId="basicSettings" tab={$_("common.configuration")} active>
					<Row class="mb-3 mt-3">
						<Col md="4">
							<Label for="serverName">{$_("server.server_name")}</Label>
							<Input type="text" class="form-control" name="serverName" placeholder="Server Name" bind:value={server.server_name} />
						</Col>
                        <Col md="3">
							<Label for="serverIP">{$_("server.server_ip")}</Label>
							<Input type="text" class="form-control" name="serverIP" placeholder="Server IP" bind:value={server.server_ip} />
						</Col>
                        <!-- <Col md="3">
							<Label for="tenantId">{$_("server.tenant_id")}</Label>
							<Input type="text" class="form-control" name="tenantId" placeholder="Tenant UUID" bind:value={server.tenant_id} />
						</Col> -->
                        <Col md="3">
							<Label for="serverAPI">{$_("server.server_api")}</Label>
							<Input type="text" class="form-control" name="serverAPI" placeholder="Server API Host" bind:value={server.server_api} />
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
									location.href = "/server";
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