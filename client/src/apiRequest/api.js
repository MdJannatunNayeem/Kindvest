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
            console.log("api-img",result.data.file);
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

    async logout() {
        let result = await axios.get(`${baseURL}logout`, {
            withCredentials: true,
        });
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return true;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async userDetails() {
        //const  token = Cookies.get("token");
        // console.log(token);

        try{
            let result = await axios.get(`${baseURL}user-details`,{
                withCredentials: true});
            console.log(result);
            if (result.data.status === true) {
                return result.data;
            } else {
                return false;
            }
        }catch (error){
            console.log(error)
        }
    }

    async createDonation(reqBody) {
        console.log("reqBody:",reqBody);
        let result = await axios.post(`${baseURL}create-donation`, reqBody,{
            withCredentials: true,
        });
        console.log(result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return true;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async createEvent(reqBody) {
        console.log("reqBody:",reqBody);
        let result = await axios.post(`${baseURL}create-event`, reqBody,{
            withCredentials: true,
        });
        console.log(result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return true;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async findDonationList() {

        let result = await axios.get(`${baseURL}find-all-donations`,{
            withCredentials: true,
        });
        console.log(result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return result.data;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async OnGoingEventList() {

        let result = await axios.get(`${baseURL}on-going-events`,{
            withCredentials: true,
        });
        console.log(result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return result.data;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async UpdateOnGoingEvent(id,reqBody) {

        console.log("Sending PUT request to:", reqBody)
        let result = await axios.put(`${baseURL}${id}/update-event`,reqBody,{
            withCredentials: true,
        });
        console.log(result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return result.data;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async FindEventById(id) {

        let result = await axios.get(`${baseURL}${id}/event`,{
            withCredentials: true,
        });
        console.log(result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return result.data;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async ActivityList() {

        let result = await axios.get(`${baseURL}activity`,{
            withCredentials: true,
        });
        console.log(result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return result.data;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

}
export const { register , fileUpload , login,userDetails,logout,createDonation ,findDonationList,createEvent,
              OnGoingEventList,UpdateOnGoingEvent,FindEventById,ActivityList } = new ApiRequest();