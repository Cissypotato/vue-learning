<template>
  <li>
    <label>
      <input type="checkbox" :checked='todo.done' @change="handleCheck(todo.id)" />
      <span v-show="!todo.isEdit">{{todo.name}}</span>
      <input type="text" :value="todo.name" v-show="todo.isEdit" @blur="handleEdit">
    </label>
    <button class="btn btn-danger"  @click="remove(todo.id)">删除</button>
    <button class="btn btn-edit"  @click="editItem(todo.id)">编辑</button>
  </li>
</template>
<script>
export default {
  name: "ListItem",
  props:['todo'],
  methods: {
      handleCheck(e){
        //   console.log(e)
          // this.todoCheck(e)
          this.$bus.$emit('todoCheck',e)
      },
      remove(id){
          // this.removeTodo(id)
          this.$bus.$emit('removeTodo',id)
      },
      editItem(){
        console.log(this.todo)
        this.$set(this.todo,'isEdit',true)
      },
      handleEdit(){
        console.log(this.todo)
        this.todo.isEdit=false
        
      }
  },
};
</script>
<style >
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
    background: #ddd;
}
li:hover button{
    display: block;
}
</style>