<template>
<h1>user view</h1>
<div v-if="!user">No users found in this category</div>
<div v-for="user in user" :key="user.firstname">dar vienas</div>

</template>

<script>
export default {
	computed: {
		user () {
            alert(this.$route.params.id)
			return this.$store.state.users.find(user => user.subsubcat == this.$route.params.id)
		}
	}
}
</script>