<template>
  <div class="wrapper">
    <button @click="isShow = !isShow">toggle</button>
    <transition appear>
      <h1 v-show="isShow">hello world</h1>
    </transition>
  </div>
</template>
<script>
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

/* .come{
    animation: hello 1s linear;
}
.go{
    animation: hello 1s linear reverse;
} */

.v-enter-active {
  animation: hello 1s linear;
}
.v-leave-active {
  animation: hello 1s linear reverse;
}

@keyframes hello {
  from {
    transform: translateX(-300px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>