<template lang="pug">
	div
		nav.navbar.navbar-sruput.navbar-fixed-top
			.container-fluid
				.navbar-header
					button.navbar-toggle.sideToggle(@click="toggleSide")
						i.fa.fa-bars
					
					a(href="/" class="navbar-brand") 
						i.fa.fa-coffee <span class="hidden-xs"> SRUPUT</span>
					p.navbar-title.visible-xs {{realname}}
				.navbar-collapse.collapse#sruputNavbar
					ul.nav.navbar-nav.navbar-left
						li.navbar-nav.nav
							a(href="javascript:void(0);") PERIODE: {{ periode }}
						
					ul.nav.navbar-nav.navbar-right
						li
							a(href="javascript:void(0)") 
								i.fa.fa-user &nbsp;
								|{{ realname }}
								span.profil Halo Semua
						li
							router-link.exit(to="/logout")
								i.fa.fa-power-off
						li
							a(href="javascript:void(0)") 
</template>

<script>
import eventHub from './../../../main'
// import Vue from 'vue'
// Object.defineProperty(Vue.prototype, '$bus', {
//     get(){
//         return this.$root.bus;
//     }
// })
    export default {
		props: ['realname'],
        data: function() {
            return {
				name: 'DashHead',
				collapse: 'collapse',
				showSide:'',
				periode: localStorage.getItem("periode")
				// realname: localStorage.getItem("realname")
            }
		},
		created(){

		},
		
		methods: {
			
			toggleSide(){
				this.eventHub.$emit('toggleSide', 'show');
			}
		},
		computed: {
			isAdmin(){
				return localStorage.getItem("role");
			}
		}
    }
</script>

<style>
	.navbar-title{
		line-height: 60px;
		color: #efefef;
		text-transform: uppercase;
		margin: 0!important;
		text-align: center;
	}
	.navbar-brand{
		margin-left: 0!important;
		/* line-height: 50px; */

	}
	.collapse{
		display: none;
	}
	
	.navbar-sruput{
		border-radius: 0;
		background: #31363a;
		margin-bottom: 50px;
		border: 0;
	}
	.navbar-sruput .container-fluid{
		padding-left: 0!important;
		padding-right: 0!important;
	}
	.navbar-header{
		background: rgb(5,57,74); /* Old browsers */
		background: -moz-linear-gradient(left, rgba(5,57,74,1) 0%, rgba(3,46,58,1) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(left, rgba(5,57,74,1) 0%,rgba(3,46,58,1) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to right, rgba(5,57,74,1) 0%,rgba(3,46,58,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05394a', endColorstr='#032e3a',GradientType=1 );
		/* padding: 0 50px; */
		width: 16.6666666666667%;
		/* width: 225.156px; */
	}
	.navbar-header > a {
		text-align: center;
		display: block;
		margin: auto;
	}
	.navbar-collapse{
		background: #023047; /* Old browsers */
		background: -moz-linear-gradient(left, #023047 0%, #028293 76%, #006670 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(left, #023047 0%,#028293 76%,#006670 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to right, #023047 0%,#028293 76%,#006670 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#023047', endColorstr='#006670',GradientType=1 ); /* IE6-9 */
	}
	.navbar-sruput a{
		color: #efefef!important;
	}
	.nav > li >  a:hover {
		background: #017582;;
		color: #efefef!important;

	}
	.navbar-collapse ul li a span.profil{
		display: none;
		position: absolute;
		background: #017582;
		left: 0;
		color: #efefef!important;
		top: -200%;
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		opacity: 0;
		transition: position 0.35s linear;
	}
	.navbar-collapse ul li a:hover span.profil{
		display: block;
		top: 100%;
		opacity: 1;
	}
@media (max-width: 767px) {
	/* .navbar-collapse{
		display: none;
	} */
	.navbar-header{
		width: auto;
	}
	.navbar-brand{
		padding: 20px 5px 0 30px!important;
	}
	.sideToggle{
		/* line-height: 50px; */
		background: none;
		border: none;
		outline: none;
		color: #efefef;
	}
	.main{
		margin-left: auto!important;
	}
}
</style>
