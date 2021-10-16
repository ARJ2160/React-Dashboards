import axios from "axios";

const instance = axios.create({
    baseUrl: "https://localhost:5000"
})

export default instance;