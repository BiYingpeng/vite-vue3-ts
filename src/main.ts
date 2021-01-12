import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.scss';
import router from './router/index';

const app = createApp(App)
// Mount when the route is ready
app.use(router)
app.mount('#app');
