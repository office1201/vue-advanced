<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs" v-bind:key="job.id">
      {{ job.title }}
    </div> -->
    <ul class="news-list">
      <li
        v-for="job in this.$store.state.jobs"
        v-bind:key="job.id"
        class="post"
      >
        <!-- 포인트 영역 -->
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <!-- 기타 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a v-bind:href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index.js";

export default {
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_JOBS");
    //   fetchJobsList()
    //     .then((response) => (this.jobs = response.data))
    //     .catch((error) => console.log(error));
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