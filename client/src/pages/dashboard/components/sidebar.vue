<template lang="pug">
	div.side
		.profile
			span {{ user}}
			img(src="assets/img/manjaro.png")
		ul.nav.sidebar-nav(v-if="isAdmin == 1")
			li.nav
				a(href="/dashboard") Home
			li.nav
				a(href="#") Pembimbing
			li.nav
				a(href="#") Praktikan
		ul.nav.sidebar-nav(v-else-if="isAdmin == 2")
			li.nav
				a(href="/dashboard") Home
			li.nav
				a(href="#") Monitoring
			li.nav
				a(href="#") Pengajuan Prakerlap
		ul.nav.sidebar-nav(v-else-if="isAdmin == 3")
			li.nav
				a(href="/dashboard") Home
			li.nav
				a(href="#") Mendaftar Prakerlap
			li.nav
				a(href="#") Jadwal Kegiatan Prakerlap
</template>

<script>
	export default{
		data: function() {
			return {
				name: 'DashSide'
				
			}
		},
		beforeCreate(){
			let token = localStorage
		}, 
		props: ['user', 'isAdmin']
	} 
	
</script>

<style lang="sass" scoped>
.side
	background: #67a0ee;
	.nav
		a
			color: #efefef;
</style>


