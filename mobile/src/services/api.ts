import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.16.233.189:3333",
});
