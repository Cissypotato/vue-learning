<template>
 
    <div class="wrapper">
      <count/>
    </div>
 
</template>

<script>

import Count from './components/Count.vue';


export default {
  name: "App",
  
  components: {
   
    Count
    
  },
};
</script>

<style scoped>
  .wrapper{
    margin-left: 50px;
  }
</style>
