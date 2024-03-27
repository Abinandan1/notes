import axios from "axios";
const url = "https://notes-server-r5y5.onrender.com/api/v1";
export const customFetch = axios.create({
  baseURL: url,
});
