<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <div>
          <h2 class="title">Home组件内容</h2>
          <div>
            <ul class="nav nav-tabs">
              <li>
                <router-link
                  class="list-group-item"
                  active-class="active"
                  to="/home/news"
                  >News</router-link
                >
              </li>
              <li>
                <router-link
                  class="list-group-item"
                  active-class="active"
                  to="/home/message"
                  >Message</router-link
                >
              </li>
            </ul>
            <keep-alive include="News">
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
    <Grid></Grid>
  </div>
</template>
<script>
import Grid from "./Grid.vue";
export default {
  name: "Home",
  components: {
    Grid,
  },
};
</script>

<style scoped>
.title {
  border: 1px solid red;
}
</style>
