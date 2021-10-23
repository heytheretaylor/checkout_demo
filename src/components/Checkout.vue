<template>
	<div id="checkout">
		<image-container :imglink="'Swag@2x.png'" />
		<section>
			<h2>Select Your Swag</h2>
			<h4>
				<select v-model="selection" name="swag" id="swag-select">
					<option v-for="(option, prop) in options" :key="prop" :value="prop">
						{{ option.title }}
					</option>
				</select>
			</h4>
		</section>
		<section>
			<h2>{{ selectedOption.title }}</h2>
			<h4>Description</h4>
			<p>
				{{ selectedOption.copy }}
			</p>
		</section>
		<section>
			<h2>Estimated Total</h2>
			<h4 class="price-line">
				<div>Subtotal</div>
				<div>$18.00</div>
			</h4>
			<!-- <h4 class="price-line" style="color: #1fca7e">
				<div>Money 20/20 Promo</div>
				<div>-$18.00</div>
			</h4> -->
			<divider />
			<h4 class="price-line">
				<div>Total</div>
				<div>$18.00</div>
			</h4>
		</section>
		<section>
			<h2 class="flex justify-between content-end" style="margin-bottom: 1rem">
				Shipping Address
				<div style="font-size: 0.8rem; font-weight: normal; align-self: center">
					<input type="checkbox" name="auto" id="auto" @change="autofill" />
					<label for="auto">Autofill</label>
				</div>
			</h2>
			<form class="shipping_form">
				<label for="fname">Full Name</label>
				<input v-model="fullName" type="text" id="fname" name="fname" />
				<label for="email">Email</label>
				<input v-model="email" type="text" id="email" name="email" />
			</form>
		</section>
		<section>
			<h2 class="">Payment Method</h2>
			<div class="flex mt-4">
				<img
					style="max-height: 3rem"
					src="../assets/visa.png"
					alt=""
					srcset=""
				/>
				<form class="ml-4">
					<label for="ccard">Enter Valid Credit Card Number</label>
					<input v-model="cc" type="text" id="ccard" name="ccard" />
				</form>
			</div>
			<div class="flex justify-between mt-4">
				<form style="max-width: 40%">
					<label for="expiry">Expiry Date</label>
					<input v-model="expiry" type="text" id="expiry" name="expiry" />
				</form>
				<form style="max-width: 47%">
					<label for="cvv">CVV</label>
					<input v-model="cvv" type="text" id="cvv" name="cvv" />
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
const FORM_ENTRIES = {
	fullName: "Norman McArthur",
	email: "norm.mcarthur@KoL.gov",
	cc: "4000 1234 5678 9012",
	expiry: "08/25",
	cvv: "***",
};
export default {
	data() {
		return {
			selection: "pen",
			isFilled: false,
			...Object.keys(FORM_ENTRIES).reduce((accObj, key) => {
				accObj[key] = "";
				return accObj;
			}, {}),
		};
	},
	computed: {
		options() {
			return {
				cap: {
					id: "cap",
					title: "Outseer Cap",
					copy: `The Outseer Cap is made of durable organic canvas with brushed metal
				hardware and tonal embroidery. Talk about a home run.`,
				},
				pen: {
					id: "pen",
					title: "Outseer Pen",
					copy: `A versatile ballpoint pen in our sleek color system, show your support before you write anything!`,
				},
				golfballs: {
					id: "golfballs",
					title: "Golf Balls",
					copy: `A pack of standard size and weight balls, ready for the green.`,
				},
			};
		},
		selectedOption() {
			return this.options[this.selection];
		},
	},
	methods: {
		autofill() {
			console.log("phil up fill");
			Object.entries(FORM_ENTRIES).forEach(([key, value]) => {
				if (!this.isFilled) {
					this[key] = value;
				} else {
					this[key] = "";
				}
			});
			this.isFilled = !this.isFilled;
		},
	},
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