import { createApp } from 'vue'
import App from './App.vue'
import router from './components/Common/router/index'
import '@fortawesome/fontawesome-free/js/all'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/js/all'


createApp(App)
.use(router)
.mount('#app')
