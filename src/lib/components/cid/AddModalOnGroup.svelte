<script>
	// @ts-nocheck
	import { apiPostCid } from "$lib/api/cid";
	import { notifyApiError, notifyError, notifySuccess } from "$lib/util/notify/_notify";
	import { _ } from "svelte-i18n";
	import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, Row } from "sveltestrap";
	export let isOpen = false;
	export let token;
	export let data;
	const tenantId = data.session.tenant_id;
	let cid = {
		caller_id: "",
		tenant_id: tenantId,
		group_cid_id: data.groupcid.data.id,
		// status: "ok",
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let body = {"data": cid};
		const myArray = body.data.caller_id.split("|");
		// if (body.data.caller_id.length < 1) {
		// 	notifyError("caller_id bị thiếu");
		// 	return;
		// }
		myArray.forEach((item) => {
			console.log(item);
			if (item.length < 1) {
				notifyError("caller_id bị thiếu");
				return;
			}
			body.data.caller_id = item;
		apiPostCid(body, token)
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
					<h6 class="text-white mb-0 fw-bold">1. {$_("common.add_new")} {$_("common.cid")}</h6>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<small class="text-white mb-0">{$_("common.add_new")} {$_("common.cid")}</small>
				</Col>
				<Col lg="12" class="mt-3">
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="cId" class="float-end fs-6">{$_("caller_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="textarea" rows="3" id="cId" bind:value={cid.caller_id} invalid={cid.caller_id.length < 3} />
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row class="g-3 align-items-center mb-3">
							<Col lg="4">
								<Label for="groupCid" class="float-end fs-6">{$_("group_cid_id")} :</Label>
							</Col>
							<Col lg="8">
								<Input type="text" class="form-control" name="groupCid" bind:value={cid.group_cid_id} readonly/>
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