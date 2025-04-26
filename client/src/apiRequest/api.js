import axios from "axios";


let baseURL="http://localhost:5050/api/"
class ApiRequest {
    async register(reqBody){
        await axios.post(`${baseURL}register`,reqBody);
        return true;
    }
}
export const { register } = new ApiRequest();