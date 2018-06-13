import axios from "axios";

const todoAPI = axios.create({
  // React에서 환경변수 설정할 때는 평소와 다르게 REACT_APP_이라는 수식어를 붙여줘야 한다.
  baseURL: process.env.REACT_APP_API_URL
});

todoAPI.interceptors.request.use(config => {
  if (localStorage.getItem("token")) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    // config는 { baseURL: process.env.REACT_APP_API_URL }
  }
  return config;
});

export default todoAPI;
