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

    async updateProfile(reqBody) {


        try{
            let result = await axios.post(`${baseURL}update-profile`,reqBody,{
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

        let result = await axios.get(`${baseURL}activity`);
        console.log(result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return result.data;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async DonorDonationList() {

        let result = await axios.get(`${baseURL}donorId/donation`,{
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

    async donateNow(id,reqBody) {
        console.log("reqBody:",reqBody,"id",id);
        let result = await axios.post(`${baseURL}${id}/donate`, reqBody,{
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

    async ManageDonationList() {

        let result = await axios.get(`${baseURL}admin/mannage-donation`,{
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

    async volunteersList(){

        let result = await axios.get(`${baseURL}volunteers`,{
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

    async UpdateManageDonation(id,reqBody) {

        console.log("Sending PUT request to:", reqBody)
        let result = await axios.post(`${baseURL}${id}/update-manage-donation`,reqBody,{
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

    async VolunteerNewDonationList() {

        let result = await axios.get(`${baseURL}volunteer/donation`,{
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

    async UpdateNewVolDonation(id,status) {

        console.log("Sending PUT request to:", status)
        let result = await axios.post(`${baseURL}${id}/update-volunteer-remark/${status}`);
        console.log("result return",result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return result.data;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async DonationDetails(id) {

        console.log("Sending PUT request to:",` ${baseURL}donation-details/${id}`);
        let result = await axios.get(`${baseURL}donation-details/${id}`,{
            withCredentials: true,
        });
        console.log("result return",result);
        if (result.data.status === true) {
            SuccessToast(result.data.msg);
            return result.data;
        } else {
            ErrorToast(result.data.msg);
            return false;
        }
    }

    async DashboardInformation() {
        let result = await axios.get(`${baseURL}numbers-of-roles`);
        console.log("result return",result);
        if (result.data.status === true) {
            return result.data;
        } else {
            return false;
        }
    }



}
export const { register ,updateProfile, fileUpload , login,userDetails,logout,createDonation ,findDonationList,createEvent,
              OnGoingEventList,UpdateOnGoingEvent,FindEventById,ActivityList ,DonorDonationList,donateNow,
              ManageDonationList,volunteersList,UpdateManageDonation,VolunteerNewDonationList,UpdateNewVolDonation,
    DonationDetails,DashboardInformation} = new ApiRequest();