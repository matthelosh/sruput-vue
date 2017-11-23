<template lang="pug">
div
  .well
    h1 Menu <small>DU / DI</small>
    .btn-group
      .btn.flat.btn-dudi1(@click="toggleMode('addDudi')") Tambah Dudi
      .btn.flat.btn-dudi2(@click="toggleMode('editDudi')") Edit Dudi
    
  .row-fluid
    .col-sm-12(v-show="mode=='asli'")
      .card
        .card-header.top-bordered
          .container-fluid
            .col-sm-6
              h4 Data <small>DU/DI</small> &nbsp;
                i.fa.fa-building
            .col-sm-4.col-sm-offset-1
              .input-group.has-addon
                input.form-control(v-model="cari", placeholder="Nama Du/DI")
                span.input-group-addon
                  i.fa.fa-search
        .card-body
          .table-responsive
            table.table.table-striped
              thead
                tr
                  th No
                  th Kode
                  th Nama Dudi
                  th Alamat
                  th Kota/Kab
              tbody
                tr(v-for="(dudi, index) in dudisFiltered")
                  td {{index+1}}
                  td {{dudi._id}}
                  td {{dudi.namaDudi}}
                  td {{dudi.alamat}}
                  td {{dudi.kota}}
    .col-sm-12(v-show="mode=='addDudi'")
      .card
        .card-header.top-bordered
          h4 Tambah <small>DU/DI Baru</small> &nbsp;
            i.fa.fa-asterisk
        .card-body
          form.form#frmAddDudi(@submit.prevent="addDudi(dudi)")
            .form-group
              label(for="progli") Program Keahlian
              .input-group
                select.form-control#progli(v-model="newDudi.progli", @change="getKode")
                  option(value="0") Pilih Program Keahlian
                  option(v-for="progli in proglis" v-bind:value="progli.value") {{progli.text}}
            .form-group
              label(for="kodeDudi") Kode DU/DI
              .input-group.has-addon
                input.form-control#kodeDudi(name="kodeDudi" v-model="dudi._id" placeholder="Kode DU/DI" v-bind:value="newDudi._id" disabled)
                span.input-group-addon
                  i.fa.fa-qrcode
            .form-group
              label(for="namaDudi") Nama DU/DI
              .input-group.has-addon
                input.form-control#namaDudi(name="namaDudi" v-model="dudi.namaDudi" placeholder="Nama DU/DI" required)
                span.input-group-addon
                  i.fa.fa-building
            .form-group
              label(for="alamat") Alamat DU/DI
              .input-group.has-addon
                input.form-control#alamat(name="alamat" v-model="dudi.alamat" placeholder="Alamat DU/DI" required)
                span.input-group-addon
                  i.fa.fa-map-marker
            .form-group
              label(for="telp") No. Telepon
              .input-group.has-addon
                input.form-control#telp(name="telp" v-model="dudi.telp" placeholder="No. Telepon")
                span.input-group-addon
                  i.fa.fa-phone
            .form-group
              label(for="kota") Kota
              .input-group.has-addon
                input.form-control#kota(name="kota" v-model="dudi.kota" placeholder="Kota / Kabupaten")
                span.input-group-addon
                  i.fa.fa-bank
            .form-group
              button.btn.flat.btn-save.center-block(type="submit") 
                i.fa.fa-floppy-o &nbsp;
                | Simpan
</template>
<script>
import axios from 'axios'
export default {
  name: "",
  data: () => ({
    mode: 'asli',
    cari:'',
    dudis: [],
    token: localStorage.getItem("token"),
    dudi: {
      _id:'',
      namaDudi:'',
      alamat: '',
      kota: '',
      _guru: ''
    },
    newDudi: {
      _id:'',
      progli: '0'
    },
    proglis: [
      {value:"tkj", text: 'Teknik Komputer dan Jaringan'},
      // {value:"tkr", text: 'Teknik Kendaraan Ringan'},
      {value:"mm", text: 'Multimedia'},
      // {value:"otr", text: 'Ototronika'},
      // {value:"tbsm", text: 'Teknik dan Bisnis Sepeda Motor'}
    ],
    token: localStorage.getItem("token")
  }),
  mounted(){
    this.getDudis();
  },
  methods:{
    toggleMode: function(mode){
      var self = this;
      self.mode = mode;
    },
    getDudis(){
      var self = this;
      var token = self.token;
      axios.get('/protected/dudis', {headers: {'X-Access-Token': token}})
          .then(res => {
            self.dudis = res.data;
          });
    },
    getKode(){
      var self = this;
      var progli = self.newDudi.progli;
      var token = self.token;
      var kp ='';
      if(progli == "mm"){
        kp = 'DM';
      } else if(progli == "tkj"){
        kp = 'DT'
      }
      axios.get('/protected/kodeDudi/'+kp, {headers:{'X-Access-Token': token}})
        .then(res => {
          var _id = res.data[0]._id;
          var angka = Number(_id.substr(2,4));
          var huruf = _id.substr(0,2);
          var newAngka = '0'+(angka+1);
          var newKode = huruf + newAngka;
          // console.log(newKode);
          self.dudi._id = newKode;
        })
    },
    addDudi(dudi){
      var self = this;
      var token = self.token;
      axios.post('/protected/addDudi', dudi, {headers: {'X-Access-Token': token}})
            .then(res => {
              if(!res.data.success){
                alert(res.data);
              } else if(res.data.success == true){
                alert(res.data.msg);
              }
            });
    }
  },
  computed: {
    dudisFiltered: function(){
      var self = this;
      
      return this.dudis.filter(function(dudi){
        
        return dudi.namaDudi.toLowerCase().indexOf(self.cari.toLowerCase())>=0;
        
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.card
  margin-bottom: 20px
.flat
  border-radius: 0
  transition: all .15s ease-in-out
  border-radius: 0!important
  &:hover
    box-shadow: 0 2px 5px rgba(0,0,0,0.5)
.btn-dudi1
  background: #44c2e0
  color: #efefef
.btn-dudi2
  background: #38b3d0
  color: #efefef
.btn-save
  background: #2591ab
  color: #efefef
</style>
