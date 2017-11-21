<template lang="pug">
div
  .well
    h1 Menu <small>Praktikan</small>
    .btn-group
      button.btn.bg-teal.flat.dark(@click="toggleMode('addSiswa')") Tambah Praktikan
      button.btn.bg-teal1.flat.dark(@click="toggleMode('penempatan')") Penempatan Praktikan
      button.btn.bg-teal2.flat.dark(@click="toggleMode('mutasi')") Mutasi Praktikan
  .row-fluid
    .col-sm-12(v-if="mode==''")
      .card
        .card-header.top-bordered.border-green
          .container
            .col-sm-6
              h3
                i.fa.fa-users &nbsp;
                | Data <small> Praktikan </small>
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
                  th Periode
                  th Nama Dudi
                  th Status
                  th Aksi
              tbody
                tr(v-for="(praktikan, index) in praktikansFiltered")
                  td {{index+1}}
                  td {{ praktikan._id}}
                  td {{praktikan.nama}}
                  td {{praktikan.periode}}
                  td {{ praktikan._dudi}}
                  td {{ praktikan.hp}}
                  td Edit

    .col-sm-10.col-sm-offset-1(v-else-if="mode == 'addSiswa'")
      .card
        .card-header.top-bordered.bordered-green
          h4 Tambah Praktikan <br />
            small {{addSiswaInfo}}
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
          h4 Penempatan Praktikan ke DU/DI
        .card-body
          div(v-show="siswa")
            p.text-center Calon Praktikan:
            h4.text-center {{siswa.nama}} <br /> <small> HP.: {{siswa.hp}} </small>
          form.form#frmTempatkan(v-on:submit.prevent='tempatkan')
            .form-group
              label(for="nis") Kode Peserta Prakerlap (huruf u+ Digit depan NIS)
              .input-group.has-addon
                
                input.form-control#nis(name="nisTempat" placeholder="Masukkan NIS dengan format u+digit angka sebelum garis miring.", v-model="nisTempat", v-on:keyup.13="cariSiswa(nisTempat)")
                span.input-group-addon.tbl(@click="cariSiswa(nisTempat)")
                  i.fa.fa-search
            div(v-if="siswa")
              .form-group.dudiauto
                label(for="autocomplete") Nama DU/DI
                | <autocomplete id="dudiTempat" v-model="dudiTempat" v-bind="dudiTempat" name="dudi" class="form-auto" :placeholder="placeholder" :customHeaders="headers" size="100" url="/protected/namaDudi" :on-select="getData" anchor="_id" label="namaDudi" :min="1"></autocomplete>
              .form-group.guruauto
                label(for="guru") Guru Pembmbing
                autocomplete#guruTempat(v-model="guruTempat" v-bind="guruTempat" name="guru" :placeholder="guruplaceholder" :customHeaders="headers" url="/protected/gurus" :on-select="getData" anchor="_id" label="nama" :min="1")
              .form-group
                button.btn.flat.btn-primary.center-block(type="submit") Tempatkan

    .col-sm-12(v-else-if="mode == 'mutasi'")
      .card
        .card-header.top-bordered
          h4 Mutasi <small>Siswa</small>
        .card-body
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

      nisTempat: '',
      nisMutasi: '',
      siswa: '',
      dudi: {},
      dudis:'',
      pilDudi:'',
      token: localStorage.getItem("token"),
      
// Data for Penempatan
      placeholder: 'Nama Dudi',
      guruplaceholder: 'Nama Guru Pembimbing',
      dudiTempat: '',
      guruTempat: ''

  }),
  created() {
    this.getPraktikans();
  },
  filters: {
    lowercase: function(value){return value.toLowerCase();}
  },
  methods: {
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
        console.log(newSiswa);
        axios.post('/protected/praktikan',  newSiswa)
            .then(res=>{
              if(res.data.code == 11000){
                self.addSiswaInfo = res.data.errmsg;
              } else {
                self.newSiswa = '';
                // return self.newSiswa.progli = '0';
                self.addSiswaInfo = res.data.msg;
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
      axios.get('/protected/praktikans')
          .then(res=>{
            self.praktikans = res.data;
          });
    },
    cariSiswa(nis) {
      var self = this;
      var token = self.token;
      axios.get('/protected/praktikan/detil/'+ nis)
            .then(res => {
              if(res.data.data == "No Data"){
                self.siswa = {
                  nama: "Siswa Tidak ditemukan"
                }
              } else {
                self.siswa = res.data[0];
              }

            })

    }, cariDudi(dudi){
      var self = this;
      var token = self.token;
      axios.get('/protected/namaDudi/'+ dudi)
            .then(res => {
              // console.log(res);
              self.dudis = res.data;
            });
    },
    tempatkan(){
      let tempatkanFrm = document.getElementById("frmTempatkan");
      
      let nis = document.getElementById("nis").value;
      let dudi = document.getElementById("dudiTempat").value;
      let guru = document.getElementById("guruTempat").value;
      // formData.append('')
      let Data = ({
        _id: nis,
        _dudi: dudi,
        _guru: guru
      });
      console.log(Data);
      axios.post('/protected/updPraktikan?nis='+nis, Data)
          .then(res=>{
            console.log(res);
          });
    },
    setDudi(dudi){
      alert(dudi);
    },
    getResponse: function (response) {
      return response.data.items
    },
    getData(obj) {
      // console.log(obj);
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
.flat
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
.dark
  color: #efefef

li.active
  background: #acacac


</style>
