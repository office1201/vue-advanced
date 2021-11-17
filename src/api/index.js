import axios from "axios";

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. 공통 함수들. 이하 API 함수들을 정리
function fetchNewsList() {
  // new Promise() 기반으로서 다음을 반환
  //   return axios.get(config.baseUrl + "news/1.json");
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo };
