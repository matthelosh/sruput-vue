<template lang="pug">
div
	div.side.col-sm-2(v-bind:class="sideSlide")
		.profile
			span {{namauser}}

		ul.nav.sidebar-nav(v-if="isAdmin == 1")
			li.nav
				a(href="/dashboard") Home
			li.nav
				router-link(to="/prakerlap") Prakerlap
			li.nav
				router-link(to="/pembimbing") Pembimbing
			li.nav
				router-link(to="/dudi") DU/DI
			li.nav
				router-link(to="/praktikan") Praktikan
		ul.nav.sidebar-nav(v-else-if="isAdmin == 2")
			li.nav
				a(href="/dashboard") Home
			li.nav
				router-link(to="/monitoring") Monitoring
			li.nav
				a(href="#") Pengajuan Prakerlap
		ul.nav.sidebar-nav(v-else-if="isAdmin == 3")
			li.nav
				a(href="/dashboard") Home
			li.nav
				a(href="#") Mendaftar Prakerlap
			li.nav
				a(href="#") Jadwal Kegiatan Prakerlap
		ul.nav.sidebar-nav
			li.nav
				a(href="/logout")
					i.fa.fa-close
					| &nbsp; Keluar
	div.main.col-sm-10
		<router-view></router-view>
</template>

<script>
// import Vue from 'vue'
// Object.defineProperty(Vue.prototype, '$bus', {
//     get(){
//         return this.$root.bus;
//     }
// })
    export default{
        data: function(){
            return {
				name: 'DashMain',
				sideSlide: 'hideLeft'
            }
		},
		props: ['namauser','isAdmin'],
		mounted() {
			// this.$bus.$on('slideSide', event => {
			// 	this.sideSlide = event.msg;
			// });
		}
    }
</script>

<style lang="sass" scoped>
.side
	position: fixed
	min-height: 95vh
	height: auto
	margin-top: 50px
	background: #2d4756
	padding: 0!important
	.profile
		min-height: 200px
		background:
			image: url('./../../../../dist/assets/img/avatar.jpg')
			size: 100%
		box-sizing: border-box
		// padding: 20px
		position: relative
		span
			position: absolute
			bottom: 0
			display: block
			text-align: center
			font-weight: 600
			text-transform: uppercase
			background: transparentize(white, 0.5)
			width: 100%
			padding: 5px

	.nav
		a
			color: #efefef
			&:hover
				background: transparentize(#efefef, 0.8)

			&:focus, &:active
				color: #363679


.main
	margin-left: 16.66666667%
	margin-top: 60px
	// overflow-x: hidden

@media(max-width:767px)
	.hideLeft
		left: -50%
	.showSide
		position: absolute
		left: 0!important
		display: block
</style>
