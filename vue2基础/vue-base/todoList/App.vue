<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <my-header :addTodo="addTodo" />
        <list :todos="todos" :todoCheck="todoCheck" :removeTodo="removeTodo" />
        <my-footer :todos="todos" :handleAll="handleAll" :clearDone="clearDone" />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import List from "./components/List";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: {
    MyHeader,
    List,
    MyFooter,
  },
  data() {
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || [],
    };
  },
  watch:{
    todos:{
      deep:true,
     handler(val) {
       console.log(val)
        localStorage.setItem('todos',JSON.stringify(val))
      }
    }
  },
  methods: {
    addTodo(obj){
      this.todos.unshift(obj)
    },
    todoCheck(id){
      this.todos.forEach(item=>{
        if(id===item.id){
          item.done=!item.done
        }
      })
    },
    removeTodo(id){
      this.todos=this.todos.filter((item)=>item.id!==id)
    },
    handleAll(value){
      this.todos.forEach(todo=>todo.done=value)
    },
    clearDone(){
      this.todos=this.todos.filter((todo)=>!todo.done)
    }
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
/*base*/
body {
  background: #fff;
}

.btn {
  /* display: inline-block; */
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>
