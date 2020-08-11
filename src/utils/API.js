import axios from "axios";
import config from '../config';

export default axios.create({
  baseURL: `${config.base_url}`,
  responseType: "json",
  headers: {
    "Content-type": "application/json"
  }
});