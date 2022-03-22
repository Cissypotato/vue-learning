<template>
  <div class="todo-footer" v-show="todos.length>0">
    <label>
      <input type="checkbox" v-model="total" />
    </label>
    <span>
      <span>已完成{{ todoDone }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clear1">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  props: ["todos", "handleAll",'clearDone'],
  computed: {
    total: {
      get() {
        return this.todoDone === this.todos.length && this.todos.length > 0;
      },
      set(value) {
        this.handleAll(value);
      },
    },
    todoDone() {
      return this.todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0);
    },
   
  },
  methods: {
     clear1(){
      this.clearDone()
    }
  },
};
</script>
<style >
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>