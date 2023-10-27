import axios from "axios";

export const api = axios.create({
    baseURL : "https://api-deep-tech.vercel.app/"
});