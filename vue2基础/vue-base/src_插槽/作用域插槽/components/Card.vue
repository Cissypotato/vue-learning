<template>
  <div class="slot-wrapper">
    <h1>{{ title }}</h1>
    <slot :fruits="list"></slot>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["title"],
  data() {
    return {
      list: ["durian", "mangosteem", "mango"],
    };
  },
};
</script>
<style scoped>
.slot-wrapper {
  width: 400px;
  height: 500px;
  border: 1px solid #ddd;
}
</style>