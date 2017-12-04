<template lang="pug">
div
  .row-fluid
    .well
      h1 Menu <small>Praktikan</small>
      .btn-group
        button.btn.flat.text-center.root-menu.dark(@click="toggleMode('')")
          i.fa.fa-ellipsis-v
        button.btn.bg-teal.flat.dark(@click="toggleMode('addSiswa')") Tambah Praktikan &nbsp;
          i.fa.fa-user-plus
        button.btn.bg-teal1.flat.dark(@click="toggleMode('penempatan')") Penempatan Praktikan &nbsp;
          i.fa.fa-random
        button.btn.bg-teal2.flat.dark(@click="toggleMode('mutasi')") Mutasi Praktikan &nbsp;
          i.fa.fa-exchange
        button.btn.warning.flat.dark(@click="toggleMode('verifikasi')") Verifikasi Administrasi &nbsp;
          i.fa.fa-check-square-o
  .row-fluid
    .col-sm-12(v-if="mode==''")
      .card
        .card-header.top-bordered.border-green
          .container-fluid
            .col-sm-6
              h4 Data <small> Praktikan </small> &nbsp;
                i.fa.fa-users 
            .col-sm-4.col-sm-offset-1
              .input-group.has-addon
                input.form-control(v-model="cari", placeholder="Nama Siswa")
                span.input-group-addon
                  i.fa.fa-search
        .card-body
          .table-responsive
            table.table.table-striped
              thead
                tr
                  th No
                  th ID
                  th Nama
                  th Progli
                  th Nama Dudi
                  th Pembimbing
                  th Status
                  th NO. HP
              tbody
                tr(v-for="(praktikan, index) in praktikansFiltered")
                  td {{index+1}}
                  td {{ praktikan._id}}
                  td {{praktikan.nama}}
                  td {{praktikan.progli | uppercase }} <br> 
                  td 
                    span(v-if="praktikan._dudi") {{ praktikan._dudi.namaDudi}} <br>
                      span(v-if="praktikan._dudi") <small>{{praktikan._dudi.alamat}}</small>
                    span(v-else) Belum ditempatkan
                  td 
                    span(v-if="praktikan._guru ") {{ praktikan._guru.nama}}
                    span(v-else) Belum ada Guru Pembimbing
                  td 
                    span(v-if="praktikan._dudi") <i class="fa fa-check-circle-o success"></i> Diterima
                    span(v-else) Belum ditempatkan
                  td 
                    i.fa.fa-mobile &nbsp;
                    | {{ praktikan.hp }}

    .col-sm-10.col-sm-offset-1(v-else-if="mode == 'addSiswa'")
      .card
        .card-header.top-bordered.bordered-green
          h4 Tambah <small>Praktikan </small> &nbsp;
            i.fa.fa-user-plus
            small {{addSiswaInfo}} &nbsp;
            
        .card-body
          form.form(v-on:submit.prevent="addSiswa(newSiswa)")
            .form-group
              .input-group.has-addon
                input.form-control#nis(v-model="newSiswa.nis", placeholder="Masukkan NIS siswa dengan format u+angka sebelum garis miring. Ex. u4444 dari NIS: 4444/1234.066", required)
                span.input-group-addon
                  i.fa.fa-barcode
            //- br
            .form-group
              .input-group.has-addon
                input.form-control(v-model="newSiswa.nama", placeholder="Masukkan Nama siswa", required)
                span.input-group-addon
                  i.fa.fa-user-plus
            .form-group
              .input-group.has-addon
                input.form-control(v-model="newSiswa.periode", placeholder="periode", value="periode" disabled)
                span.input-group-addon
                  i.fa.fa-clock-o
            .form-group
              .input-group.has-addon
                select.form-control(v-model="newSiswa.progli", required)
                  option(value="0") Pilih Progli
                  option(v-for="progli in proglis", v-bind:value="progli.value") {{ progli.text }}

            .form-group
              .input-group.has-addon
                input.form-control(v-model="newSiswa.hp", placeholder="Masukkan No. HP siswa", required, type="number")
                span.input-group-addon
                  i.fa.fa-phone-square
            .form-group
              button.btn.btn-success.flat.center-block Tambah Siswa

    .col-sm-10.col-sm-offset-1(v-else-if="mode == 'penempatan'")
      .card
        .card-header.top-bordered.border-green
          h4 Penempatan <small>Praktikan ke DU/DI</small> &nbsp;
            i.fa.fa-random
        .card-body
          div.siswaShow(v-show="siswa.nama")
            p.text-center Calon Praktikan:
            h4.text-center {{siswa.nama}} <br /> <small> <i class="fa fa-mobile fa-2x"></i> : {{siswa.hp}} </small>
          br
          form.form#frmTempatkan(v-on:submit.prevent='tempatkan(siswa)')
            .foto-box.pull-left(style="margin-right: 20px; transition: all .35s ease-in-out; border: 1px solid #999", v-show="siswa.nama")
              span(v-if="siswa.nama")
                img.img(src="./../../../../dist/assets/img/avatar.jpg")
              span(v-else)
              
            .form-group
              label(for="nis") Kode Peserta Prakerlap (huruf u+ Digit depan NIS)
              .input-group.has-addon
                
                input.form-control#nis(name="nisTempat" placeholder="Masukkan NIS dengan format u+digit angka sebelum garis miring.", v-model="siswa.nisTempat", @change="cariSiswa(siswa.nisTempat)" , required)
                span.input-group-addon.tbl(@click="cariSiswa(siswa.nisTempat)")
                  i.fa.fa-search
            div(v-if="siswa.nisTempat !== ''")
              .form-group.dudiauto(v-if="siswa._dudi == null || ''")
                label(for="autocomplete") Nama DU/DI
                | <autocomplete id="dudiTempat" v-model="siswa._dudi" v-bind="dudiTempat" name="dudi" class="form-auto" :placeholder="placeholder" :customHeaders="headers" size="100" url="/protected/namaDudi" :on-select="getData" anchor="_id" label="namaDudi" :min=1 v-bind:value="siswa._dudi" :required="true"></autocomplete>
              div(v-else)
                p Siswa sudah di terima di: <strong>{{siswa._dudi.namaDudi}}</strong>
              .form-group.guruauto(v-if="siswa._guru == null || ''")
                label(for="guru") Guru Pembmbing
                autocomplete#guruTempat(v-model="siswa._guru", v-bind="guruTempat", name="guru", class="form-auto", :placeholder="guruplaceholder" ,:customHeaders="headers", size="100", url="/protected/namaGuru", :on-select="getGuru", anchor="_id", label="nama", :min=1)
              div(v-else)
                p Siswa sudah dibimbing oleh: <strong>{{siswa._guru.nama}}</strong>
              br
              br
              .form-group
                span(v-if="siswa._guru")
                  button.btn.flat.btn-primary.center-block(type="submit", disabled) Tempatkan
                span(v-else)
                  button.btn.flat.btn-primary.center-block(type="submit") Tempatkan

    .col-sm-12(v-else-if="mode == 'mutasi'")
      .card
        .card-header.top-bordered
          .container-fluid
            .col-sm-4
              h4 Mutasi <small>Siswa</small> &nbsp;
                i.fa.fa-exchange
              
        .card-body
          .row-fluid
            .container-fluid
              .col-sm-4
                autocomplete#nisMutasi(v-model="siswa._id", v-bind="nisMutasi", name="nisMutasi", class="form-auto", :placeholder="mutasiplaceholder", :customHeaders="headers", url="/protected/namaPraktikan", :on-select="getSiswa", anchor="nama", label="nama", :min=1, :onAjaxProgress="gettingSiswa")
                hr
              .col-sm-6
                .gettingSiswa(v-show="loadSiswa")
                  p Ngopi Dulu, Sebentar saya ambilkan Data..
          .row-fluid
            .container-fluid
                .col-sm-12
                  div(v-show="siswaMutasi._id", style="z-index: -1")
                    .row-fluid
                      .col-sm-1 Kode: {{siswaMutasi._id}}
                      .col-sm-4 Nama: {{siswaMutasi.nama}}
                      .col-sm-3 
                        span(v-if="siswaMutasi._dudi==null") Du/Di Lama: Belum Ditempatkan
                        span(v-else)  Du/Di: {{siswaMutasi._dudi.namaDudi}}
                      .col-sm-3 
                        span(v-if="siswaMutasi._dudi==null") Dudi Baru: Siswa Belum ditempatkan.
                          i(style="cursor: pointer; color: orangered; font-weight: 600;" @click="toggleMode('penempatan')") Tempatkan?
                          
                        span(v-else) Dudi Baru:
                          <autocomplete id="dudiTempat" v-model="siswaMutasi._dudi" v-bind="dudiTempat" name="dudi" class="form-auto" :placeholder="placeholder" :customHeaders="headers" size="100" url="/protected/namaDudi" :on-select="getDudiBaru" anchor="_id" label="namaDudi" :min=1 v-bind:value="siswaMutasi._dudi" :required="true"></autocomplete>
                      .col-sm-1
                        span(v-if="siswaMutasi._dudi==null")
                          button.btn.flat.btn-warning(disabled) Mutasi
                        span(v-else)
                          button.btn.flat.btn-danger(@click="mutasi(siswaMutasi._id, siswaMutasi._dudiBaru)") Mutasi

    .col-sm-12(v-else-if="mode == 'verifikasi'")
      .card
        .card-header.top-bordered
          h4 Verifikasi <small>Administrasi</small>&nbsp;
            i.fa.fa-check-square-o

