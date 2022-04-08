<template>
 
    <div class="container">
    <card :title="'默认插槽'">
     <div> hello slot</div><!--内容要包在标签里面-->
     <div> hello world</div><!--可以有多个标签-->
    </card>
    </div>
 
</template>

<script>
import Card from './components/Card.vue';


export default {
  name: "App",
  components: {
    Card
    
  },
};
</script>

<style>
</style>
