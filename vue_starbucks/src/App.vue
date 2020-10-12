<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {};
  },
  created() {},
  methods: {
    getMockData() {
      // 发送ajax 请求
      axios
        .get("/api/get/news")
        .then((response) => {
          // 得到返回结果数据
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .post("/api/post/news")
        .then((response) => {
          // 得到返回结果数据
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
