<template>
  <div class="login">
    <h1>LOGIN TO VIEW OR ADD TO-DOS</h1>
    <login-form></login-form>
  </div>
</template>

<script>
import auth from '../../auth'
import router from '../../router'
import LoginForm from './LoginForm.vue'

export default {
  name: 'hello',
  data () {
    return {
      user: auth.user
    }
  },
  updated: function () {
    this.user = auth.user
  },
  created: function () {
    if (this.user.name) {
      router.push('todos')
    }
  },
  components: {
    LoginForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  padding-top: 100px;
  text-align: center;
}
.login h1 {
  margin-bottom: 50px;
  display: block;
}

</style>
