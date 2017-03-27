<template>
  <div class='todo-form'>
    <h2>Add To-Do</h2>
    <form>
      <div class="alert alert-danger" v-if="error">
         <p>{{ error }}</p>
       </div>
      <input v-on:keydown="handleChange()" type="text" v-model="text" />
      <button v-on:click="closeForm()">Cancel</button>
      <button v-on:click="createTodo()">Create</button>
    </form>
  </div>
</template>

<script>
import auth from '../../auth'

export default {
  name: 'todo-form',
  props: ['todos', 'showForm'],
  data () {
    return {
      text: '',
      error: ''
    }
  },
  methods: {
    closeForm: function () {
      this.text = ''
      this.error = ''
      this.$emit('hideForm', true)
    },
    createTodo: function () {
      if (this.text.length) {
        this.$http.post('https://jsonplaceholder.typicode.com/todos', {
          title: this.text,
          completed: false,
          userId: auth.user.id,
          id: Math.floor((Math.random() * 10000) + 1)
        }).then((response) => {
          this.todos.push(response.body)
          this.text = ''
        })
      } else {
        this.error = 'To-Dos Need Text'
      }
    },
    handleChange: function (event) {
      this.error = ''
    }
  }
}
</script>

<style>
.todo-form {
  text-align: center;
  background: rgba(255,255,255,0.3);
  border: 1px solid white;
  display: block;
  margin: 0 auto;
  position: relative;
  padding: 10px;
  width: 250px;
  position: relative;
  top: 30px;
  margin-bottom: 30px;
}
.todo-form h2 {
  text-align: left;
  position: relative;
  margin-top: -40px;
  left: -30px;
  font-size: 1.4em;
}
</style>
