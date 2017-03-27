import router from '../router'

// API ENDPOINTS
const API_BASE = 'https://jsonplaceholder.typicode.com/'
const USER_ENDPOINT = API_BASE + 'users'
const TODOS_ENDPOINT = API_BASE + 'todos'

export default {
  // User object
  user: {
    authenticated: false
  },

  // Request for the user to login if their username exists
  login (context, username, redirect) {
    context.$http.get(USER_ENDPOINT + '?username=' + username).then((response) => {
      let user = response.body[0]
      if (response.body[0]) {
        this.user = user
        this.user.authenticated = true

        localStorage.setItem('user', JSON.stringify(user))
        if (redirect) {
          router.push(redirect)
        }
      } else {
        context.error = 'Invalid Username'
      }
    })
    .catch(function (error) {
      console.log(error)
      this.user.authenticated = false
      context.error = 'Please Try Again'
    })
  },

  logout (context, redirect) {
    this.user = {}
    localStorage.removeItem('user')
    router.push(redirect)
  },

  checkAuth () {
    let user = localStorage.getItem('user')

    if (user) {
      this.user = JSON.parse(user)
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }

    router.push('todos')
  },

  fetchTodos (userId) {
    this.$http.get(TODOS_ENDPOINT + '?userId=' + userId).then((response) => {
      console.log(response.body)
      if (response.body) {
        this.user.todos = response.body
      } else {
        this.user.todos = []
      }
    })
  }
}
