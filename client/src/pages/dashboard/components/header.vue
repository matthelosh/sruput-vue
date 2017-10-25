<template>
    <div>
		<nav class="navbar navbar-sruput">
			<div class="container-fluid">
				<div class="navbar-header">
					<button class="navbar-toggle">
						<i class="fa fa-bars"></i>
					</button>
					<a href="/" class="navbar-brand"><i class="fa fa-coffee"></i> SRUPUT</a>
				</div>
				<div class="navbar-collapse" >
					<ul class="nav navbar-nav navbar-right">
						<li class="active"><a href="/"><i class="fa fa-home"></i></a></li>
						<li><a href="#"><i class="fa fa-user"></i> <span>{{realname}}</span></a></li>
						<li><a href="#"><i class="fa fa-cogs"></i></a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	import axios from 'axios'
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
		background: #5689ff;
	}
	.navbar-sruput a{
		color: #efefef!important;
	}
	.nav > li >  a:hover {
		background: blue;
		
	}
</style>
