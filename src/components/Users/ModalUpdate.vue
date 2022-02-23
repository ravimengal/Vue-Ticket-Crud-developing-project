<template>
  <!-- Button trigger modal -->
  <MDBBtn

    class="btn btn-primary"
    color="primary"
    aria-controls="exampleModal"
    @click="exampleModal=true"
  >
   Update Ticket
  </MDBBtn>
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"

  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel">Update Ticket </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
   
    <form class="row g-3"> 
    <!-- <div class="input-group mb-3">
    <input type="file" class="form-control" id="inputGroupFile02">
    <label class="input-group-text" for="inputGroupFile02">Upload</label>
    </div> -->
    <div class="col-md-8">
    <label for="inputEmail4" class="form-label">Requester Id</label>
    <input type="number" class="form-control"  v-model="List.id">
  </div>
  <div class="col-md-8">
    <label for="inputEmail4" class="form-label">Requester Email</label>
    <input type="email" class="form-control" v-model="List.email" >
  </div>
  <div class="col-md-8">
    <label for="inputPassword4" class="form-label">Requester Name</label>
    <input type="text" class="form-control" v-model="List.name">
  </div>
  <div class="col-md-8">
    <label for="inputEmail4" class="form-label">Subject</label>
    <input type="text" class="form-control" v-model="List.subject">
  </div>
  <div class="col-md-8">
    <label for="inputEmail4" class="form-label">Assignee Name</label>
    <input type="text" class="form-control" v-model="List.assignee">
  </div>
  <div class="col-md-8">
    <label for="inputEmail4" class="form-label">Status</label>
    <input type="text" class="form-control" v-model="List.status">
  </div>
 <div class="col-md-8">
    <label for="inputEmail4" class="form-label">Last Update</label>
    <input type="text" class="form-control"  v-model="List.time">
  </div>
</form>
</MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
      <MDBBtn color="primary" v-on:click="backToList">Back to List</MDBBtn>
      <MDBBtn color="primary" v-on:click="updateTicket">Update Ticket</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>
<script>
import axios from 'axios';
  import {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  import Swal from 'sweetalert2'
  export default {
      name: 'ModalUpdate',
    components: {
      MDBModal,
      MDBModalHeader,
      MDBModalTitle,
      MDBModalBody,
      MDBModalFooter,
      MDBBtn,
    },
    data() {
      const exampleModal = ref(false);
      return {
        exampleModal,
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
      };
    },
    methods:{
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
         if(result.status === 200){
        Swal.fire({
        icon: 'success',
        title: 'Ticket Updated',
        showConfirmButton: false,
        timer: 1500
        })
          this.$router.push('/list')
           
         }
         else{
             //to create popup notification
        Swal.fire({
        icon: 'Fail',
        title: 'Failed to Update Ticket',
        showConfirmButton: false,
        timer: 1500
        })
         }
         //check if ticket is updated
         console.log("Checking data",result);
        //

        //  this.$forceUpdate()      Not working 
      //   
        //to reload page to reflect change in list
    //testing data added or not in list
    // console.log("result",result) 
     
    }
    
    
    },
     async mounted(){
         
        let result = await axios.get("http://localhost:3000/users/" + this.$route.params.id);
        console.log(result.data);
         //we are getting the id from the url declared in the route "/update/:id"
        console.log(this.$route.params.id);
        this.List = result.data;
    
  }
  }
</script>
<style scoped>

.ModalSize{
    width:500px !important;
}
.ripple-surface {
    position: unset!important;
    overflow: visible;
}

</style>
