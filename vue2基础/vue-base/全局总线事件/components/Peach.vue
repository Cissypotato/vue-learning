
<template>
  <div>
    <h1>I am Peach</h1>
    <div>receive data:{{fromApple}}</div>
  </div>
</template>

<script>
export default {
  name: "Peach",
  data() {
    return {
        fromApple:undefined
    };
  },
  mounted() {
    this.$bus.$on("receive", (data) => {
      console.log("I am Peach", data);
      this.fromApple=data
    });
  },
  methods: {
  },
};
</script>