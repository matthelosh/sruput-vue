<template lang="pug">
  div
    .well
        h1 Jurnal Harian Peserta Prakerlap
    
    .card
        .card-header.top-bordered
            h4 Jurnal Siswa
        .card-body
            .table-responsive
                table.table.table-bordered
                    thead
                        tr
                            th No
                            th Kode
                            th Nama
                            th Dudi
                            th Tanggal
                            th Kegiatan
                    tbody
                        tr(v-for="(jurnal, index) in jurnals")
                            td {{index+1}}
                            td {{ jurnal._id }}
                            td {{ jurnal.nis.nama }}
                            td {{ jurnal.nis._id }}
                            td {{ jurnal.tgl | tanggal }}
                            td {{ jurnal.kegiatan }}
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data : () => ({
      jurnals: [],
      token: localStorage.getItem("token"),
      role: localStorage.getItem("role"),
      user : localStorage.getItem("username"),
      praktikans: []
  }),
  created() {
      this.getPraktikans();
      this.getAllJurnals();
  },
  filters: {
      tanggal(date){
          moment.locale('id');
          return moment(date).format('ddd, DD-MM-YYYY');
      }
  },
  methods: {
    getPraktikans(){
        var self = this;
        var token = self.token;
        var user = self.user;
        axios.get('/protected/praktikans/'+user, {headers: {'X-Access-Token': token}})
            .then(function(res){
                self.praktikans = res.data;
            });
    },
    getAllJurnals(){
        var self = this;
        var token = self.token;
        var user = self.user;
        var role = self.role;
        if( role == '1' || role == '4'){
            axios.get('/protected/alljurnals', { headers: {'X-Access-Token': token}})
                .then(res => {
                    self.jurnals = res.data;
                });
        } else if(role == '2'){
            axios.get('/protected/alljurnals', { headers: {'X-Access-Token': token}})
                .then(res => {
                    self.jurnals = res.data;
                });
        }
          
      }
  }
}
</script>

