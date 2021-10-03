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
			<h2 style="margin-bottom: 1rem">Shipping Address</h2>
			<form class="shipping_form">
				<label for="fname">Full Name</label>
				<input type="text" id="fname" name="fname" />
				<label for="email">Email</label>
				<input type="text" id="email" name="email" />
			</form>
		</section>
		<section>
			<h2>Payment Method</h2>
			<div class="flex mt-4">
				<img
					style="max-height: 3rem"
					src="../assets/visa.png"
					alt=""
					srcset=""
				/>
				<form class="ml-4">
					<label for="ccard">Enter Valid Credit Card Number</label>
					<input type="text" id="ccard" name="ccard" />
				</form>
			</div>
			<div class="flex justify-between mt-4">
				<form style="max-width: 40%">
					<label for="expiry">Expiry Date</label>
					<input type="text" id="expiry" name="expiry" />
				</form>
				<form style="max-width: 47%">
					<label for="cvv">CVV</label>
					<input type="text" id="cvv" name="cvv" />
				</form>
			</div>
			<section>
				<h4>Billing Address</h4>
				<!-- <div class="flex"> -->
				<Checkbox> Same as shipping address </Checkbox>
				<!-- </div> -->
			</section>
		</section>
		<big-button style="margin: 2rem 0" @click.native="$emit('play')"
			>Complete Purchase</big-button
		>
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
.flex {
	display: flex;
}
.justify-between {
	justify-content: space-between;
}
.mt-4 {
	margin-top: 1rem;
}
.ml-4 {
	margin-left: 1rem;
}
section {
	margin: 2rem 0;
}
h2,
h4 {
	margin-block-start: 0.3em;
	margin-block-end: 0.3em;
}
h4,
form > label,
.text-grey {
	color: #919191;
}
h4 {
	font-weight: 500;
}
label {
	margin: 0.4rem 0 0 0;
}
.price-line {
	display: flex;
	justify-content: space-between;
	margin: 1rem 0;
}
p {
	font-size: 0.85em;
}
.shipping_form input[type="text"] {
	margin: 1rem 0;
}
input[type="text"] {
	width: 100%;
	padding: 0.5rem 0;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #919191;
}
</style>