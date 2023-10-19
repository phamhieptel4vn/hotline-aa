<script>
	// @ts-nocheck
	export let title;
	export let icon;
</script>

<div class="row d-flex mb-2">
	<div class="flex-grow-1">
		<h4 class="fw-semibold">
			{#if icon}
				<span class="icon-label justify-content-center me-2"><i class={icon} /></span>
			{/if}
			{@html title ?? ''}
		</h4>
	</div>
</div>