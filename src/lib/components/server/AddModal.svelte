<script>
	// @ts-nocheck
	import { apiPostServer } from "$lib/api/server";
	import { notifyApiError, notifyError, notifySuccess } from "$lib/util/notify/_notify";
	import { _ } from "svelte-i18n";
	import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, Row } from "sveltestrap";
	export let isOpen = false;
	export let token;
	export let tenantId;
	let server = {
		server_name: "",
		tenant_id: tenantId,
		server_ip: "",
		server_api: "",
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let body = {"data": server};
		if (body.data.server_name.length < 1) {
			notifyError("Tên server bị thiếu");
			return;
		}
		await apiPostServer(body, token)
			.then(async (result) => {
				if (result.ok) {
					notifySuccess($_("message.add_success"));
					setTimeout(async () => {
						location.reload();
					}, 1500);
				} else {
					notifyApiError(result);
					return;
				}
			})
			.catch((error) => {
				console.log("error", error);
			});
	};
</script>

<Modal
	size="md"
	{isOpen}
	toggle={() => {
		isOpen = !isOpen;
	}}
>
	<Form on:submit={handleSubmit} method="POST" action="#">
		<ModalBody>
			<Row>
				<Col lg="12 bg-primary p-3">
					<h6 class="text-white mb-0 fw-bold">1. {$_("common.add_new")} {$_("common.server")}</h6>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<small class="text-white mb-0">{$_("common.add_new")} {$_("common.server")}</small>
				</Col>
				<Col lg="12" class="mt-3">
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="serverName" class="float-end fs-6">{$_("server.server_name")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="serverName" bind:value={server.server_name} invalid={server.server_name.length < 3} />
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="serverIp" class="float-end fs-6">{$_("server.server_ip")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="serverIp" bind:value={server.server_ip} />
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="server_api" class="float-end fs-6">{$_("server.server_api")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="server_api" bind:value={server.server_api} />
							</Col>
						</Row>
					</FormGroup>
					<!-- <FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="tenant_id" class="float-end fs-6">{$_("tenant_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="tenant_id" bind:value={server.tenant_id} />
							</Col>
						</Row>
					</FormGroup> -->
				</Col>
			</Row>
		</ModalBody>
		<ModalFooter>
			<Button color="primary" type="submit">{$_("save")}</Button>
			<Button
				color="secondary"
				on:click={() => {
					isOpen = !isOpen;
				}}
				type="button">{$_("cancel")}</Button
			>
		</ModalFooter>
	</Form>
</Modal>