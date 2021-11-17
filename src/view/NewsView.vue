<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news" v-bind:key="user.id">
      {{ user.title }}
    </div> -->
    <p v-for="item in this.$store.state.news" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">
          {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import { fetchNewsList } from "../api/index.js";

export default {
  // data() {
  //   return {
  //     users: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_NEWS");
    // fetchNewsList()
    //   .then((response) => (this.users = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>