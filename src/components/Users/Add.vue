<template>
<div class="container" style="margin-top:92px; margin-left:50px; padding: 55px; margin-bottom: 60px;  width: -webkit-fill-available">
    <h1> Add New Ticket to List </h1>
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
    <button type="button" class="btn btn-primary" v-on:click="addTicket">Add Ticket</button>
     <router-link to="/list">   
        <button class="btn btn-primary" style="margin-left:50px;">Back to List</button>
    </router-link>
  </div>
</form>
</div>

</template>  
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default{
    name:'Add',
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

    async addTicket(){
    // console.log(this.List)
    //defining to add tickets to the database
    const result = await axios.post("http://localhost:3000/users",{
        id:this.List.id,
        name:this.List.name,
        email:this.List.email,
        subject:this.List.subject,
        assignee:this.List.assignee,
        status:this.List.status,
        time:this.List.time,
        avatar:this.List.avatar
    })
    console.log(result.status)
    if(result.status == 201){
      Swal.fire({
       position: 'center',
        icon: 'success',
        title: 'Ticket has  been updated',
        showConfirmButton: false,
        timer: 1500
      })
      this.$router.push('/list')
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Ticket Not Added',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    //         alert("Ticket Added Successfully")
    //         this.$router.push('/list') 
    // console.log("result",result)
    }
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
</style>