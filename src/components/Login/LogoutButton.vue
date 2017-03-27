<template>
  <button v-on:click="logoutUser()">
    Logout
  </button>

</template>

<script>
import auth from '../../auth'

export default {
  name: 'logout-button',
  methods: {
    logoutUser: function () {
      auth.logout(this, '/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
