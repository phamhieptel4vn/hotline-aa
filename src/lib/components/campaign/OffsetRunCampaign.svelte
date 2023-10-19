<script>
	// @ts-nocheck
	import { _ } from 'svelte-i18n';
	import { Button, Card, CardBody, Col, FormGroup, Input, Label, Offcanvas, Row } from 'sveltestrap';
	import FilePond, { registerPlugin } from 'svelte-filepond';
	import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
	import { notifyApiError, notifyError, notifySuccess } from '$lib/util/notify/_notify';
	// import { apiPostLeadFile } from '$lib/api/lead';
	import { apiPostCampaignRun } from '$lib/api/campaign';
	registerPlugin(FilePondPluginFileValidateType);
	export let token = '';
	export let isOpen = false;
	export let onSuccess = () => {};
	let campaign = {};
	let runMethod = 'run-without-list';
	let lists = [];
	let list_uuid = '';
	let filePond = null;

	export const setLists = (data) => {
		lists = data;
		if (lists.length > 0) {
			list_uuid = lists[0].list_uuid;
		}
	};
	export const setCampaign = (data) => {
		campaign = data;
	};

	const handleSubmit = async () => {
		let campaign_uuid = campaign.campaign_uuid;
		if (campaign_uuid && campaign_uuid.length < 1) {
			return;
		} else if (runMethod === 'choose-list') {
			let file = await filePond.getFile();
			if (!file) {
				notifyError('Please upload a file');
				return;
			}
			var formData = new FormData();
			formData.append('file', file.file);
			formData.append('list_uuid', list_uuid);
			// await apiPostLeadFile(formData, token)
			// 	.then(async (result) => {
			// 		if (!result.ok) {
			// 			notifyApiError(result);
			// 			return;
			// 		}
			// 	})
			// 	.catch((error) => {
			// 		notifyApiError(error);
			// 	});
		}
		await apiPostCampaignRun(campaign_uuid, 'start', token)
			.then(async (result) => {
				if (result.ok) {
					notifySuccess($_('message.update_success'));
					onSuccess();
				} else {
					notifyApiError(result);
					return;
				}
			})
			.catch((error) => {
				console.log('error', error);
			});
	};
</script>

<Offcanvas scroll {isOpen} placement="end" style="background: #F8F8F9;" class="contact-info">
	<div slot="header">
		<div class="offcanvas-btn-close position-absolute" hidden={!isOpen}>
			<Button
				type="button"
				color="light"
				class="btn-rounded btn-icon"
				size="lg"
				on:click={() => {
					isOpen = false;
				}}
			>
				<i class="ni ni-cross-circle-fill ti-xl" />
			</Button>
		</div>
		<Button type="button" color="transparent" class="me-2 fw-semibold fs-5">
			Run {$_("common.campaign")}
		</Button>
	</div>
	<Card class="rounded border-0 mb-3">
		<CardBody class="py-2 contactForm">
			<Row class="mt-3">
				<p class="card-heading fw-bold fs-6">{$_("common.campaign")} : {campaign.campaign_name}</p>
			</Row>
			<Row class="mb-2">
				<p>Choose one option to run this campaign:</p>
			</Row>
			<FormGroup class="customForm">
				<Label for="campaignRunType">Run:</Label>
				<Input type="select" name="campaignRunType" bind:value={runMethod}>
					<option value="run-without-list">Start Campaign Only</option>
					<option value="choose-list">Choose list</option>
				</Input>
			</FormGroup>
			<form method="post" action="#" on:submit|preventDefault={handleSubmit}>
				{#if runMethod == 'choose-list'}
					<FormGroup class="customForm">
						<Label for="campaignRunType">{$_('list')}:</Label>
						<Input type="select" name="campaignRunType" bind:value={list_uuid} required>
							{#if lists.length < 1}
								<option value="">Please upload a list</option>
							{:else}
								<option value="">Please choose a list</option>
								{#each lists as list}
									<option value={list.list_uuid}>{list.list_name}</option>
								{/each}
							{/if}
						</Input>
					</FormGroup>
					<FormGroup class="customForm">
						<Label for="fileImport">{$_('file')}</Label>
						<FilePond bind:this={filePond} name="fileImport" allowMultiple={false} acceptedFileTypes={['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv']} />
					</FormGroup>
				{/if}
				<Row class="text-center">
					<Col class="m-auto">
						<Button type="button" color="success" on:click={() => handleSubmit()}>{$_('submit')}</Button>
						<Button
							type="button"
							color="light"
							on:click={() => {
								isOpen = false;
							}}>{$_('close')}</Button
						>
					</Col>
				</Row>
			</form>
		</CardBody>
	</Card>
</Offcanvas>

<style>
	@import 'filepond/dist/filepond.css';
	@import '$lib/css/custom_form.css';

	:global(.contact-info) {
		font-size: 0.8rem;
	}
	:global(.offcanvas-btn-close) {
		left: -60px;
		top: 15px;
		visibility: visible;
	}
	:global(.offcanvas .offcanvas-header) {
		padding: 0.5rem 0.75rem;
		width: 100%;
	}
	:global(.offcanvas .offcanvas-header .offcanvas-title) {
		width: 100%;
	}
	:global(.offcanvas .offcanvas-body) {
		padding: 0rem 1.5rem;
	}
</style>