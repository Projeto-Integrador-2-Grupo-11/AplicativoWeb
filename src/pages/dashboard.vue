<template>
  <button @click="logout">Logout</button>
</template>
<script>
  export default {
    methods: {
      logout(e) {
        e.preventDefault();
        this.$store.dispatch('modules/user/logOut', this.model);
      }
    }
  }
</script>