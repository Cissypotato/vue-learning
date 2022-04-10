<template>
  <div>
    <h1>当前和为{{ $store.state.countAbout.sum }}</h1>
    <p>当前和的10倍为{{ bigSum }}</p>
    <!-- <p>111</p> -->
    <p>
      cc's favorite fruit is {{ fruit }} and favorite vegetable is
      {{ vegetable }}
    </p>
    <p>person 组件的总人数为{{ personList.length }}</p>
    <div>
      <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increase(num)">+</button>
      <button @click="decrease(num)">-</button>
      <button @click="addOdd(num)">当前和为单数才加</button>
      <button @click="addWait(num)">等一等再加</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",

  data() {
    return {
      num: 1,
    };
  },
  computed: {
    //mapState 对象写法
    // ...mapState({fruit:'fruit',vegetable:'vegetable'})
    //数组写法
    ...mapState("countAbout", ["fruit", "vegetable"]),
    ...mapState("personAbout", ["personList"]),
    ...mapGetters("countAbout", ["bigSum"]),
  },
  mounted() {
    console.log(this.$store,'vuex')
  },

  methods: {
    // increase(){
    //   this.$store.commit('ADD',this.num)
    // },
    // decrease(){
    //   this.$store.commit('SUBTRACT',this.num)
    // },
    ...mapMutations("countAbout",{ increase: "ADD", decrease: "SUBTRACT" }),

    // increaseOdd(){
    //  this.$store.dispatch('addOdd',this.num)
    // },
    // increaseWait(){
    //    this.$store.dispatch('addWait',this.num)
    // },
    ...mapActions("countAbout",["addOdd", "addWait"]),
  },
};
</script>
<style scoped>
button {
  margin-left: 4px;
}
</style>