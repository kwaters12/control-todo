<template>
  <div class="todos">
    <button class="add-todo" v-on:click="toggleTodoForm()">
      <span v-if="this.showForm">Cancel</span>
      <span v-else>Add To-Do</span>
    </button>
    <transition name="fade">
      <todo-form v-bind:todos="todos" v-show="showForm" @hideForm="toggleTodoForm()"></todo-form>
    </transition>
    <div class="todos-lists">
      <div class="todos-left">
        <h2>To-Dos</h2>
        <todo-list v-bind:todos="todos" v-bind:todoCompleted="false"></todo-list>
      </div>
      <div class="todos-right">
        <h2>Completed</h2>
        <todo-list v-bind:todos="todos" v-bind:todoCompleted="true"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import auth from '../../auth'

const API_BASE = 'https://jsonplaceholder.typicode.com/'
const TODOS_ENDPOINT = API_BASE + 'todos'

export default {
  name: 'todos',
  data () {
    return {
      user: auth.user,
      todos: this.fetchTodos(auth.user),
      fetchedTodos: false,
      showForm: false
    }
  },
  methods: {
    toggleTodoForm: function () {
      this.showForm = !this.showForm
    },
    fetchTodos: function (user) {
      this.$http.get(TODOS_ENDPOINT + '?userId=' + user.id).then((response) => {
        if (response.body) {
          this.todos = response.body
          this.fetchedTodos = true
        } else {
          this.todos = []
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  updated: function () {
    this.user = auth.user
  },
  components: {
    TodoList,
    TodoForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  text-align: left;
}
.add-todo {
  float: right;
  margin-right: 100px;
}
.todos-lists {
  display: inline-block;
  padding: 0 100px;
}
.todos-left {
  width: 50%;
  float: left;
}
.todos-right {
  width: 50%;
  float: right;
}
.fade-enter-active, .fade-leave-active {
  transition: .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  top: -20px;
  margin-bottom: -30px;
}
</style>
