<template>

 <div class="container" style="margin-top:92px; margin-left:50px; padding: 55px; margin-bottom: 60px;  width: -webkit-fill-available">
    <div class="d-flex" style="justify-content:space-between; margin-bottom:10px;">
    <h1>Update Ticket ID {{List.id}} </h1>
     
          <img :src="List.avatar" class="avatar avatar-sm me-3" />
        </div>
        <form class="row g-3"> 
    <!-- <div class="input-group mb-3">
    <input type="file" class="form-control" id="inputGroupFile02">
    <label class="input-group-text" for="inputGroupFile02">Upload</label>
    </div> -->
    <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Requester Id</label>
    <input type="number" class="form-control"  v-model="List.id">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Requester Email</label>
    <input type="email" class="form-control" v-model="List.email" >
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Requester Name</label>
    <input type="text" class="form-control" v-model="List.name">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Subject</label>
    <input type="text" class="form-control" v-model="List.subject">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Assignee Name</label>
    <input type="text" class="form-control" v-model="List.assignee">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Status</label>
    <input type="text" class="form-control" v-model="List.status">
  </div>
 <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Last Update</label>
    <input type="text" class="form-control"  v-model="List.time">
  </div>
  <div class="col-12">
    <button type="button" class="btn btn-primary" v-on:click="updateTicket">Update Ticket</button>
  </div>
</form>
   
    
</div>
 <router-link to="/list">   
        <button class="btn btn-primary mt-4" style="margin-left:50px;">Back to List</button>
    </router-link>
</template>
    
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import apiCall from '../Common/Services/apiCall'
export default{
    name:'Update',
    components:{

    },
    data(){
        return{
            List:{
                id:'',
                name:'',
                email:'',
                subject:'',
                assignee:'',
                status:'',
                time:'',
                avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XoGpSkgybe5fubd2XlhO_zNXDF9CjbTrEw&usqp=CAU'
            }
        }
    },
    methods:{

      async getDetails() {
      const info = await apiCall.getData() 
      //testing api call
      console.log(info.data)
      this.list = info.data
      },
    
      async updateTicket(){
        
        // console.log("Update is running",this.List);
        const result = await axios.put("http://localhost:3000/users/" + this.$route.params.id,{
            id:this.List.id,
            name:this.List.name,
            email:this.List.email,
            subject:this.List.subject,
            assignee:this.List.assignee,
            status:this.List.status,
            time:this.List.time,
            avatar:this.List.avatar
        });
        if(result.status == 200){
          Swal.fire({
          icon: 'success',
          title: 'Ticket Updated',
          showConfirmButton: false,
          timer: 1500
        },
         this.$router.push('/list')
        ) 
           
        }else{
          //to create popup notification
        Swal.fire({
        icon: 'Fail',
        title: 'Failed to Update Ticket ',
        showConfirmButton: false,
        timer: 1500
        }) 
        }
        console.log("Checking data",result);
        
      }

    },
    async mounted(){
         
        let result = await axios.get("http://localhost:3000/users/" + this.$route.params.id);
        console.log(result.data);
         //we are getting the id from the url declared in the route "/update/:id"
        console.log(this.$route.params.id);
        this.List = result.data;
 },
 updated(){
   this.getDetails();
 }
}
</script>
<style>

.container {
  border-radius: 10px;
  
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-right: 6px;
  margin-left: 4px;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>