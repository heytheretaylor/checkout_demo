<template>
	<div id="thank_you">
		<Title />
		<div class="img-margin">
			<img src="../assets/thank_you_bag.svg" alt="" srcset="" />
		</div>
		<h1 class="text-black font-normal">Thank You!</h1>
		<h2 class="font-prime-green">Your Order Is Complete</h2>
		<p style="color: #656565">
			You may pick up your promo item at the kiosk using the barcode below.
		</p>
		<h3 class="text-black font-normal">Order Number: 4820287750783</h3>
		<div class="img-margin">
			<img src="../assets/barcode.svg" alt="" srcset="" />
			<big-button @click.native="$emit('change', 0)" style="margin: 2rem 0"
				>Back to Home</big-button
			>
		</div>
	</div>
</template>

<script>
import BigButton from "./subElements/BigButton.vue";
export default {
	components: { BigButton },
};
</script>

<style>
#thank-you {
	display: flex;
	flex-direction: column;
}
.img-margin {
	margin: 2rem 0 1rem 0;
}
.text-black {
	color: black;
}
.font-normal {
	font-weight: 400;
}
.font-prime-green {
	color: var(--prime-green);
}
</style>