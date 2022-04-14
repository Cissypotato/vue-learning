<template>
  <div>
    <ul>
      <li v-for="msg in msgList" :key="msg.id">
        <!-- 跳转路由携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.name}`"
          >{{ msg.name }}&nbsp;&nbsp;</router-link
        > -->

        <!-- 跳转路由携带parmas参数，to的对象写法。注意：必须用name，不能用path -->
      
        <router-link
          :to="{
            name:'msgDetail',
            params: {
              id: msg.id,
              name: msg.name,
            },
          }"
          >{{ msg.name }}&nbsp;&nbsp;</router-link
        > 
        
      </li>

      <hr />
      <router-view></router-view>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      msgList: [
        {
          id: "001",
          name: "message001",
        },
        {
          id: "002",
          name: "message002",
        },
        {
          id: "003",
          name: "message003",
        },
      ],
    };
  },
};
</script>