// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import 'jquery';

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
app.use(createPinia())
app.use(router)

app.mount('#app')
