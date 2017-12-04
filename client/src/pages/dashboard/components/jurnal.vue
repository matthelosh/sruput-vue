<template lang="pug">
div
  .row-fluid
    .col-sm-12
      .card.top-bordered
        .card-header
          h3 {{title.name}} <small>{{title.sub}}</small> &nbsp;
            i.fa(v-bind:class="title.icon")
          .btn-group
            button.btn.flat.btn-primary(@click="toggleMode('')")
              i.fa.fa-th
            //- button.btn.flat.btn-success(@click="toggleMode('add')")
            //-   i.fa.fa-plus
            button.btn.flat.btn-danger(@click="toggleMode('add')")
              i.fa.fa-plus
        .card-body(v-if="mode ==''")
          .table-responsive
            table.table.table-bordered
              thead
                tr
                  th No
                  th Kode
                  th Tanggal
                  th Kegiatan
                  th Lokasi
                  th Catatan
                  th Keterangan
              tbody(v-for="(jurnal, index ) in jurnals")
                tr
                  td {{ index+1 }}
                  td {{ jurnal._id }}
                  td {{ jurnal.tgl | tanggal}}
                  td {{ jurnal.kegiatan }}
                  td {{ jurnal.lokasi }}
                  td {{ jurnal.catatan.substr(0, 40)}}
                  td {{ jurnal.ket }}
        .card-body(v-else-if="mode == 'add'")
          .container-fluid
            h3 Tulis <small>Jurnal</small> &nbsp;
              i.fa.fa-pencil
            form.form(@submit.prevent="newJurnal(jurnal)")
              .row
                input(type="hidden" v-model="jurnal.nis")
                .col-sm-6
                  .form-group
                    label(for="idJurnal") ID Jurnal:
                    input.frm-input#idJurnal(v-model="jurnal._id" placeholder="ID Jurnal", disabled)
                .col-sm-6
                    label(for="tglJurnal") Tanggal :
                    input.frm-input#tglJurnal(v-model="jurnal.tgl" , type="datetime-local", placeholder="Tanggal")
              .row
                .col-sm-6
                  .form-group
                    label(for="kegiatan") Kegiatan:
                    input.frm-input#kegiatan(v-model="jurnal.keg", placeholder="Kegiatan")
                .col-sm-6
                  .form-group
                    label(for="lokasi") Lokasi:
                    input.frm-input#lokasi(v-model="jurnal.lok", placeholder="Lokasi")
              .row
                .col-sm-12
                  .form-group
                    label(for="cat") Catatan:
                    textarea#cat.frm-input(v-model="jurnal.cat", rows="6" placeholder="Isi")
              .row
                .col-sm-12
                  .form-group
                    label(for="ket") Keterangan:
                    input#ket.frm-input(v-model="jurnal.ket", placeholder="Keterangan")
              .row
                .col-sm-12
                  .form-group
                    button.btn.btn-flat.btn-primary.center-block Simpan
              

            


</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    name: "Jurnal",
    data: () => ({
      mode: '',
      
      title: {
        name: 'Jurnal',
        sub: 'Harian',
        icon: 'fa-calendar'
      },
      siswa: localStorage.getItem("username"),
      token: localStorage.getItem("token"),
      cari: '',
      jurnal: {
        nis: localStorage.getItem("username"),
        _id: '',
        tgl: '',
        keg: '',
        lok: '',
        cat: '',
        ket: ''
      },
      filters: {
        tanggl(value){
          return 
        }
      },
      jurnals: []
    }),
    filters: {
      tanggal: function(date) {
        moment.locale("id");
        return moment(date).format('DD MMMM YYYY H:m:s');
      }
    },
    created() {
      this.getJurnals();
    },
    methods: {
      getJurnals(){
        var self = this;
        var token = self.token;
        var nis = self.jurnal.nis;
        axios.get('/protected/jurnals/'+nis, {headers: {'X-Access-Token': token}})
            .then(function(res){
              self.jurnals = res.data;
            });
      },
      toggleMode(mode) {
        var self = this;
        self.mode = mode;
        if(mode == 'add') {
          var user = self.siswa;
          var tgl = Date.now();
          var kode = user+'-'+tgl;
          self.jurnal._id = kode;
        }else if( mode == ''){
          this.getJurnals();
        }
      },
      newJurnal(jurnal){
        var self = this;
        var token = self.token;
        // var header = {'X-Access-Token': self.token};
        
        axios.post('/protected/newJurnal', jurnal, {headers: {'X-Access-Token': token}})
            .then(res=>{
              if(res.data.code == 11000){
                console.log(res);
              } else {
                console.log(res)
              }
            });
      }
    },
    computed: {
      idJurnal(){
        var self = this;
        var user = self.siswa;
        var tgl = Date.now();
        var kode = user+'-'+tgl;
        return kode;
      }
    }
  }
</script>

<style lang="sass" scoped>
.frm-input
  border: none
  outline: none
  border-bottom: 2px dotted #377188
  width: 100%
  transition: all .35s ease-in-out
  padding: 5px
  &:focus
    border-bottom: 3px solid #208061
    transition: all .35s ease-in-out
    
.root-menu
  background: #45645a
.btn-flat
  border-radius: 0!important
  color: #efefef
  transition: all .25s ease-in-out
  &:hover
    box-shadow: 0 3px 5px rgba(0,0,0,0.6)
.btn-guru1
  background: #46bb3a
.btn-guru2
  background: #3e9835
.dark
  color: #efefef
.circle
  border-radius: 50%
input:disabled
  background: #ffe1e1!important
  color: #666
</style>
