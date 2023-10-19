<script>
	// @ts-nocheck
	import { apiDeleteCid, apiGetCids } from "$lib/api/cid";
	import AddModal from "$lib/components/cid/AddModal.svelte";
	import CardTitle from "$lib/components/other/CardTitle.svelte";
	import { notifyApiError, notifySuccess } from "$lib/util/notify/_notify";
	import { _ } from "svelte-i18n";
	import { Card, CardBody, Col, Row, TabContent, TabPane } from "sveltestrap";
	import Swal from "sweetalert2";
	import TableCid from "./components/TableCid.svelte";
	/** @type {import('./$types').PageData} */
	export let data;
	const token = data.session.token;
	let cids = data.cids;
	let modalAddCidOpen = false;

	const handleGetCids = async () => {
		let result = await apiGetCids(99, 0, {}, token);
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
</script>

<Row>
	<Col lg="12">
		<Card class="border-0 mb-4 rounded">
			<CardBody>
				<TabContent class="nav-fill" pills>
					<TabPane tabId="cidsTab" tab={$_("common.cid")} active>
						<Row class="mb-2">
							<Col lg="6">
								<CardTitle title={$_("common.cid_management")} icon="ti ti-rocket" />
							</Col>
							<Col lg="6">
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
						</Row>
						<TableCid data={cids} handleDelete={handleDeleteCid} />
					</TabPane>
				</TabContent>
			</CardBody>
		</Card>
	</Col>
</Row>
<AddModal {token} bind:isOpen={modalAddCidOpen} />