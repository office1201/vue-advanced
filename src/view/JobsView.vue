<template>
  <div>
    <ListItem></ListItem>
    <!-- <ul class="news-list">
      <li
        v-for="job in this.$store.state.jobs"
        v-bind:key="job.id"
        class="post"
      >
        <div class="points">
          {{ job.points || 0 }}
        </div>
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
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
};
</script>

<style>
</style>