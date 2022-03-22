<template>
  <ul class="todo-main">
    <list-item
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      :todoCheck="todoCheck"
      :removeTodo="removeTodo"
    />
  </ul>
</template>
<script>
import ListItem from "./ListItem.vue";
export default {
  name: "List",
  props: ["todos", "todoCheck","removeTodo"],
  components: {
    ListItem,
  },
};
</script>
<style >
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>