import axios from "axios";

//api key 
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "0bad69f109474b50b66449d8bf5080b0"
    }
})
