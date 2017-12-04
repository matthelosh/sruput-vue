<template>
  <div>
      <dash-head v-bind:realname="user"></dash-head>
      <div class="row-fluid">
        <dash-main v-bind:userMon="user" v-bind:isAdmin="Admin" v-bind:namauser="user"></dash-main>
      </div>
      <footer class="footer col-sm-12">
        <div class="container-fluid">
          <p class="text-right"><strong>SRUPUT v1.0b-01 </strong>&copy; 2017 <a href="mailto: matthelosh@gmail.com"> Prakerlap SMKN 10 Malang </a> 
          <br> Credits: 
            <ul>
              <li>Manjaro  </li>
              <li>NodeJS  </li>
              <li>ExpressJS  </li>
              <li>MongoDB  </li>
              <li>VueJS 2.0  </li>
              <li>Github  </li>
              <li>Webkit</li>
            </ul>
          </p>
        </div>
      </footer>
  </div>
</template>

<script>
  import DashHead from './components/header.vue'
  // import DashSide from './components/sidebar.vue'
  import DashMain from './components/main.vue'
  import store from './../../store/index'
  import tokenService from './../../lib/cekToken'
  // import axios from 'axios'
  import router from './../../main'




    export default {
      data: function() {
        return {
          name: 'dashboard',
          text: '',
          user: {},
          // Admin: '',
          token: ''



        }
      },
      mounted(){
        setInterval(function(){
          tokenService.cekToken();
        }, 5000);

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
<style lang="sass">
.side-box
	padding: 0!important
	min-height: 100vh
	height: 100vh
footer
  height: 100px
  position: absolute
  bottom: 0!important
  width: 82.4444447%!important
  margin-left: 16.6666667%
  p
    // line-height: 100px;
    // margin: 0!important
    padding: 0!important
    margin-top: 40px;
    ul
      // line-height: 0!important
      
      li
        margin: 0 5px!important
        // padding: 0!important
        display: inline
        // line-height: 0!important
        color: #1ac772
</style>
