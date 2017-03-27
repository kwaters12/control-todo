<template>
  <span v-on:click="checkTodo(todo)" >
    <input type="checkbox" v-bind:checked="todoCompleted" />
    {{ todo.title }}
  </span>
</template>

<script>

export default {
  name: 'todo',
  props: ['todo', 'todoCompleted', 'todos'],
  methods: {
    checkTodo: function (checkedTodo) {
      this.todos.filter((todo) => {
        if (todo.id === checkedTodo.id) {
          todo.completed = !this.todoCompleted
        }
      })
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
