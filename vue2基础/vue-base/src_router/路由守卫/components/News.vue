<template>
  <div>
    <ul>
      <li :style="{opacity}">hello vue</li>
      <li>news001 <input type="text" v-model="newsValue"></li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "News",
  data() {
    return {
      opacity:1,
       newsValue:''
    }
  },
  // mounted(){ 
  //   setInterval(()=>{
  //     // console.log(1)
  //     this.opacity-=0.01
  //     if(this.opacity<=0) this.opacity=1
  //   },16)
  // },
  activated(){
     this.interval=setInterval(()=>{
      // console.log(1)
      this.opacity-=0.01
      if(this.opacity<=0) this.opacity=1
    },16)
    console.log('激活')
  },
  deactivated(){
    clearInterval(this.interval)
    console.log('shi活')
  }
 
};
</script>