<script>
	// @ts-nocheck
	import { apiPostGroupCid } from "$lib/api/groupcid";
	import { notifyApiError, notifyError, notifySuccess } from "$lib/util/notify/_notify";
	import { _ } from "svelte-i18n";
	import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, Row } from "sveltestrap";
	export let isOpen = false;
	export let token;
	export let tenantId;
	let groupcid = {
		tenant_id: tenantId,
		tel_campaign_id: "",
		group_cid_name: "",
		network: "",
		ref_carrier_uuid: "",
		order: 1,
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let body = {"data": groupcid};
		if (body.data.group_cid_name.length < 1) {
			notifyError("Group CID Name bị thiếu");
			return;
		}
		await apiPostGroupCid(body, token)
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
					<h6 class="text-white mb-0 fw-bold"> {$_("common.add_new")} {$_("common.groupcid")}</h6>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<small class="text-white mb-0">{$_("common.add_new")} {$_("common.groupcid")}</small>
				</Col>
				<Col lg="12" class="mt-3">
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="groupCidName" class="float-end fs-6">{$_("groupcid.group_cid_name")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="groupCidName" bind:value={groupcid.group_cid_name} invalid={groupcid.group_cid_name.length < 3} />
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="telCampId" class="float-end fs-6">{$_("groupcid.tel_campaign_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="telCampId" bind:value={groupcid.tel_campaign_id} />
							</Col>
						</Row>
					</FormGroup>
					<!-- <FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="tenant_id" class="float-end fs-6">{$_("tenant_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="tenant_id" bind:value={groupcid.tenant_id} />
							</Col>
						</Row>
					</FormGroup> -->
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="network" class="float-end fs-6">{$_("groupcid.network")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="select" id="network" bind:value={groupcid.network}>
									<option value="viettel">Viettel</option>
									<option value="mobi">Mobi</option>
									<option value="vina">Vina</option>
									<option value="offnet">Offnet</option>
									<option value="tel">Tel</option>
								</Input>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="refCarrierId" class="float-end fs-6">{$_("groupcid.ref_carrier_uuid")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="refCarrierId" bind:value={groupcid.ref_carrier_uuid} />
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="order" class="float-end fs-6">{$_("groupcid.order")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="number" id="order" bind:value={groupcid.order} />
							</Col>
						</Row>
					</FormGroup>
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