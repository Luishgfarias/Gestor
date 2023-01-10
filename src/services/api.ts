import axios from "axios";

export const Api = axios.create({
    baseURL: "https://gestor-back-ten.vercel.app/"
})
export const currency = axios.create({
    baseURL: 'https://www.alphavantage.co/'
})