import axios from "axios";
const baseUrl = "http://localhost:3001/";

function apiRequest(method, url, data) {
  return axios({
    method,
    url: baseUrl + url,
    data,
  });
}

export function get(url) {
  return apiRequest("get", url);
}

export function post(url, data) {
  return apiRequest("post", url, data);
}

export function put(url, data) {
  return apiRequest("put", url, data);
}

export function del(url) {
  return apiRequest("delete", url);
}
