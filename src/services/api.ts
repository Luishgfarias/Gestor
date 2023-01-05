import axios from "axios";

export const Api = axios.create({
    baseURL: "http://localhost:8000/"
})
export const currency = axios.create({
    baseURL: 'https://www.alphavantage.co/'
})