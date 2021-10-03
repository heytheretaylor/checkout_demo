<template>
	<div id="landing">
		<Title />
		<ImageContainer class="center-img" :imglink="'Swag@2x.png'">
			<div
				style="
					top: 0;
					left: 0;
					width: 100%;
					height: 90%;
					background: linear-gradient(180deg, black -24%, transparent);
				"
			></div>
			<div style="top: 1rem; font-size: 2rem; text-align: left">
				Outseer Promo Products
			</div>
			<!-- <div style="top: 2rem"></div> -->
		</ImageContainer>
		<BigButton @click.native="$emit('change', 1)" :text="'Shop Now'" />
	</div>
</template>

<script>
export default {
	name: "Landing",
};
</script>

<style>
#landing {
	display: flex;
	flex-direction: column;
}
.center-img {
	margin: 2rem 0;
}
</style>