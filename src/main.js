import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router"; // Import the router

// Import the core Font Awesome library
import { library } from "@fortawesome/fontawesome-svg-core";

// Import specific icons
import { fas } from "@fortawesome/free-solid-svg-icons"; // All solid icons
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // Specific icon

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add icons to the library
library.add(fas, faCoffee);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router); // Register the router
app.mount("#app");
