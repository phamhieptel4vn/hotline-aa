<script>
	import {
		Button,
		Card,
		CardBody,
		CardHeader,
		Col,
		Container,
		FormGroup,
		Input,
		Label,
		Alert,
		Row
	} from "sveltestrap";
	import { goto } from "$app/navigation";
	import { createForm } from "svelte-forms-lib";
	import * as yup from "yup";
	import axios from "axios";
	import { deserialize } from "$app/forms";
	let visible = true;
	let loader = false;
	let notification = {};

	const loginSchema = yup.object().shape({
		username: yup.string().required(),
		password: yup.string().required()
	});
	const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: {
			username: "",
			password: ""
		},
		validationSchema: loginSchema,
		onSubmit: async () => {
			loader = true;
			const body = new FormData();
			body.set("username", $form.username);
			body.set("password", $form.password);
			await fetch("?/login", {
				method: "POST",
				body: body
			})
				.then(async (response) => {
					const result = deserialize(await response.text());
					console.log("🚀 ~ file: +page.svelte:45 ~ .then ~ result:", result)
					if (result.data.errors) {
						notification = result.data;
					} else if (result.data.success) {
						goto(`/campaign`);
					}
					loader = false;
				})
				.catch((error) => {
					console.log(error);
					loader = false;
				});
			visible = true;
		}
	});

</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<div class="main-content">
	<div class="admin">
		<Container fluid>
			<Row class="justify-content-center">
				<Col xxl="3" md="6" sm="8">
					<div class="edit-profile">
						<div class="edit-profile__logos">
							<img src="/img/fins-logo-transparent.png" class="svg" alt="" />
						</div>
						<Card class="border-0">
							<!-- {#if loader}
								<Spinner type="primary" size="md" />
							{/if} -->
							<CardHeader>
								<div class="edit-profile__title">
									<h6>Sign in CID - AutoTool</h6>
								</div>
							</CardHeader>
							<CardBody>
								{#if notification.errors}
									<Alert
										color="danger"
										isOpen={visible}
										toggle={() => (visible = false)}
										fade={false}
									>
										{notification.errors}
									</Alert>
								{/if}
								<form on:submit|preventDefault={handleSubmit}>
									<div class="edit-profile__body">
										<FormGroup class="form-group mb-25">
											<Label for="username">Username</Label>
											<Input
												on:change={handleChange}
												bind:value={$form.username}
												invalid={$errors.username.length > 0}
												type="text"
												class="form-control"
												id="username"
												name="username"
												placeholder="Username"
											/>
											{#if $errors.username}
												<div class="invalid-feedback">{$errors.username}</div>
											{/if}
										</FormGroup>
										<FormGroup class="form-group mb-15">
											<Label for="password">Password</Label>
											<div class="position-relative">
												<Input
													on:change={handleChange}
													bind:value={$form.password}
													invalid={$errors.password.length > 0}
													type="password"
													class="form-control"
													id="password"
													name="password"
													placeholder="Password"
												/>
												{#if $errors.password}
													<div class="invalid-feedback">{$errors.password}</div>
												{/if}
											</div>
										</FormGroup>
										<div
											class="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center"
										>
											<Button
												type="submit"
												color="primary"
												class="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn "
											>
												{loader ? "Loading" : "sign in"}
											</Button>
										</div>
									</div>
								</form>
							</CardBody>
							<!-- <div class="admin-bottom">
								<p class="mb-0">
									Don't have an account?
									<a href="/signup" class="color-primary"> Sign up </a>
								</p>
							</div> -->
						</Card>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
</div>

<style lang="scss">
	:global {
		@import "../../../../src/assets/sass/components/style.scss";
	}
</style>
