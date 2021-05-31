import axios from "axios";

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = '4e6c7bd72d425e77286a765920a25f16'

const api = axios.create({
  baseURL: "http://gateway.marvel.com",
});

export default api;
