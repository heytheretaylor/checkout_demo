<template>
	<div class="img_container">
		<img class="focus_img" :src="getImgUrl(imglink)" />
		<slot> </slot>
	</div>
</template>

<script>
export default {
	name: "ImageContainer",
	props: {
		imglink: {
			required: true,
			type: String,
		},
	},
	methods: {
		getImgUrl(link) {
			return require("../../assets/" + link);
		},
	},
};
</script>

<style>
.img_container {
	display: flex;
	position: relative;
	border-radius: 3%;
	overflow: hidden;
}
.img_container > div {
	position: absolute;
	left: 5%;
}
.focus_img {
	width: 100%;
}
</style>