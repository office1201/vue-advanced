import { fetchJobsList, fetchNewsList, fetchAskList, fetchUserInfo } from "../api/index.js";

export default {
  // (클릭) 🛠Rectoring 이전 (ES6+, 구조 분해 문법(Destructuring) 적용 이전)
  // FETCH_JOBS(context) {
  //   fetchJobsList()
  //     .then((response) => {
  //       context.commit("SET_JOBS", response.data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => console.log(error));
  },
};
