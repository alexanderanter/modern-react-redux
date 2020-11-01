import axios from "axios";
// const KEY = "AIzaSyAdWkgk8000oSw4kRk0P5N9IFR3QJtNdrw";

const KEY = "AIzaSyD03QBYCOYhU20442sEXyu8ENstOHYOiFQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
