<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <div><button @click="forwardRoute">forward</button><button @click="backRoute">back</button><button @click="goRoute">go</button></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- <h2>我是Home的内容</h2> -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

    <div>
      <home class="f-title"/>
    </div>
  </div>

  
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: "App",

  components: {Home},
  methods:{
    forwardRoute(){
      this.$router.forward()
    },
    backRoute(){
      this.$router.back()
    },
    goRoute(){
      this.$router.go(-2)//当前历史记录后退两步
      // this.$router.go(3)//当前历史记录前进三步
    }
    
  }
};
</script>

<style scoped>
.f-title >>> .title{
  color: aqua;
}
</style>
