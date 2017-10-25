<template>
  <div v-bind="showUser()">
      <dash-head v-bind:realname="user.realname"></dash-head>
      <div class="row-fluid">
        <div class="col-sm-2">
          <dash-side></dash-side>
        </div>
        <div class="col-sm-10">
          <h1>Main Content</h1>
          {{user}}
        </div>
      </div>
  </div>
</template>

<script>
  import DashHead from './components/header.vue'
  import DashSide from './components/sidebar.vue'
  import store from './../../store/index'
  import axios from 'axios'
    export default {
      data: function() {
        return {
          name: 'dashboard',
          greet: '',
          user: '',
          showUser: function(user){
            let token = localStorage.getItem('token');
            axios.get('/protected/me', {headers:{'X-Access-Token': token}}).then(function(res){
            // console.log(res);
            return user= 'bogel';
            });
          }
        
        }
      },
      beforeCreate(){
        let token = localStorage.getItem('token');
        axios.get('/protected', {headers: {'X-Access-Token': token}}).then(function(res){
          if(res.data.error == true){
            console.log(res);
            this.$router.push('/');
          }
          
        });
        if(!store.state.isLoggedIn) {
          alert('Sruput kopi, login.. Baru boleh masuk. :)')
          this.$router.push('/')
        }
      },
      components: {DashHead, DashSide},
      methods: {
        function(){
          return this.user.realname= 'Joko'
        }
        
      },
      afterCreate(){
        alert('halo');
      }
    }
</script>

<style>

</style>
