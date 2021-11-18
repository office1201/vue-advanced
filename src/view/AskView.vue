<template>
  <div>
    <!-- <div v-for="item in fetchedAsk" v-bind:key="item.id">
      {{ item.title }}
    </div> -->
    <ul class="news-list">
      <li v-for="item in fetchedAsk" v-bind:key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 영역 -->
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
    </ul>
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

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #cacaca;
}
</style>