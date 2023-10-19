<script>
	import { goto } from "$app/navigation";
	export let username = "admin";
	export let fullname = "Admin";
	const handleSignOut = (event) => {
		event.preventDefault();
		goto(`/logout`);
	};
</script>

<div class="dropdown-custom">
	<a href={"#"} class="nav-item-toggle">
		<img src="/img/avatar.png" alt="" class="rounded-circle" />
		<span class="nav-item__title">{fullname}<i class="las la-angle-down nav-item__arrow" /></span>
	</a>
	<div class="dropdown-parent-wrapper">
		<div class="dropdown-wrapper">
			<div class="nav-author__info">
				<div class="author-img">
					<img src="/img/avatar.png" alt="" class="rounded-circle" />
				</div>
				<div>
					<h6>{fullname}</h6>
					<span>{username}</span>
				</div>
			</div>
			<div class="nav-author__options">
				<ul>
					<li>
						<a href={'#'}> <i class="uil uil-user" /> Profile</a>
					</li>
				</ul>
				<a href={'#'} class="nav-author__signout" on:click={(event) => handleSignOut(event)}>
					<i class="uil uil-sign-out-alt" /> Sign Out</a
				>
			</div>
		</div>
		<!-- ends: .dropdown-wrapper -->
	</div>
</div>
