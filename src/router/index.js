import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../view/NewsView.vue";
import AskView from "../view/AskView.vue";
import JobsView from "../view/JobsView.vue";
import UserView from "../view/UserView.vue";
import ItemView from "../view/ItemView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  // url 해쉬(#)값 제거 'mode history'
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    // 동적 세그먼트는 콜론으로 시작
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item",
      component: ItemView,
    },
  ],
});
