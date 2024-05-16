import axios from "axios";

export const api = axios.create({
    baseURL: 'https://motion.propulsion-home.ch/backend/api',
});