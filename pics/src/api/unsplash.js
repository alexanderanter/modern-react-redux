import axios from "axios";

//create method creates an instance of axios client with some default properties
//allows us to create an customized copy of it
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MSiz2TTBQvP9bit6sPIO2GSHkgZ7X_vAk1f-nHc2Ru8",
  },
});
