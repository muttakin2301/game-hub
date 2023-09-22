import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "54de5e6d8ce147da86233587b92b286b",
  },
});
