<template lang="pug">
div
  .well
    h1 Menu <small>Pembimbing</small>
    p Silahkan Pilih Menu yang disediakan.

  .row-fluid
    .col-sm-4
      .card
        button.btn.btn-flat.btn-warning Tambah
</template>
<script>
export default {
  name: "Pembimbing",
  data: () => ({

  })
}
</script>
<style lang="sass" scoped>
  .btn-flat
    border-radius: 0!important

  .card
    min-height: 20px
    padding: 19px
    margin-bottom: 20px
    background-color: #e8faf5
    border: 1px solid #e3e3e3
    border-radius: 0
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05)
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05)
</style>
