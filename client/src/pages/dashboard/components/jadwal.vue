<template lang="pug">
.container-fluid
    .card
        .card-header.top-bordered
            button.btn.btn-sm.flat.btn-danger(v-if="role == 1" @click="toggleMode('addJadwal')") Buat Jadwal
            h1.text-center JADWAL PRAKERLAP ANGKATAN 10.2 <br>
                i.fa.fa-calendar
        .card-body
            .table-responsive(v-show="mode ==''")
                table.table.table-bordered
                    thead
                        tr
                            th No
                            th Tanggal
                            th Kegiatan
                            th Pelaksana
                            th Lokasi
                    tbody
                        tr(v-for="(jadwal, index) in jadwals" :class="[isNow ? tandai:'']" )
                            td {{index+1}}
                            td.tgl {{jadwal.start | formatDate }} - {{jadwal.end | formatDate}}
                            td {{ jadwal.kegiatan}}
                            td {{ jadwal.pelaksana}}
                            td {{ jadwal.tempat}}
    
            .container-fluid(v-show="mode=='addJadwal'")
                h4 Entri <small>Jadwall</small>&nbsp;
                    i.fa.fa-calendar-plus-o
                hr
                form.form(v-on:submit.prevent="addJadwal(jadwal)")
                    .form-group
                        input.form-control#monKe(type="text" v-model="jadwal.monKe" placeholder="No.Urut")
                    .form-group
                        input.form-control#start(type="datetime-local" v-model="jadwal.start" placeholder="Tanggal Mulai")
                    .form-group
                        input.form-control#end(type="datetime-local" v-model="jadwal.end" placeholder="Tanggal Berakhir")
                    .form-group
                        input.form-control#kegiatan(type="text" v-model="jadwal.kegiatan" placeholder="Jenis Kegiatan")
                    .form-group
                        input.form-control#pelaksana(type="text" v-model="jadwal.pelaksana" placeholder="Pelaksana Kegiatan")
                    .form-group
                        input.form-control#tempat(type="text" v-model="jadwal.tempat" placeholder="Tempat Kegiatan")
                    .form-group
                        button.btn.flat.btn-primary(type="submit") Simpan
</template>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data(){
      return {
          role: localStorage.getItem("role"),
          mode: '',
          jadwal: {},
          token : localStorage.getItem("token"),
          jadwals: [],
          isNow: false,
          tgl : 'tgl'
          
      }
  },
  created(){
      this.getJadwals();
    //   this.cekTanggal();
  },
  computed: {
      periode(){
          return localStorage.getItem("periode");
      },
    //   jadwalsFiltered: function(){
    //       var self = this;
    //       return this.jadwals.filter(function(jadwal){
    //           return jadwal.start.toLocalString();
    //           return jadwal.end.toLocalString();
    //       })
    //   }
     
  },
  filters: {
      formatDate: function(date){
        return moment(date).format('DD MMMM YYYY H:m:s a');
      },
      selcted: function(text){
          return date.toUpperCase();
      }
      
  },
  methods: {
      
      toggleMode(mode){
          var self= this;
          self.mode = mode;
      },
      addJadwal(jadwal){
        var self = this;
        var token = self.token;
        console.log(jadwal);
        axios.post('/protected/addJadwal', jadwal, {headers: {'X-Access-Token': token}})
            .then(res=>{
                if(res.data.success == true) {
                    var msg = res.data.msg;
                    alert(res.data.msg );
                    self.jadwal ={}
                    console.log(res);
                    self.jadwal = {};
                } else {
                    alert(res.data);
                }
            })
      },
       getJadwals(){
          var self = this;
          var token = self.token;
          axios.get('/protected/jadwals', {headers: {'X-Access-Token': token}})
                .then(res=>{
                    self.jadwals = res.data;
                });
                
      }
  }
}
</script>
<style lang="sass" scoped>
.tandai
    background: #987590
    color: #363636
.flat
    border-radius: 0!important

th
    text-align: center
    text-transform: uppercase
thead > tr
    background: #aabdd0
    color: #efefef
tbody > tr:nth-of-type(even)
    background: #57bdd0
    color: #efefef
</style>
