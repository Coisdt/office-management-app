import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router"; // Import the router

// Font Awesome library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Vuex store
import store from "./store";

// Add icons to the library
library.add(fas, faCoffee);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount("#app");
