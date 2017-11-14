<template>
    <div>
		<nav class="navbar navbar-sruput navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button class="navbar-toggle">
						<i class="fa fa-bars"></i>
					</button>
					<a href="/" class="navbar-brand"><i class="fa fa-coffee"></i> <span class="hidden-xs">SRUPUT</span></a>
				</div>
				<div class="navbar-collapse" >
					<ul class="nav navbar-nav navbar-left">
						<li><a href="#"><i class="fa fa-bars"></i></a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right">

						<li><a href="#"><i class="fa fa-user"></i> <span class="hidden-xs">{{realname}}</span></a></li>

						<li><a href="/logout"><i class="fa fa-sign-out"></i></a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
    export default {
		props: ['realname'],
        data: function() {
            return {
				name: 'DashHead',

            }
		}
    }
</script>

<style>
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
		background: rgba(116, 200, 247, 0.6);

	}
</style>
