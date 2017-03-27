<template>
  <ul>
    <li v-for="todo in todos" v-if="todo.completed === todoCompleted">
      <todo v-bind:todo="todo" v-bind:todos="todos" v-bind:todoCompleted="todoCompleted"></todo>
    </li>
  </ul>
</template>

<script>
import Todo from './Todo'

export default {
  name: 'todo-list',
  props: ['todos', 'todoCompleted'],
  components: {
    Todo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0 0 0 20px;
}

li {
  text-align: left;
  display: block;
  margin: 0 10px;
}

</style>
