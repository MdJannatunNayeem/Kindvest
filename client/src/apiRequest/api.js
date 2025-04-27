import axios from "axios";
import {ErrorToast, SuccessToast} from "../Helper/helper.js";


let baseURL="http://localhost:5050/api/"
class ApiRequest {

    async register(reqBody){
        console.log("register request",reqBody);
        let res=await axios.post(`${baseURL}register`,reqBody);
        return res.data;
    }

    async fileUpload (reqBody) {

        let result = await axios.post(`${baseURL}file-upload`, reqBody);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            console.log(result.data.file);
            return result;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }


    async login(reqBody) {
        console.log("reqBody:",reqBody);
        let result = await axios.post(`${baseURL}login`, reqBody,{
            withCredentials: true,
        });
        console.log(result);
        if (result.data.status === "success") {
            SuccessToast(result.data.msg);
            return true;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

}
export const { register , fileUpload , login} = new ApiRequest();