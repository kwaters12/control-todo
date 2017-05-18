<template>
  <div id="app">
    <header>
      <h2>Testing Jenkins</h2>
      <img src="./assets/logo.svg">
      <h1>Control Your Todos</h1>
      <span class="greeting" v-show="user.name">
        Hello, {{ user.name }}
        <logout-button></logout-button>
      </span>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import auth from './auth'
import router from './router'
import LogoutButton from './components/Login/LogoutButton.vue'

export default {
  name: 'app',
  data () {
    return {
      user: auth.user
    }
  },
  components: {
    LogoutButton
  },
  created: function () {
    if (!auth.user.name) {
      router.push('/')
    }
  },
  updated: function () {
    this.user = auth.user
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #15445E;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin-top: 20px;
}

header h1 {
  display: inline;
  position: relative;
  top: -15px;
  margin-left: 20px;
  font-size: 1.5em;
}
label {
  font-weight: bold;
}
button {
  background: rgba(255,255,255,0.5);
  border: none;
  color: #15445E;
}
button:hover {
  background: white;
}
button:focus {
  outline: none;
}
header {
  padding: 0 100px;
}
.greeting {
  float: right;
  padding-top: 10px;
}
</style>
