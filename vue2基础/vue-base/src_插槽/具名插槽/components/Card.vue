<template>
  <div class="slot-wrapper">
    <h1>{{ title }}</h1>
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["title"],
};
</script>
<style scoped>
.slot-wrapper {
  width: 400px;
  height: 500px;
  border: 1px solid #ddd;
}
</style>