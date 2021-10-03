<template>
	<div id="top-menu">
		<!-- <div id="top-menu__area"> -->
		<div
			style="margin-right: 1rem"
			class="menu-section"
			@click="$emit('change', 0)"
		>
			<img src="../assets/hamburger.svg" alt="" srcset="" />
		</div>
		<div class="middle-text" v-show="selectedPage === 1">Money 20/20 Store</div>
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
	position: fixed;
	top: 30px;
	display: flex;
	justify-content: space-between;
	width: calc(90%);
	z-index: 100;
}
.menu-section {
	/* padding: 0 2rem; */
	/* flex: 1; */
	height: 1.6rem;
	display: flex;
	/* width: 18%; */
	/* justify-content: space-between; */
}
.menu-section img {
	cursor: pointer;
}
.middle-text {
	flex: 5;
	text-transform: uppercase;
	text-align: left;
	font-weight: 600;
}
</style>