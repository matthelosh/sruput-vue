<template lang="pug">
div
	h1 Selamat Datang Tuan / Nyonya!.. <br><small>{{user}}</small>
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

</style>
