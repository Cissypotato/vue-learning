<template>
  <div class="wrapper">
    <button @click="isShow = !isShow">toggle</button>
    <transition 
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__jello"
    leave-active-class="animate__bounceOutDown"
     >
      <h1 v-show="isShow">hello cissy</h1>
    </transition>
  </div>
</template>
<script>
import 'animate.css';
export default {
  name: "test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
.wrapper {
  width: 300px;
}
.wrapper h1 {
  background: pink;
}


</style>