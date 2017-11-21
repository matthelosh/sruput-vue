<template>
    <div class="page">
        <div class="jumbotron">
            <div class="container">
            
                <div class="col-sm-8 text-center ">
                    <h1><i class="fa fa-coffee"></i></h1>
                    <h1 class="hidden-xs">SRUPUT</h1>
                    <h3 class="hidden-xs"><small>Satu Ragam Usaha agar Prakerlap mUdah Terlaksana</small></h3>
                    <hr>
                    <p class="hidden-xs">{{ text }}</p>
                </div>
                <div class="col-sm-4">
                    <div class="login-box">
                        <form action="" v-on:submit.prevent="onSubmit(login)" role="form">
                            <h4>Masuk Sistem</h4>
                            <div class="alert alert-danger infoError" v-if="loginError">{{ infoError }}</div>
                            <div class="form-group" :class="{'is-waiting': loader}">
                                <div class="input-group">
                                    <!-- <label for="role">Pilih Peran Anda!</label> -->
                                    <select name="periode" id="periode" class="form-control" v-model="login.periode">
                                        <option value="0">Pilih Periode</option>
                                        <option v-for="periode in periodes" v-bind:value="periode.value" :key="periode.value">{{periode.text}}</option>
                                    </select>
                                </div>
                                <br>
                                <div class="input-group">
                                    <!-- <label for="role">Pilih Peran Anda!</label> -->
                                    <select name="role" id="role" class="form-control" v-model="login._role">
                                        <option value="0">Pilih Peran</option>
                                        <option v-for="peran in perans" v-bind:value="peran.value" :key="peran.value">{{peran.text}}</option>
                                    </select>
                                </div>

                                <br>
                                <div class="input-group has-addon">
                                    <input type="text" name="username" id="username" v-model="login.username" class="form-control" placeholder="Username/ID">
                                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                </div>
                                <br>
                                <div class="input-group has-addon">
                                    <input type="password" name="password" id="password" v-model="login.password" class="form-control" placeholder="Password">
                                    <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                </div>
                            </div>
                            <div class="form-group text-center">
                                <button class="btn btn-primary btn-flat" type="submit">Masuk</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

      <div class="row-fluid">
        <div class="footer">
          <i class="fa fa-github fa-2x"></i>
          <i class="fa fa-heart fa-2x"></i>
          <i class="fa fa-code fa-2x"></i>
        </div>
      </div>
    </div>

</template>

<script>
    import axios from 'axios'
    import store from './../store/index'
    export default {
        data: function(){
            return {
                text: "Insya Allah Manjur!",
                login: {
                    // username: '',
                    // password: '',
                   periode: '0',
                    _role: '0'
                },
                
                periodes: [],
                
                // isAuth: false,
                loader: false,
                loginError: '',
                infoError: '',
                router: '',
                user: {},
                periodes : [
                {value: '10-1', text: '10.1'},
                {value: '10-2', text: '10.2'}
                // {value: '11-1', text: '11.1'},
                // {value: '11-2', text: '11.2'}
                ]
                // perans: "0"
            }

        },
        created() {
           return this.perans = [
              //  {value:"0", text: 'Pilih Peran Anda'},
               {value:"1", text: 'Admnistrator'},
               {value:"2", text: 'Pembimbing'},
               {value:"3", text: 'Praktikan'},
               {value:"4", text: 'Tukang'},
               ];
            // return this.periodes = [
            //     {value: '10-1', text: '10.1'},
            //     {value: '10-2', text: '10.2'},
            //     {value: '11-1', text: '11.1'},
            //     {value: '11-2', text: '11.2'}
            // ];
        },
        methods: {
           async onSubmit(dataLogin) {
               console.log(dataLogin);
            // let dataLogin = this.dataLogin;
            this.loader = true;

            var self = this;
            localStorage.setItem("periode", dataLogin.periode);
                axios.post('http://localhost:3456/user/authenticate', dataLogin)

                    .then(function(res){

                        // console.log(res);
                        let data = res.data;
                        if(data.error == false){
                            localStorage.setItem("isLoggedIn", true);
                            localStorage.setItem("username", data.user._id);
                            localStorage.setItem("realname", data.user.nama);
                            localStorage.setItem("token", data.token);
                            localStorage.setItem("role", data.user._role);
                            
                            window.location.href = '/dashboard';
                        } else if(res.data.error == true && res.data.kodeErr == "404"){
                            return self.loginError = true, self.infoError = res.data.msg;

                        }

                    })


            return this.loader = false;
            this.$router.push('/dashboard');
            //    this.$router.push('/dashboard');
               event.preventDefault();
           }
        },
        computed: {
            // loader(){
            //     return this.$store.state.loginPending;
            // }

        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .page {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url('./../../dist/assets/img/gudang.jpg');
        background-size: cover;
    }
    .jumbotron{
        background: rgba(238, 238, 238, 0.9)!important;
        height: 70vh;
    }
    .btn-flat{
        border-radius: 0!important;
        border: 0!important;
    }
    .login-box{
        border-top: 5px solid #78caa8;
        border-radius: 5px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
        position: relative;
        box-shadow: 3px 5px 15px 1px rgba(0,0,0,0.5);
    }
    .btn-login{
        margin-top: 10px;

    }
    .form-control, .input-group{
        border-radius: 0;
    }
    .is-waiting {
        position: relative;
        transition-duration: 1s;
        > * {
            opacity: .25;
        }
        &:before {
            content: '';
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 9;
        }
        &:after {
            background: {
                image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0cHgiIGhlaWdodD0iMTA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLWRlZmF1bHQiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4xNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNDE2NjY2NjY2NjY2NjY2N3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMjEwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjkxNjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48L3N2Zz4=);
                position: center;
                size: cover;
            }
            content: '';
            height: 64px;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 64px;
        }
    }
    .footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 20px;
      background: rgba(255,255,255,0.1);
      color: #efefef;
    }
</style>
