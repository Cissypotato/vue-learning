<template>
  <div class="container">
    <card :title="'作用域插槽'">
      <template scope="{fruits}"
        ><!--只能用template标签 ，scope用来接收组件的数据，是个对象，可以用解构赋值的方式取值-->
        <ul>
          <li v-for="(item, index) in fruits" :key="index">{{ item }}</li>
        </ul>
      </template>
    </card>
    <card :title="'作用域插槽'">
      <template slot-scope="{ fruits }"
        ><!--建议用slot-scope指令取值，because the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5.-->
        <ol>
          <li v-for="(item, index) in fruits" :key="index">{{ item }}</li>
        </ol>
      </template>
    </card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",

  components: {
    Card,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
