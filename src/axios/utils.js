import axios from "axios";

const customSetup = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
  headers: { Accept: "Application/json" },
});

export default customSetup;
