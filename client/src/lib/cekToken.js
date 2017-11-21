import router from './../main'
export default {
  cekToken(){
    var self = this;
    var token = localStorage.getItem("token");
    if(token == null){
      this.$router.push('/');
      localStorage.removeItem("isLoggedIn");
    } else {
      self.parseJwt = function(token){
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
      }
      var expTime = self.parseJwt(token);
      var timeStamp = Math.floor(Date.now()/1000);

      var timeCheck = expTime.exp - timeStamp;
      // console.log(timeCheck);
      if(timeCheck <= 0) {
        alert('Maaf! Token Anda habis. Silahkan Login kembali');
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        window.location.href='/';


      }
    }
  }
}
