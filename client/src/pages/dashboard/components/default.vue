<template lang="pug">
div
	.container-fluid
		.dash-box
			h1.text-center Selamat Datang! <br>
				small {{user}}

</template>

<script>
	export default {
		computed: {
			user(){
				return localStorage.getItem("realname")
			}
		}
	}
</script>

<style lang="sass" scoped>
	.dash-box
		min-height: 70vh;
</style>
