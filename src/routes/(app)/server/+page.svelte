<script>
	// @ts-nocheck
	import { apiDeleteServer, apiGetServers } from "$lib/api/server";
	import AddModal from "$lib/components/server/AddModal.svelte";
	import CardTitle from "$lib/components/other/CardTitle.svelte";
	import { notifyApiError, notifySuccess } from "$lib/util/notify/_notify";
	import { _ } from "svelte-i18n";
	import { Card, CardBody, Col, Row, TabContent, TabPane } from "sveltestrap";
	import Swal from "sweetalert2";
	import TableServer from "./components/TableServer.svelte";
	/** @type {import('./$types').PageData} */
	export let data;
	const token = data.session.token;
	let servers = data.servers;
	let modalAddServerOpen = false;

	const handleGetServers = async () => {
		let result = await apiGetServers(99, 0, {}, token);
		if (result.ok) {
			let { data } = await result.json();
			servers = data ?? [];
		} else {
			notifyApiError(result);
		}
	};

	const refreshTableServer = async () => {
		try {
			await handleGetServers();
		} catch (e) {
			console.log(e);
		}
	};

	const handleDeleteServer = async (server) => {
		Swal.fire({
			title: $_("message.do_you_want_to_delete") + " ?",
			showCancelButton: true,
			cancelButtonText: $_("message.cancel"),
			confirmButtonText: $_("delete")
		}).then(async (result) => {
			if (result.isConfirmed) {
				await apiDeleteServer(server.id, token)
					.then(async (result) => {
						if (result.ok) {
							notifySuccess($_("message.delete_success"), 1500);
							refreshTableServer();
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
					<TabPane tabId="serversTab" tab={$_("common.server")} active>
						<Row class="mb-2">
							<Col lg="6">
								<CardTitle title={$_("common.server_management")} icon="ti ti-rocket" />
							</Col>
							<Col lg="6">
								<div class="d-flex justify-content-end">
										<button
											type="button"
											class="btn-custom btn-custom-info me-1"
											on:click={() => {
												modalAddServerOpen = true;
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
											refreshTableServer();
										}}
									>
										<i class="ti ti-refresh" />
										{$_("common.refresh")}
									</button>
								</div>
							</Col>
						</Row>
						<TableServer data={servers} handleDelete={handleDeleteServer} />
					</TabPane>
				</TabContent>
			</CardBody>
		</Card>
	</Col>
</Row>
<AddModal {token} bind:isOpen={modalAddServerOpen} />