</template>
<script>
import axios from 'axios'
import Autocomplete from 'vue2-autocomplete-js'
export default {
  // extends: VueTypeHead,
  name: "Praktikan",
  data: () => ({
      mode:'',
      praktikans: [],
      cari: '',
      formData: '',
      newSiswa: {
        progli: '0',
        periode: localStorage.getItem("periode")
        },
      proglis: [
        {value: "mm", text: "Multimedia"},
        {value: "tkj", text: "Teknik Komputer dan Jaringan"},
        {value: "otr", text: "Ototronika"},
        {value: "tkr", text: "Teknik Kendaraan Ringan"},
        {value: "tbsm", text: "Teknik dan Bisnis Sepeda Motor"},
      ],
      addSiswaInfo : '',
      nama: "Sruput Kopi Dulu",

      siswa: {nisTempat: ''},
     
      dudi: {},
      dudis:'',
      pilDudi:'',
      token: localStorage.getItem("token"),
      
// Data for Penempatan
      placeholder: 'Nama Dudi',
      guruplaceholder: 'Nama Guru Pembimbing',
      dudiTempat: '',
      guruTempat: '',
// data Mutasi
       nisMutasi: '',
       mutasiplaceholder:'Masukkan Nama Siswa',
       siswaMutasi: {
         _id: ''
       },
       loadSiswa: false

  }),
  created() {
    this.getPraktikans();
  },
  filters: {
    uppercase: function(value){return value.toUpperCase();}
  },
  methods: {
    mutasi(idSiswa, dudiBaru){
      // console.log(idSiswa+' - '+dudiBaru);
      var self = this;
      var token = self.token;
      var data = {
        _id: idSiswa,
        _dudi: dudiBaru
      }
      axios.post('/protected/mutasiSiswa', data, {headers: {'X-Access-Token': token}})
          .then(function(res){
            // console.log(res);
            self.siswaMutasi = {};
            self.getPraktikans();
          });
      
    },
      gettingSiswa(){
        var self= this;
        self.loadSiswa = true;
        setTimeout(function(){
          self.loadSiswa = false;
        }, 1500);
      },
    addSiswa(newSiswa){
      var self = this;
      var token = self.token;
      // console.log(newSiswa);
      var nisPatr = /^u+[0-9]/gi;
      var tes = nisPatr.test(newSiswa.nis);
      if(tes == false){
        alert('Format NIS harus diawali huruf \'u\' + angka NIS sebelum garis miring.');
        document.getElementById("nis").focus();
        return false;
      }
      if(newSiswa.progli == "0"){
        alert('Tentukan Program Keahlian');

        return false;
      }else {
        // console.log(newSiswa);
        axios.post('/protected/praktikan', newSiswa, {headers: {'X-Access-Token': token}})
            .then(res=>{
              if(res.data.code == 11000){
                self.addSiswaInfo = res.data.errmsg;
              } else {
                self.newSiswa = {
                  nis : '',
                  nama: '',
                  periode: localStorage.getItem("periode"),
                  progli: '0',
                  hp: ''
                };
                // return self.newSiswa.progli = '0';
                self.addSiswaInfo = res.data.msg;
                setTimeout(function(){
                  self.addSiswaInfo = '';
                }, 1000);
                self.getPraktikans();
              }
            });
      }

    },
    toggleMode(mode) {
      var self = this;
      self.mode = mode;
    },
    getPraktikans() {
      var self = this;
      var token = self.token;
      axios.get('/protected/praktikans',{headers: {'X-Access-Token': token}})
          .then(res=>{
            self.praktikans = res.data;
          });
    },
    cariSiswa(nis) {
      var self = this;
      var token = self.token;
      axios.get('/protected/praktikan/detil/'+ nis, {headers: {'X-Access-Token': token}})
            .then(res => {
              if(res.data.data == "No Data"){
                self.siswa = {
                  nama: "Siswa Tidak ditemukan"
                }
              } else {
                self.siswa = res.data[0];
                self.siswa.nisTempat = res.data[0]._id;
              }

            })

    }, cariDudi(dudi){
      var self = this;
      var token = self.token;
      axios.get('/protected/namaDudi/'+ dudi, {headers: {'X-Access-Token': token}})
            .then(res => {
              // console.log(res);
              self.dudis = res.data;
            });
    },
    tempatkan(siswa){
      var self = this;
      let tempatkanFrm = document.getElementById("frmTempatkan");
      var token = self.token;
      let nis = siswa._id;
      // let dudi = document.getElementById("dudiTempat").value;
      // let guru = document.getElementById("guruTempat").value;
      // formData.append('')
      // let Data = ({
      //   _id: nis,
      //   _dudi: dudi,
      //   _guru: guru
      // });
      // console.log(siswa._dudi);
      axios.post('/protected/updPraktikan/'+nis, siswa, {headers: {'X-Access-Token': token}})
          .then(res=>{
            console.log(res);
            self.siswa = {};
            self.getPraktikans();
          });
    },
    setDudi(dudi){
      alert(dudi);
    },
    getResponse: function (response) {
      return response.data.items
    },
    getData(obj) {
      // return obj.data._id;
      var self = this;
      self.siswa._dudi = obj._id;
      
    },
    getGuru(obj) {
      var self = this;
      self.siswa._guru = obj._id;
    },
    getSiswa(obj){
      var self=this;
      self.siswaMutasi._id = obj._id;
      self.siswaMutasi = obj;
      // console.log(obj);
    },
    getDudiBaru(obj){
      var self = this;
      self.siswaMutasi._dudiBaru = obj._id;
    }
  },
  computed: {
    praktikansFiltered: function(){
      var self = this;
      
      return this.praktikans.filter(function(prak){
        
        return prak.nama.toLowerCase().indexOf(self.cari.toLowerCase())>=0;
        
      })
    },
    headers(){
      var self = this;
      return {'X-Access-Token': self.token};
    }
  },
  components: {
    Autocomplete
  }
}
</script>
<style lang="sass" scoped>
.success
  color: #62aa88
.root-menu
  background: #378a76
.flat
  display: block
  transition: all .15s ease-in-out
  border-radius: 0!important
  &:hover
    box-shadow: 0 2px 5px rgba(0,0,0,0.5)
.bg-teal
  background: rgb(28, 177, 141)
.bg-teal1
  background: rgb(31, 193, 153)
.bg-teal2
  background: rgb(49, 223, 180)
.warning
  background: #c72424
.dark
  color: #efefef

li.active
  background: #acacac
.gettingSiswa
  text-transform: uppercase
  display: block
  color: brown
.siswaShow
  padding: 10px
  background: #eee
  border: 1px dashed #999
.card-header
  h4
    small
      color: #3cb58a!important
@media(max-width: 767px)
  .flat
    width: 100%
</style>
