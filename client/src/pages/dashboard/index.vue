<template>
  <div>
      <dash-head v-bind:realname="user"></dash-head>
      <div class="row-fluid">
        <dash-main v-bind:userMon="user" v-bind:isAdmin="Admin" v-bind:namauser="user"></dash-main>
      </div>
      
  </div>
</template>

<script>
  import DashHead from './components/header.vue'
  // import DashSide from './components/sidebar.vue'
  import DashMain from './components/main.vue'
  import store from './../../store/index'
  import axios from 'axios'
  import router from './../../main'
  


  
    export default {
      data: function() {
        return {
          name: 'dashboard',
          text: '',
          user: {},
          // Admin: '', 
          token: '',

          
          
        }
      },
      created: function() {
        var isLoggedIn = localStorage.getItem("isLoggedIn");
        if(!isLoggedIn) {
          alert('Sruput kopi, login.. Baru boleh masuk. :)')
          this.$router.push('/')
        } else {
          this.$router.push('/dashboard');
          return this.user = localStorage.getItem("realname");
          return this.Admin = localStorage.getItem("role");
          cosole.log(this.Admin);
          
        }
      },
      computed: {
        Admin(){
          return localStorage.getItem("role");
        }
      },
      components: {DashHead, DashMain},
      methods: {
        
      }
    
  }
</script>
<style lang="sass" scoped>
.side-box
	padding: 0!important;
	min-height: 100vh;
	height: 100vh;
</style>
