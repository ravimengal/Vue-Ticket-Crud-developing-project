import { createApp } from 'vue'
import VueSimpleAlert from "vue-simple-alert";
import App from './App.vue'
import router from './components/Common/router/index'
import 'bootstrap'
import 'popper.js'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import '@fortawesome/fontawesome-free/js/all'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/js/all'
import Swal from 'sweetalert2'

window.Swal = Swal;

//before app mount search for token in local storage
const token = localStorage.getItem('token')
if (token) {
    console.log("In token searching")
    //if token is found set mount app with token
   const app = createApp(App)
    app.use(router)
    app.use(VueSimpleAlert)
    app.mount('#app')
} else {
    //if token is not found mount app without token
    createApp(App).use(router).mount('#app')

//if token not found redirect to external login page
// window.location.href = "https://google.com"
}


//check if token store in local storage is expired
// if (token) {
//     const payload = JSON.parse(atob(token.split('.')[1]))
//     if (payload.exp < Date.now() / 1000) {
//         localStorage.removeItem('token')
//         window.location.href = "/login"
//     }else{
//         console.log("token is not expired")
//     }
// }

//to generate new jwt token
// const token = jwt.sign({ _id: user._id }, 'secret')
// localStorage.setItem('token', token)
// console.log(token)






