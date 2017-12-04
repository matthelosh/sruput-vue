<template lang="pug">
div
  .well
    h1 Menu <small>DU / DI</small>
    .btn-group
      button.btn.flat.text-center.root-menu.dark(@click="toggleMode('asli')")
        i.fa.fa-ellipsis-v
      button.btn.flat.btn-dudi1(@click="toggleMode('addDudi')") Tambah Dudi
      button.btn.flat.btn-dudi2(@click="toggleMode('editDudi')") Edit Dudi
    
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
                  th Guru Pembimbing
              tbody(:class="{loader: loadDudi}")
                tr(v-for="(dudi, index) in dudisFiltered")
                  td {{index+1}}
                  td {{dudi._id}}
                  td {{dudi.namaDudi}}
                  td {{dudi.alamat}}
                  td {{dudi.kota}}
                  td 
                    span(v-if="dudi._guru == null")
                      .col-sm-10
                        autocomplete#guru(v-model="guru", v-bind:value="setGuru._id", name="idGuru", class="form-auto", :placeholder="guruplaceholder", :customHeaders="headers", url="/protected/namaGuru", :on-select="getGuru", anchor="_id", label="nama", :min=2)
                      .col-sm-2
                        button.btn.btn-sm(@click="setguru(dudi._id, setGuru._id)", title="Simpan")
                          i.fa.fa-floppy-o
                    span(v-else) 
                      span.col-sm-12 {{ dudi._guru.nama}}

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
  import Autocomplete from 'vue2-autocomplete-js'
  export default {
    components: {Autocomplete},
    name: "",
    data: () => ({
      mode: 'asli',
      loadDudi: false,
      cari: '',
      dudis: [],
      token: localStorage.getItem("token"),
      dudi: {
        _id: '',
        namaDudi: '',
        alamat: '',
        kota: '',
        _guru: ''
      },
      newDudi: {
        _id: '',
        progli: '0'
      },
      proglis: [{
          value: "tkj",
          text: 'Teknik Komputer dan Jaringan'
        },
        // {value:"tkr", text: 'Teknik Kendaraan Ringan'},
        {
          value: "mm",
          text: 'Multimedia'
        },
        // {value:"otr", text: 'Ototronika'},
        // {value:"tbsm", text: 'Teknik dan Bisnis Sepeda Motor'}
      ],
      token: localStorage.getItem("token"),
      headers: {'X-Access-Token': localStorage.getItem("token")},
      guruplaceholder: 'Nama guru',
      setGuru : {},
      guru: ''
    }),
    mounted() {
      this.getDudis();
    },
    methods: {
      getGuru(obj){
        var self = this;
        self.setGuru._id = obj._id;
      },
      toggleMode: function(mode) {
        var self = this;
        self.mode = mode;
      },
      getDudis() {
        var self = this;
        var token = self.token;
        axios.get('/protected/dudis', {
            headers: {
              'X-Access-Token': token
            }
          })
          .then(res => {
            self.loader = true;
            self.dudis = res.data;
            setTimeout(() => {
              self.loader = false;
            }, 1500);
          });
      },
      getKode() {
        var self = this;
        var progli = self.newDudi.progli;
        var token = self.token;
        var kp = '';
        if (progli == "mm") {
          kp = 'DM';
        } else if (progli == "tkj") {
          kp = 'DT'
        }
        axios.get('/protected/kodeDudi/' + kp, {
            headers: {
              'X-Access-Token': token
            }
          })
          .then(res => {
            var _id = res.data[0]._id;
            var angka = Number(_id.substr(2, 4));
            var huruf = _id.substr(0, 2);
            var newAngka = '0' + (angka + 1);
            var newKode = huruf + newAngka;
            // console.log(newKode);
            self.dudi._id = newKode;
          })
      },
      addDudi(dudi) {
        var self = this;
        var token = self.token;
        axios.post('/protected/addDudi', dudi, {
            headers: {
              'X-Access-Token': token
            }
          })
          .then(res => {
            if (!res.data.success) {
              alert(res.data);
              
            } else if (res.data.success == true) {
              alert(res.data.msg);
              self.dudi = {
                progli: '0',
                namaDudi: '',
                alamat: '',
                kota: '',
                telp: ''
              }
            }
          });
      },
      setguru(dudi, guru){
        var self = this;
        var token = self.token;
        var data = {
          _id: dudi,
          _guru: guru
        }
        axios.put('/protected/setguru', data, {headers: {'X-Access-Token': token}})
            .then(function(res){
              console.log(res);
            });
        
        setTimeout(function(){
          self.getDudis();
        })
      }
    },
    computed: {
      dudisFiltered: function() {
        var self = this;
  
        return this.dudis.filter(function(dudi) {
  
          return dudi.namaDudi.toLowerCase().indexOf(self.cari.toLowerCase()) >= 0;
  
        })
      },
      
    }
  }
</script>

<style lang="sass" scoped>
.root-menu
  background: #2a8ba2
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
.dark
  color: #efefef
.loader 
  position: relative
  transition-duration: 1s
  > * 
    opacity: .25
  
  &:before 
    content: ''
    height: 100%
    left: 0
    position: absolute
    top: 0
    width: 100%
    z-index: 9
  &:after
    background: 
      image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0cHgiIGhlaWdodD0iMTA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLWRlZmF1bHQiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4xNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNDE2NjY2NjY2NjY2NjY2N3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMjEwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjkxNjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48L3N2Zz4=)
      position: center
      size: cover
      
    content: ''
    height: 64px
    left: 50%
    position: absolute
    top: 50%
    transform: translate(-50%, -50%)
    width: 64px
</style>
