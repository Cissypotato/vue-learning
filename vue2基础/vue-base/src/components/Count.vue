<template>
  <div>
    <h1>当前和为{{ sum }}</h1>
    <div>
      <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
      <button @click="increaseOdd">当前和为单数才加</button>
      <button @click="increaseWait">等一等再加</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Count",

  data() {
    return {
      sum: 0,
      num: 1,
    };
  },
  methods:{
    increase(){
      this.sum+=this.num
    },
    decrease(){
      this.sum-=this.num
    },
    increaseOdd(){
      if(this.sum%2){
         this.sum+=this.num
      }
     
    },
    increaseWait(){
      setTimeout(()=>{
         this.sum+=this.num
      },1000)
     
    },
  }
};
</script>
<style scoped>
button{
  margin-left: 4px;
}
</style>