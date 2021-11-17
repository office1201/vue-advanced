<template>
  <div>
    <!-- <div v-for="item in fetchedAsk" v-bind:key="item.id">
      {{ item.title }}
    </div> -->
    <p v-for="item in fetchedAsk" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index.js";
// import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  // data() {
  //   return {
  //     ask: [],
  //   };
  // },
  computed: mapGetters(["fetchedAsk"]),
  // #1
  // computed:
  // mapState({
  // ask: (state) => state.ask,
  // }),
  created() {
    this.$store.dispatch("FETCH_ASK");
    // fetchAskList()
    //   .then((response) => (this.ask = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>