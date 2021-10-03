import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import Title from "./components/subElements/Title.vue";
import BigButton from "./components/subElements/BigButton.vue";
import ImageContainer from "./components/subElements/ImageContainer.vue";
import Divider from "./components/subElements/Divider.vue";

Vue.config.productionTip = false;

Vue.component('Title', Title)
Vue.component('BigButton', BigButton)
Vue.component('ImageContainer', ImageContainer)
Vue.component('Divider', Divider)


new Vue({
  render: (h) => h(App),
}).$mount("#app");
