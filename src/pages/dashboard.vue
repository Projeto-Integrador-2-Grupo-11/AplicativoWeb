<template>
  <button @click="logout">Logout</button>
</template>
<script>
  export default {
    layout: 'DashboardLayout',
    methods: {
      logout(e) {
        e.preventDefault();
        this.$store.dispatch('modules/user/logOut', this.model);
      }
    }
  }
</script>