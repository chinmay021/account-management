import axios from "axios";

const instance = axios.create({
  baseURL: "https://account-management-for-college.herokuapp.com",
});

export default instance;
