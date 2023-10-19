<script>
	// @ts-nocheck
	import { apiDeleteGroupCid, apiGetGroupCids } from "$lib/api/groupcid";
	import AddModal from "$lib/components/groupcid/AddModal.svelte";
	import CardTitle from "$lib/components/other/CardTitle.svelte";
	import { notifyApiError, notifySuccess } from "$lib/util/notify/_notify";
	import { _ } from "svelte-i18n";
	import { Card, CardBody, Col, Row, TabContent, TabPane } from "sveltestrap";
	import Swal from "sweetalert2";
	import TableGroupCid from "./components/TableGroupCid.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
	const token = data.session.token;
	let groupcids = data.groupcids;
	let modalAddGroupCidOpen = false;

	const handleGetGroupCids = async () => {
		let result = await apiGetGroupCids(99, 0, {}, token);
		if (result.ok) {
			let { data } = await result.json();
			groupcids = data ?? [];
		} else {
			notifyApiError(result);
		}
	};

	const refreshTableGroupCid = async () => {
		try {
			await handleGetGroupCids();
		} catch (e) {
			console.log(e);
		}
	};

	const handleDeleteGroupCid = async (cid) => {
		Swal.fire({
			title: $_("message.do_you_want_to_delete") + " ?",
			showCancelButton: true,
			cancelButtonText: $_("message.cancel"),
			confirmButtonText: $_("delete")
		}).then(async (result) => {
			if (result.isConfirmed) {
				await apiDeleteGroupCid(cid.id, token)
					.then(async (result) => {
						if (result.ok) {
							notifySuccess($_("message.delete_success"), 1500);
							refreshTableGroupCid();
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
					<TabPane tabId="cidsTab" tab={$_("common.groupcid")} active>
						<Row class="mb-2">
							<Col lg="6">
								<CardTitle title={$_("common.groupcid_management")} icon="ti ti-rocket" />
							</Col>
							<Col lg="6">
								<div class="d-flex justify-content-end">
										<button
											type="button"
											class="btn-custom btn-custom-info me-1"
											on:click={() => {
												modalAddGroupCidOpen = true;
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
											refreshTableGroupCid();
										}}
									>
										<i class="ti ti-refresh" />
										{$_("common.refresh")}
									</button>
								</div>
							</Col>
						</Row>
						<TableGroupCid data={groupcids} handleDelete={handleDeleteGroupCid} />
					</TabPane>
				</TabContent>
			</CardBody>
		</Card>
	</Col>
</Row>
<AddModal {token} bind:isOpen={modalAddGroupCidOpen} />