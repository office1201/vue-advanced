<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      users: [],
    };
  },
  created: function () {
    // new Promise() 기반으로서 다음을 반환
    let vm = this;
    axios
      .get("https://api.hnpwa.com/v0/news/1.json")
      .then(function (response) {
        vm.users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
</style>