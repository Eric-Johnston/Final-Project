import axios from "axios";

export default {
  // Saves a book to the database
  getUser: function(userData) {
    return axios.get("/api/login", userData);
  },
  saveUser: function(userData) {
    return axios.post("/api/signup", userData)
  }
};
