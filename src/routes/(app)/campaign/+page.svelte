<script>
	// @ts-nocheck
	import { apiDeleteCampaign, apiGetCampaigns, apiPatchCampaignActive, apiPostCampaignRun } from "$lib/api/campaign";
	import AddModal from "$lib/components/campaign/AddModal.svelte";
	import OffsetRunCampaign from "$lib/components/campaign/OffsetRunCampaign.svelte";
	import CardTitle from "$lib/components/other/CardTitle.svelte";
	import { notifyApiError, notifySuccess } from "$lib/util/notify/_notify";
	import { _ } from "svelte-i18n";
	import { Card, CardBody, Col, Row, TabContent, TabPane } from "sveltestrap";
	import Swal from "sweetalert2";
	import TableCampaign from "./components/TableCampaign.svelte";

	/** @type {import('./$types').PageData} */
	export let data;
	const token = data.session.token;
	let campaigns = data.campaigns;
	let tenantId = data.session.tenant_id;
	let groupcids = data.groupcids;
	let modalAddCampaignOpen = false;
	const handleGetCampaigns = async () => {
		let result = await apiGetCampaigns(99, 0, {}, token);
		if (result.ok) {
			let { data } = await result.json();
			campaigns = data ?? [];
		} else {
			notifyApiError(result);
		}
	};
	const refreshTableCampaign = async () => {
		try {
			await handleGetCampaigns();
		} catch (e) {
			console.log(e);
		}
	};

	const handleDeleteCampaign = async (campaign) => {
		Swal.fire({
			title: $_("message.do_you_want_to_delete") + " ?",
			showCancelButton: true,
			cancelButtonText: $_("message.cancel"),
			confirmButtonText: $_("delete")
		}).then(async (result) => {
			if (result.isConfirmed) {
				await apiDeleteCampaign(campaign.id, token)
					.then(async (result) => {
						if (result.ok) {
							notifySuccess($_("message.delete_success"), 1500);
							refreshTableCampaign();
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

	let offsetRunCampaign;
	let offsetRunCampaignOpen = false;
	const handleRunCampaign = async (campaign, action) => {
		let id = campaign.campaign_uuid;
		if (action == "start") {
			let lists = [];
			await apiGetLists(
				99,
				0,
				{
					campaign_uuid: id
				},
				token
			)
				.then(async (result) => {
					if (result.ok) {
						let { data } = await result.json();
						lists = data ?? [];
					} else {
						notifyApiError(result);
					}
				})
				.catch((error) => {
					console.log(error);
				});
			offsetRunCampaignOpen = true;
			lists = lists.filter((list) => list.campaign_name?.length > 0);
			offsetRunCampaign.setCampaign(campaign);
			offsetRunCampaign.setLists(lists);
		} else {
			Swal.fire({
				title: $_("message.do_you_want_to") + " " + $_(action) + " ?",
				showCancelButton: true,
				cancelButtonText: $_("message.cancel"),
				confirmButtonText: $_(action)
			}).then(async (result) => {
				if (result.isConfirmed) {
					await apiPostCampaignRun(id, action, token)
						.then(async (result) => {
							if (result.ok) {
								notifySuccess($_("message.update_success"), 1500);
								refreshTableCampaign();
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
		}
	};

</script>

<Row>
	<Col lg="12">
		<Card class="border-0 mb-4 rounded">
			<CardBody>
				<TabContent class="nav-fill" pills>
					<TabPane tabId="campaignsTab" tab={$_("common.campaign")} active>
						<Row class="mb-2">
							<Col lg="6">
								<CardTitle title={$_("common.campaign_management")} icon="ti ti-rocket" />
							</Col>
							<Col lg="6">
								<div class="d-flex justify-content-end">
										<button
											type="button"
											class="btn-custom btn-custom-info me-1"
											on:click={() => {
												modalAddCampaignOpen = true;
											}}
										>
											<i class="ti ti-plus" />
											{$_("common.add_new")}
										</button>
									<button
										type="button"
										class="btn-custom btn-custom-info"
										on:click={() => {
											refreshTableCampaign();
										}}
									>
										<i class="ti ti-refresh" />
										{$_("common.refresh")}
									</button>
								</div>
							</Col>
						</Row>
						<TableCampaign data={campaigns} handleDelete={handleDeleteCampaign} handleRun={handleRunCampaign} />
					</TabPane>
				</TabContent>
			</CardBody>
		</Card>
	</Col>
</Row>

<OffsetRunCampaign
	{token}
	bind:isOpen={offsetRunCampaignOpen}
	bind:this={offsetRunCampaign}
	onSuccess={() => {
		offsetRunCampaignOpen = false;
		refreshTableCampaign();
	}}
/>
<AddModal {data} {token} bind:isOpen={modalAddCampaignOpen} />