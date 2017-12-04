<template lang="pug">
div
  .row-fluid
    .well
      h1 Menu <small>Prakerlap</small>
      .btn-group
        button.btn.flat.text-center.root-menu.dark(@click="toggleMode('')")
          i.fa.fa-ellipsis-v
        button.btn.warning.flat.dark(@click="toggleMode('verifikasi')") Verifikasi Administrasi &nbsp;
          i.fa.fa-check-square-o
        button.btn.warning.flat.dark(@click="toggleMode('nilai')") Nilai Prakerlap &nbsp;
          span &#xf080;
  
  .row-fluid
    .col-sm-12(v-if="mode == ''")
      .card
        .card-header.top-bordered
          h4 Info <small>Prakerlap</small> <i class="fa fa-info-circle"></i>
        .card-body

    .col-sm-12(v-else-if="mode == 'verifikasi'")
      .card
        .card-header.top-bordered
          h4 Verifikasi <small>Administrasi</small>&nbsp;
            i.fa.fa-check-square-o
        .card-body
    
    .col-sm-12(v-else-if="mode == 'nilai'")
      .card.top-bordered
        .card-header
          h4 Nilai <small>Prakerlap</small> &#xf080;
        .card-body
          form.form.form-horizontal(@submit.prevent="simpNilai(nilai)")
            .container-fluid
              h4 Masukkan Nilai Siswa
              .row-fluid
                .form-group
                  .col-sm-12
                    autocomplete#nisNilai(v-model="siswa._id", v-bind="nisNilai", name="nisNilai", class="form-auto", :placeholder="nilaiplaceholder", :customHeaders="headers", url="/protected/namaPraktikan", :on-select="getSiswa", anchor="_id", label="nama", :min=1, :onAjaxProgress="gettingSiswa")
                br
              .row-fluid
                .col-sm-6
                  fieldset
                    legend Nilai Teknis &nbsp;
                      i.fa.fa-wrench
                    
                .col-sm-6      
                  fieldset
                    legend Nilai Non Teknis &nbsp;
                      i.fa.fa-handshake-o
                    .form-group
                      label.col-sm-8(for="disiplin") Disiplin
                      .input-group.col-sm-2
                        input.form-control.flat(v-model="nilai.disiplin", placeholder="Nilai Disiplin")
                    .form-group
                      label.col-sm-8(for="disiplin") Disiplin
                      .input-group.col-sm-2
                        input.form-control.flat(v-model="nilai.disiplin", placeholder="Nilai Disiplin")
                    .form-group
                      label.col-sm-8(for="disiplin") Disiplin
                      .input-group.col-sm-2
                        input.form-control.flat(v-model="nilai.disiplin", placeholder="Nilai Disiplin")
                    .form-group
                      label.col-sm-8(for="disiplin") Disiplin
                      .input-group.col-sm-2
                        input.form-control.flat(v-model="nilai.disiplin", placeholder="Nilai Disiplin")
                    .form-group
                      label.col-sm-8(for="disiplin") Disiplin
                      .input-group.col-sm-2
                        input.form-control.flat(v-model="nilai.disiplin", placeholder="Nilai Disiplin")
                    .form-group
                      label.col-sm-8(for="disiplin") Disiplin
                      .input-group.col-sm-2
                        input.form-control.flat(v-model="nilai.disiplin", placeholder="Nilai Disiplin")
                    .form-group
                      label.col-sm-8(for="disiplin") Disiplin
                      .input-group.col-sm-2
                        input.form-control.flat(v-model="nilai.disiplin", placeholder="Nilai Disiplin")
              .row-fluid
                .col-sm-12
                  fieldset
                    legend Nilai Kumulatif &nbsp;
                      i.fa.fa-plus-square



</template>
<script>
import Autocomplete from 'vue2-autocomplete-js'
export default {
  components: {Autocomplete},
  name: "Prakerlap",
  data: () => ({
    mode : "",
    // Nilai Prakerlap
    siswa: {},
    nilai: {},
    nisNilai: '',
    nilaiPrakerlap : '',
    nilaiplaceholder: 'Masukkan Nama Praktikan!',
    headers: {'X-Access-Token': localStorage.getItem("token")},
    loadingSiswa: false
    
  }),
  methods: {
    toggleMode(mode){
      this.mode = mode;
    },
     getSiswa(obj){
      var self=this;
      // self.nisNilai = obj._id;
      self.siswa = obj;
      // console.log(obj);
    },
    gettingSiswa(){
        var self= this;
        self.loadSiswa = true;
        setTimeout(function(){
          self.loadSiswa = false;
        }, 1500);
      }
  }
}
</script>
<style lang="sass" scoped>
.root-menu
  background: #861818
.flat
  display: block
  transition: all .15s ease-in-out
  border-radius: 0!important
  &:hover
    box-shadow: 0 2px 5px rgba(0,0,0,0.5)
  &:focus
  // &:active
    box-shadow: none
    outline: none
    border: none
    height: 110%
.warning
  background: #c72424
.dark
  color: #efefef
legend
  font-size: 1em
  font-weight: 700
</style>
