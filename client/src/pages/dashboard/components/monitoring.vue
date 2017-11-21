<template lang="pug">
div
	br
	.well.well-success
		h3 Info monitoring Anda!
		p Silahkan pilih menu di bawah untuk memenuhi kebutuhan Anda!

	.row-fluid
		.col-sm-4
			.well.well-danger
				h4 Cetak Berita Acara Monitoring
				.input-group.has-addon
					label(for="dudis") Pilih Nama Dudi
					select.form-control#dudis(v-model="namaDudi" v-on:change="cariSiswa")
						option(value="0" selected) Pilih Dudi
						option(v-for="dudi in dudis" :value="dudi._id") {{ dudi.namaDudi }}

				.card(v-if="siswas")
					.card-header
						h5 Praktikan:
					.card-body
						ul.list-siswa
							li(v-for="siswa in siswas")
								div
									h4 {{ siswa.nama }}
									h5 HP: {{ siswa.hp }}

					router-link.btn.btn-flat.btn-danger.center-block(to="/dashboard/bamonitoring", target="_blank") Cetak
		.col-sm-4
			.well.well-danger
				h4 Laporan Monitoring
				form.form
				.form-group
					.input-group.has-addon
						input.form-control(name="tanggal", type="date", placeholder="Tanggal Pelaksanaan Monitoring")
						span.input-group-addon
							i.fa.fa-calendar
				.form-group
					.input-group.has-addon
						input.form-control(name="dudi", type="text", placeholder="Nama DU/DI")
						span.input-group-addon
							i.fa.fa-building
				.form-group
					.input-group.has-addon
						input.form-control(name="foto", type="file", placeholder="Foto", title="Lampirkan Foto Kunjungan")
						span.input-group-addon
							i.fa.fa-image
				.form-group
					button.btn.btn-flat.btn-primary.center-block Simpan
		.col-sm-4
			.well.well-danger
				h4 Cetak Berita Acara Monitoring
</template>

<script>
import axios from 'axios'
import store from './../../../store/index'
export default{
	data: function(){
		return {
			dudis: [],
			namaDudi: '0',
			siswas: ''
		}
	},
	created(){

		var self = this;
		var guru = localStorage.getItem("username");
		var token = localStorage.getItem("token");
		axios.get('/protected/dudi/'+guru, {headers: {'X-Access-Token': token}})
			.then(response => { self.dudis = response.data})
	},
	computed:{
		dudi(){
			return this.namaDudi;
		}
	},
	methods: {
		cariSiswa(){
			if(this.namaDudi == "0"){
				alert('Pilih Nama Dudi');
			}else{
				var kodeDudi = this.namaDudi;
				var token = localStorage.getItem("token");
				var self = this;
				localStorage.setItem("dudi", kodeDudi);
				this.$store.dispatch("setdudi", kodeDudi);
				axios.get('/protected/praktikan/'+kodeDudi, {headers: {'X-Access-Token': token}})
					.then(siswas => { self.siswas = siswas.data});
				axios.get('/protected/namaDudi/'+kodeDudi, {headers: {'X-Access-Token': token}})
					.then(res => { localStorage.setItem("namaDudi", res.data.namaDudi)});
			}


		},
		cetakMonitoring(){
			alert('Haloooow');
		}
	}
}
</script>

<style lang="sass" scoped>
.input-group-addon
	cursor: pointer

.list-siswa
	list-style: none
	padding: 0!important
	li

		div
			padding: 10px
			border-top: 1px dashed #ccc
			margin: 5px auto
			&:hover
				background: transparentize(lime, 0.9)

.btn-flat
	border-radius: 0!important
</style>
