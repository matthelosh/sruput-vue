import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersist from 'vuex-persist'
import router from './../main.js'

Vue.use(Vuex)
const  store = new Vuex.Store({
    state: {
        loginPending: false,
        isLoggedIn: localStorage.getItem("isLoggedIn"),
        user: {},
        token : localStorage.getItem("token"),
        role: localStorage.getItem("role"),
        dudi: ''
    },
    getters:{
        isLoggedIn: state => state.isLoggedIn,
        user: state => state.user,
        role: state => state.role,
        dudi: state => state.dudi
    },

    mutations: {
        LOGIN (state){
            return state.loginPending = true;
        },
        LOGIN_OK (state){
            return state.isLoggedIn = true;
            // return state.loginPending = false;
            
        },
        AFTER_LOGIN(state){
            return state.loginPending = false;
        },
        SET_USER(state, data) {
            return state.user = data;
        },
        SET_DUDI (state, dudi){
            return this.state.dudi = dudi;
        }
    },

    actions: {
        setdudi(context, dudi){
            context.commit("SET_DUDI", dudi);
        }
    //    login (context, creds) {
    //        context.commit("LOGIN");
    //        setTimeout(function() {
    //            axios.post("/user/authenticate", creds)
    //                 .then(function(res){
    //                     localStorage.setItem("token", res.data.token);
    //                     localStorage.setItem("role", res.data.role);
    //                     return res;
    //                 })
    //                 .then(function(jwt){
    //                     context.commit("LOGIN_OK", jwt.data);
    //                     localStorage.setItem("isLoggedIn", true);
    //                 })
                
    //        }, 1000);
           
    //        var token = this.state.token;
    //         axios.get('/protected/me', {headers: {'X-Access-Token': token}})
    //         .then(function(user){
    //             localStorage.setItem("user", user.data);
    //             context.commit("SET_USER", user.data );
    //         });

    //         context.commit("AFTER_LOGIN");
    //    }
       
    }
});
export default store