<template>
 
    <div class="wrapper">
      <count/>
      <hr>
      <person/>
    </div>
 
</template>

<script>

import Count from './components/Count.vue';
import Person from './components/Person.vue';


export default {
  name: "App",
  
  components: {
   
    Count,
    Person
    
  },
};
</script>

<style scoped>
  .wrapper{
    margin-left: 50px;
  }
</style>
