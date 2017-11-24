<template lang="pug">
div
	div.side.col-sm-2(v-bind:class="sideSlide")
		.profile(v-bind:style="{ 'background-image':'url('+image+')'}")
			span.hideSide(@click="hideSide")
				i.fa.fa-chevron-left.fa-2x.visible-xs
			span {{namauser}}

		ul.nav.sidebar-nav(v-if="isAdmin == 1")
			li.nav
				a(href="/dashboard") Home
					span.pull-right 
						i.fa.fa-home
			li.nav
				router-link(to="/prakerlap") Prakerlap
					span.pull-right 
						i.fa.fa-list
			li.nav
				router-link(to="/pembimbing") Pembimbing
					span.pull-right 
						i.fa.fa-user
			li.nav
				router-link(to="/dudi") DU/DI
					span.pull-right 
						i.fa.fa-building
			li.nav
				router-link(to="/praktikan") Praktikan
					span.pull-right 
						i.fa.fa-users
			li.nav
				router-link(to="/jadwal" @click="hideSide") Jadwal Prakerlap
					span.pull-right 
						i.fa.fa-calendar
		ul.nav.sidebar-nav(v-else-if="isAdmin == 2")
			li.nav
				a(href="/dashboard") Home
					span.pull-right 
						i.fa.fa-home
			li.nav
				router-link(to="/monitoring") Monitoring
					span.pull-right 
						i.fa.fa-television
			li.nav
				a(href="#") Pengajuan Prakerlap
					span.pull-right 
						i.fa.fa-file
			li.nav
				router-link(to="/jadwal") Jadwal Prakerlap
					span.pull-right 
						i.fa.fa-calendar
		ul.nav.sidebar-nav(v-else-if="isAdmin == 3")
			li.nav
				a(href="/dashboard") Home
					span.pull-right 
						i.fa.fa-home
			li.nav
				a(href="#") Mendaftar Prakerlap
					span.pull-right 
						i.fa.fa-sign-up
			li.nav
				router-link(to="/jadwal") Jadwal Prakerlap
					span.pull-right 
						i.fa.fa-calendar
		ul.nav.sidebar-nav
			li.nav
				a.exit(href="/logout")
					i.fa.fa-power-off
					| &nbsp; Keluar

	div.main.col-sm-10
		<router-view></router-view>
</template>

<script>
import eventHub from './../../../main'
    export default{
        data: function(){
            return {
				name: 'DashMain',
				sideSlide: 'hideLeft',
				url: 'url',
				user : localStorage.getItem("username"),
				image: './../../../../dist/assets/img/profil/'+localStorage.getItem("username")+'.jpg'
				
            }
		},
		props: ['namauser','isAdmin'],
		mounted() {
			this.eventHub.$on('toggleSide', data=>{
				this.sideSlide = data;
			})
		},
		methods: {
			hideSide(){
				this.sideSlide = 'hideLeft';
			}
		},
		computed: {
			background(){
				// var url = 'url';
				var user = localSotrage.getItem("username");
				return "url('./../../../../dist/assets/img/avatar.jpg')";
			}
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
			position: center center
			size: 100%
		box-sizing: border-box
		// padding: 20px
		position: relative
		transition: all .35s ease-in-out
		&:hover
			cursor: pointer
			filter: saturate(60%) sepia(10%)
			background-size: 110%
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
			background:
				image: linear-gradient(to right, rgba(0,0,0,0) 50%,transparentize(#efefef, 0.8) 50%)
				size: 200% 100%
				position: left center
			transition: all .35s linear
			
			&:hover
				background:
				image: linear-gradient(to right, rgba(0,0,0,0) 50%,transparentize(#efefef, 0.8) 50%)!important
				size: 200% 100%
				position: right center

			&:focus, &:active
				color: #363679
		.exit
			color: #ff6161
			&:hover
				background: transparentize(#ff6161, 0.5)
				color: #efefef

			&:focus, &:active
				color: #363679

.main
	margin-left: 16.66666667%
	margin-top: 60px
	// overflow-x: hidden

@media(max-width:767px)
	.hideSide
		position: fixed
		top: 50px
		right: -35px
		width: 50px!important
		height: 50px
		border-radius: 50%
		background: rgba(45,71,86, 0.9)!important
		color: #efefef
		i
			line-height: 40px
			text-align: center
	.hideLeft
		left: -50%
		top: 0
		transition: all .35s linear
	.show
		position: fixed
		left: 0!important
		display: block
		z-index: 999
		top: 0
		transition: all .35s linear
</style>
