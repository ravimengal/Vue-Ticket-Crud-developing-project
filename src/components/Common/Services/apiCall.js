import axios from "axios";

//single axios instance for entire app

const apiCall = axios.create({
        //baseURL to call all use
        baseURL:'http://localhost:3000',
        withCredentials : false,      //for authentication and configuration
        headers:{
            Accept:'application/json',
            'content-type':'application/json'
        }

})
export default{
    //get all users
    getData(){
        return apiCall.get('/users')
    }
    ,
   //delete api call
   deleteData(id){
       return apiCall.delete(`/users/` + id)
   },
   //update api call
    updateData(id,data){
        return apiCall.put(`/users/` + id,data)
    }
}