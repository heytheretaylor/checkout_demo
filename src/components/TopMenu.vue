<template>
	<div id="top-menu">
		<!-- <div id="top-menu__area"> -->
		<div class="menu-section" @click="$emit('change', 0)">
			<img src="../assets/hamburger.svg" alt="" srcset="" />
			<div class="middle-text" v-show="selectedPage === 1">
				Money 20/20 Store
			</div>
		</div>
		<div class="menu-section">
			<div @click="$emit('change', 3)">
				<img src="../assets/qr_icon.svg" alt="" srcset="" />
			</div>
			<div style="margin-left: 1rem" @click="$emit('change', 2)">
				<img src="../assets/bag_icon.svg" alt="" srcset="" />
			</div>
		</div>
	</div>
	<!-- </div> -->
</template>

<script>
export default {
	props: {
		selectedPage: {
			required: true,
		},
	},
};
</script>

<style>
#top-menu {
	position: absolute;
	top: 30px;
	display: flex;
	justify-content: space-between;
	width: calc(90%);
	z-index: 100;
}
.menu-section {
	flex: 2;
	height: 1.6rem;
	display: flex;
}
.menu-section:nth-child(2) {
	flex: 1;
	justify-content: flex-end;
}
.menu-section img {
	cursor: pointer;
	max-width: 2rem;
}
.middle-text {
	text-transform: uppercase;
	text-align: left;
	font-weight: 600;
}
</style>