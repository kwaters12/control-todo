<template>
  <form>
    <div class="alert alert-danger" v-if="error">
       <p>{{ error }}</p>
     </div>
    <label>Username</label>
    <input
      v-model="username"
      />
    <button v-on:click="loginUser(username)">
      Login
    </button>
  </form>
</template>

<script>
import auth from '../../auth'

export default {
  name: 'login-form',
  data () {
    return {
      username: '',
      error: ''
    }
  },
  methods: {
    loginUser: function (username) {
      auth.login(this, username, 'todos')
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
