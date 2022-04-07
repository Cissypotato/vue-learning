<template>
 
    <div class="container">
    <card title="具名插槽">
     <div slot="slot1"> hello slot1</div><!--可以用 slot="slot1"在标签上-->
     <template v-slot:slot2><!--template标签可以用上面的方式，也可以用v-slot:slot2指令（一般标签不能用这个指令）-->
        <p> hello slot2</p>
        <p> hello world</p>
     </template>
    
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
