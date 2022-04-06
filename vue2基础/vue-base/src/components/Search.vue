<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="getUsers">Search</button>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    getUsers() {
      this.$bus.$emit("getUsers", {
        isFirst: false,
        loading: true,
        errMsg: "",
        users: [],
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.keyword}`)
        .then((response) => {
          // handle success
          console.log(response);
          this.$bus.$emit("getUsers", {
            loading: false,
            errMsg: "",
            users: response.data.items,
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
          this.$bus.$emit("getUsers", {
            loading: false,
            errMsg: error.message,
            users: [],
          });
        })
        .then(function () {
          // always executed
        });
    },
  },
};
</script>

<style scoped>
</style>