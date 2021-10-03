<template>
	<div id="app">
		<div class="content-wrapper">
			<TopMenu @change="selectedPage = $event" :selectedPage="selectedPage" />
			<transition name="slide-fade" mode="out-in">
				<component
					:class="selectedPage !== 3 ? 'component' : ''"
					@change="selectedPage = $event"
					@play="playVid"
					:is="currentPage"
				/>
			</transition>
			<video
				v-if="showVid"
				id="wallpaper-video"
				ref="wallpaper-video"
				class="wallpaper-video"
				muted=""
				playsinline=""
				autoplay
				preload="none"
				data-inline-media=""
				data-inline-media-basepath="iphone-13-pro/2021/404b23a8-f9c5-466c-b0e6-3d36705b959d/anim"
				data-inline-media-locale="us"
				data-inline-media-name="wallpaper"
				aria-hidden="true"
				src="./assets/othertest.mp4"
				@ended="vidEnded"
			></video>
			<!-- <Landing /> -->
		</div>
	</div>
</template>

<script>
import TopMenu from "./components/TopMenu.vue";
import Landing from "./components/Landing.vue";
import Checkout from "./components/Checkout.vue";
import ThankYou from "./components/ThankYou.vue";
import Camera from "./components/Camera.vue";
export default {
	name: "App",
	data() {
		return {
			selectedPage: 0,
			showVid: false,
		};
	},
	computed: {
		currentPage() {
			return [Landing, Checkout, ThankYou, Camera][this.selectedPage];
		},
	},
	methods: {
		playVid() {
			this.showVid = true;
			// this.$refs["wallpaper-video"].play();
		},
		vidEnded(event) {
			this.showVid = false;
			this.selectedPage = 2;
			console.log(event, "vid ended");
		},
	},
	components: {
		TopMenu,
		Landing,
		Checkout,
		ThankYou,
		Camera,
	},
};
</script>

<style>
:root {
	--prime-blue: #1b0f66;
	--prime-green: #1fca7e;
	--light-green: #57e6a7;
}
h1,
h2,
h3,
h4 {
	margin-block-start: 0.2em;
	margin-block-end: 0.2em;
}
#app {
	min-height: 100vh;
	/* width: 100%; */
	display: flex;
	flex-direction: column;
	position: relative;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #fff;
	background: linear-gradient(var(--prime-blue), var(--prime-green), #fff 30%);
}
video {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	object-fit: cover;
	object-position: center;
}
.component {
	margin: 30% 0 0 0;
}
.content-wrapper {
	padding: 0 5%;
}
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateX(10px);
	opacity: 0;
}
</style>
