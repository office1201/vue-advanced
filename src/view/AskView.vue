<template>
  <div>
    <ListItem></ListItem>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" v-bind:key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.id}`" class="link-text">
              {{ item.title }}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index.js";
// import { mapState } from "vuex";
// import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  //   // data() {
  //   //   return {
  //   //     ask: [],
  //   //   };
  //   // },
  //   computed: mapGetters(["fetchedAsk"]),
  //   // #1
  //   // computed:
  //   // mapState({
  //   // ask: (state) => state.ask,
  //   // }),
  //   created() {
  //     this.$store.dispatch("FETCH_ASK");
  //     // fetchAskList()
  //     //   .then((response) => (this.ask = response.data))
  //     //   .catch((error) => console.log(error));
  //   },
};
</script>

<style>
</style>