import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import axios from 'axios'
Vue.prototype.$http = window.axios

// Object.defineProperty(Vue.prototype, '$bus', {
//     get(){
//         return this.$root.bus;
//     }
// });
// let bus = $root.bus;
let token = localStorage.getItem("token")
window.axios = axios
window.axios.defaults.headers.common = {
  'X-Access-Token': token
}

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify)


import store from './store/index.js'
import App from './app.vue'
import './../../node_modules/vuetify/dist/vuetify.css'
import Home from './pages/home.vue'
import About from './pages/about.vue'
// import Login from './pages/login.vue'
import Dashboard from './pages/dashboard/index.vue'
import Logout from './pages/dashboard/logout.vue'
import DashMain from './pages/dashboard/components/main.vue'
import DashSide from './pages/dashboard/components/sidebar.vue'
import Monitoring from './pages/dashboard/components/monitoring.vue'
import baMonitoring from './pages/dashboard/components/berita-acara-monitoring.vue'
import Default from './pages/dashboard/components/default.vue'
import Pembimbing from './pages/dashboard/components/pembimbing.vue'
import Praktikan from './pages/dashboard/components/praktikan.vue'
import Dudi from './pages/dashboard/components/dudi.vue'
import Prakerlap from './pages/dashboard/components/prakerlap.vue'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [
                {
                    path: '/',
                    component: Default
                },
                {
                    path: 'me',
                    component: DashSide
                },
                {
                    path: '/monitoring',
                    component: Monitoring
                },
                {
                    path: '/pembimbing',
                    component: Pembimbing
                },
                {
                    path: '/praktikan',
                    component: Praktikan
                },
                {
                    path: '/dudi',
                    component: Dudi
                },
                {
                    path: '/prakerlap',
                    component: Prakerlap
                }

            ]
        },
        {
            path: '/dashboard/bamonitoring/',
            component: baMonitoring
        },

        {
            path: '/logout',
            name: 'logout',
            component: Logout
        }
    ]
})


// console.log(store);
Vue.component('app', App)
new Vue({
    router,
    store,
    // bus: bus,
    template: '<app></app>'

}).$mount('#app');
