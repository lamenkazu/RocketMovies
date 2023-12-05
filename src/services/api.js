import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovienotes.onrender.com",
});
