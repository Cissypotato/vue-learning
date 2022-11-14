<template>
  <div class="wrapper">
    <button @click="isShow = !isShow">toggle</button>
    <!-- <transition appear name="hello">
      <h1 v-show="isShow">hello Rose</h1>
    </transition> -->
     <transition-group appear name="hello">
      <h1 v-show="isShow" :key="1">hello Rose</h1>
      <h1 v-show="isShow" :key="2">hello Jack</h1>
     </transition-group>
  </div>
</template>
<script>
export default {
  name: "test1",
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
  /* transition: all 1s linear; */
}

.hello-enter-active,.hello-leave-active{
  transition: 1s linear;
}

/**进入的起点*/ /**离开的终点*/
.hello-enter,.hello-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
/**进入的终点*/ /**离开的起点*/
.hello-enter-to,.hello-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>