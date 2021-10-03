<template>
	<div>
		<div @click="$emit('change', 0)" class="exit_btn">X</div>
		<video ref="camera"></video>
	</div>
</template>

<script>
import QrScanner from "qr-scanner";

import qrScannerWorkerSource from "!!raw-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js";
QrScanner.WORKER_PATH = URL.createObjectURL(new Blob([qrScannerWorkerSource]));
export default {
	data() {
		return {
			qrScanner: undefined,
		};
	},
	mounted() {
		const videoElem = this.$refs["camera"];
		this.qrScanner = new QrScanner(videoElem, (result) => {
			console.log("decoded qr code:", result);
			this.$emit("change", 1);
		});
		this.qrScanner.start();
	},
	beforeDestroy() {
		this.qrScanner.stop();
	},
};
</script>

<style>
.exit_btn {
	position: fixed;
	top: 1rem;
	left: 1rem;
	z-index: 1001;
}
</style>