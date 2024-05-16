import axios from "axios";

export const apiProducts = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const apiUser = axios.create({
  baseURL: "https://motion.propulsion-home.ch/backend/api",
});
