import Vue from 'vue'
import VueRouter from 'vue-router'
// import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
// Vue.use(BootstrapVue)

import App from './app.vue'
import Home from './pages/home.vue'
import About from './pages/about.vue'
// import Login from './pages/login.vue'
import Dashboard from './pages/dashboard/index.vue'

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
            component: Dashboard
        }
    ]
})

Vue.component('app', App)
new Vue({
    router,
    template: '<app></app>'
    
}).$mount('#app');
