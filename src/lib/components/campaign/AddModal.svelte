<script>
	// @ts-nocheck
	import { apiPostCampaign } from "$lib/api/campaign";
	import { apiGetGroupCids } from "$lib/api/groupcid";
	import { notifyApiError, notifyError, notifySuccess } from "$lib/util/notify/_notify";
	import { _ } from "svelte-i18n";
	import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, Row } from "sveltestrap";
	export let isOpen = false;
	export let token;
	export let data;
	export let tenantId

	let campaign = {
		campaign_name: "",
		ccu: 0,
		gateway_id: "",
		is_enabled:	false,
		tenant_id: tenantId,
		mode: "",
		group_cid_id: "",
		callee_id: "",
	};
	let groupcids = data.groupcids;
	const handleSubmit = async (e) => {
		e.preventDefault();
		let body = {"data": campaign};
		if (body.data.campaign_name.length < 5) {
			notifyError("Tên chiến dịch bị thiếu");
			return;
		}
		await apiPostCampaign(body, token)
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
					<h6 class="text-white mb-0 fw-bold">{$_("common.add_new")} {$_("common.campaign")}</h6>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<small class="text-white mb-0">{$_("common.add_new")} {$_("common.campaign")}</small>
				</Col>
				<Col lg="12" class="mt-3">
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="campaignName" class="float-end fs-6">{$_("campaign.campaign_name")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="campaignName" bind:value={campaign.campaign_name} invalid={campaign.campaign_name.length < 5} />
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="ccu" class="float-end fs-6">{$_("campaign.ccu")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="number" id="ccu" bind:value={campaign.ccu} />
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="gateway_id" class="float-end fs-6">{$_("campaign.gateway_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="gateway_id" bind:value={campaign.gateway_id} />
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="calleeId" class="float-end fs-6">{$_("campaign.callee_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="calleeId" bind:value={campaign.callee_id} />
							</Col>
						</Row>
					</FormGroup>
					<!-- <FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="tenant_id" class="float-end fs-6">{$_("tenant_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" id="tenant_id" bind:value={tenantId} />
							</Col>
						</Row>
					</FormGroup> -->
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="groupCid" class="float-end fs-6">{$_("campaign.group_cid_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="select" name="groupCid" bind:value={campaign.group_cid_id}>
									{#each groupcids as groupcid}
										<option value={groupcid.id}>{groupcid.group_cid_name}</option>
									{/each}
								</Input>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="mode" class="float-end fs-6">{$_("campaign.mode")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="select" id="mode" bind:value={campaign.mode}>
									<option value="auto_check">Auto Check</option>
									<option value="auto_check_and_replace">Auto Check And Replace</option>
								</Input>
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