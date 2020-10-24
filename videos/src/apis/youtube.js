import axios from "axios";

const KEY = "AIzaSyAdWkgk8000oSw4kRk0P5N9IFR3QJtNdrw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    snippet: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
