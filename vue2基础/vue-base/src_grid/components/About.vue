<template>
  <div>about</div>
</template>
<script>
export default {
  name: "About",
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("user") === "LittleChen") {
      next();
    } else {
      alert("只有小陈才可以访问");
    }
  },
  beforeRouteLeave(to, from, next) {
    // ...
    next();
  },
};
</script>