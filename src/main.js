import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import Title from "./components/subElements/Title.vue";
import BigButton from "./components/subElements/BigButton.vue";
import ImageContainer from "./components/subElements/ImageContainer.vue";
import Checkbox from "./components/subElements/Checkbox.vue";
import Divider from "./components/subElements/Divider.vue";
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false;

Vue.component("Title", Title);
Vue.component("BigButton", BigButton);
Vue.component("ImageContainer", ImageContainer);
Vue.component("Checkbox", Checkbox);
Vue.component("Divider", Divider);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA0SAZkjk4bq65M6Qp8wX3d6sybDfzErmY",
	authDomain: "outseer-demo.firebaseapp.com",
	projectId: "outseer-demo",
	storageBucket: "outseer-demo.appspot.com",
	messagingSenderId: "515928144012",
	appId: "1:515928144012:web:0a209396c0cb6e441c23a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (app) {
	console.log("we got app");
}

new Vue({
	render: (h) => h(App),
}).$mount("#app");
