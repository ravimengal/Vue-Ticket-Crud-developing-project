<template>
  <!-- Button trigger modal -->
  <MDBBtn
    color="primary"
    aria-controls="exampleModal"
    @click="exampleModal=true"
  >
    Launch demo modal
  </MDBBtn>
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel"> Modal title </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
   
    <form class="row g-3"> 
    <!-- <div class="input-group mb-3">
    <input type="file" class="form-control" id="inputGroupFile02">
    <label class="input-group-text" for="inputGroupFile02">Upload</label>
    </div> -->
    <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Requester Id</label>
    <input type="number" class="form-control"  v-model="id">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Requester Email</label>
    <input type="email" class="form-control" v-model="email" >
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Requester Name</label>
    <input type="text" class="form-control" v-model="name">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Subject</label>
    <input type="text" class="form-control" v-model="subject">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Assignee Name</label>
    <input type="text" class="form-control" v-model="assignee">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Status</label>
    <input type="text" class="form-control" v-model="status">
  </div>
 <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Last Update</label>
    <input type="text" class="form-control"  v-model="time">
  </div>
  <div class="col-12">
    <button type="button" class="btn btn-primary">Add Ticket</button>
  </div>
</form>

</MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>
<script>
  import {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
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
      };
    },
  };
</script>