import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-8ddd7.cloudfunctions.net/api",
});

export default instance;
