import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import naive from "@/utils/naive";
import 'vant/lib/index.css';

const app = createApp(App)
app.use(naive)
app.use(router)

app.mount('#app');
