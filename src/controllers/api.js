import axios from "axios";
import { toast } from "react-toastify";


const BASE_URL="http://3.111.128.67/assignment/chat?page=";

export const fetchChats=async(pageNumber)=>{
    try{
        const data=await axios.get(BASE_URL+pageNumber);
        // console.log("SSSS",data);
        toast("Chat Fetched Successfully");
        return data;
    }catch(e){
        // console.log(e.response.data.ok);
        toast.error(e.response.data.error);
        return false;
    }
}