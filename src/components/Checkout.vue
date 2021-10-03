<template>
	<div id="checkout">
		<image-container :imglink="'Swag@2x.png'" />
		<section>
			<h2>Outseer Cap</h2>
			<h4>Description</h4>
			<p>
				The Outseer Cap is made of durable organic canvas with brushed metal
				hardware and tonal embroidery. Talk about a home run.
			</p>
		</section>
		<section>
			<h2>Estimated Total</h2>
			<h4 class="price-line">
				<div>Subtotal</div>
				<div>$18.00</div>
			</h4>
			<h4 class="price-line" style="color: #1fca7e">
				<div>Money 20/20 Promo</div>
				<div>-$18.00</div>
			</h4>
			<divider />
			<h4 class="price-line">
				<div>Total</div>
				<div>$0.00</div>
			</h4>
		</section>
		<section>
			<h2>Shipping Address</h2>
		</section>
		<section>
			<h2>Payment Method</h2>
		</section>
		<big-button @click.native="$emit('play')">Complete Purchase</big-button>
	</div>
</template>

<script>
export default {
	methods: {},
};
</script>

<style scoped>
#checkout {
	color: black;
	text-align: left;
	/* font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
}

section {
	margin: 2rem 0;
}
h2,
h4 {
	margin-block-start: 0.3em;
	margin-block-end: 0.3em;
}
h4 {
	color: #919191;
}
.price-line {
	display: flex;
	justify-content: space-between;
}
p {
	font-size: 0.85em;
}
</style>