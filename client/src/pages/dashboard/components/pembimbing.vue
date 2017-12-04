<template lang="pug">
div
  .well
    h1 Menu <small>Pembimbing</small>
    .btn-group
      button.btn.flat.text-center.root-menu.dark(@click="toggleMode('asli')")
        i.fa.fa-ellipsis-v
      button.btn.btn-flat.btn-guru1(@click="toggleMode('addGuru')") Tambah Guru
      button.btn.btn-flat.btn-guru2(@click="toggleMode('bagiDudi')") Tentukan Du/DI
  .row-fluid
    .col-sm-12(v-show="mode == 'asli'")
      .card
        .card-header.top-bordered
          .container-fluid
            .col-sm-6
              h4 Data <small>Guru Pembimbing</small> &nbsp;
                i.fa.fa-user
            .col-sm-4.col-sm-offset-1
              .input-group.has-addon
                  input.form-control(v-model="cari", placeholder="Nama Guru")
                  span.input-group-addon
                    i.fa.fa-search
        .card-body
          .table-responsive
            table.table.table-striped
              thead
                tr
                  th No
                  th Kode
                  th Nama Guru
                  th Alamat
                  th No. HP
                  th Dudi
              tbody
                tr(v-for="(guru, index) in gurusFiltered")
                  td {{ index+1 }}
                  td {{ guru._id }}
                  td {{ guru.nama }}
                  td {{ guru.alamat }}
                  td {{ guru.hp }}
                  td {{ guru._dudi }}

</template>

<script>
  import axios from 'axios'
  export default {
    name: "Pembimbing",
    data: () => ({
      mode: 'asli',
      gurus: [],
      token: localStorage.getItem("token"),
      cari: ''
    }),
    created() {
      this.getGurus();
    },
    methods: {
      toggleMode(mode) {
        var self = this;
        self.mode = mode;
      },
      getGurus() {
        var self = this;
        var token = self.token;
        axios.get('/protected/gurus', {
            headers: {
              'X-Access-Token': token
            }
          })
          .then(res => {
            self.gurus = res.data;
          })
      }
    },
    computed: {
      gurusFiltered() {
        var self = this;
        return this.gurus.filter((guru) => {
          return guru.nama.toLowerCase().indexOf(self.cari.toLowerCase()) >= 0;
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
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

</style>
