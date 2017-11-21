<template lang="pug">
div
	.card
		h1 User Profile : {{ realname }}

</template>

<script>
	export default {
		data: function(){
			return {
				name: 'UserProfile'
			}

		},
		props: ['realname']
	}
</script>