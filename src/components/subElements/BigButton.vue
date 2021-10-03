<template>
	<button @click="clickHandler" class="big_ol-green">
		<slot>
			{{ text }}
		</slot>
	</button>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: "Shop Now",
		},
		clickHandler: {
			type: Function,
			default: (d) => d,
		},
	},
};
</script>

<style>
.big_ol-green {
	background: linear-gradient(90deg, #1fca7e, #57e6a7);
	border: none;
	color: white;
	border-radius: 4%;
	padding: 15px 0;
	/* text-align: center; */
	/* text-decoration: none; */
	/* display: inline-block; */
	font-size: 16px;
	cursor: pointer;
	/* margin: 4px 2px; */
	width: 100%;
}
</style>