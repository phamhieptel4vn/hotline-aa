<script>
	$: checked = false;
	function toggleCheck() {
		checked ? (checked = false) : (checked = true);
	}
</script>

<div class="userDatatable global-shadow border-light-0 p-30 bg-white radius-xl w-100 mb-30">
	<div class="table-responsive">
		<table class="table mb-0 table-borderless">
			<thead>
				<tr class="userDatatable-header">
					<th>
						<div class="d-flex align-items-center">
							<div class="custom-checkbox check-all">
								<input class="checkbox" type="checkbox" id="check-all" on:click={toggleCheck} />
								<label for="check-all">User</label>
							</div>
						</div>
					</th>
					<th>
						<span class="userDatatable-title">emaill</span>
					</th>
					<th>
						<span class="userDatatable-title">company</span>
					</th>
					<th>
						<span class="userDatatable-title">position</span>
					</th>
					<th>
						<span class="userDatatable-title">join date</span>
					</th>
					<th>
						<span class="userDatatable-title">status</span>
					</th>
					<th>
						<span class="userDatatable-title float-end">action</span>
					</th>
				</tr>
			</thead>
			<tbody />
		</table>
	</div>
</div>

<style lang="scss">
	:global {
		@import "../../../../assets/sass/components/_table";
		@import '../../../../assets/sass/components/breadcrumb';
		@import '../../../../assets/sass/components/users';
		@import '../../../../assets/sass/components/profile';
		@import '../../../../assets/sass/components/responsive';
	}
</style>
