<template>
  <div class="container w-auto mt-4 Tablebox">
    <div class="table-responsive table-hover">
      <table class="table table-hover align-items-center">
        <!-- Table Data -->
        <thead>
          <nav
            aria-label=" text-sm Page navigation example"
            style="height: 38px"
          >
            <div>
              <h6
                class="Ticket-count d-flex justify-content-between align-items-center"
                style="margin-bottom: -0.7rem; margin-top: 10px"
              >
                <b>43,590 TIckets</b>
                  <router-link to="/add"><button class="btn btn-primary btn-sm" v-on:click="AddTickets()" >ADD TICKET</button></router-link>
              </h6>
              <!-- uncomment to add pagination -->             
              <!-- <ul class="pagination pagination-sm justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="false">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul> -->

            </div>
          </nav>
        </thead>
      </table>
      <hr />
    </div>
    <!-- Table Data Heading -->
    <div class="table-responsive table-hover">
      <table class="table table-hover align-items-center mb-0">
        <!-- Table Data -->
        <thead>
          <tr>
            <th
              class="
                text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
              "
            >
              MARK
            </th>
            <th
              class="
                text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
              "
            >
              REQUESTER
            </th>
            <th
              class="
                text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
                ps-2
              "
            >
              SUBJECT
            </th>
            <th
              class="
                text-center text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
              "
            >
              ASSIGNEE
            </th>
            <th
              class="
                text-center text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
              "
            >
              STATUS
            </th>
            <th
              class="
                text-center text-uppercase text-secondary text-xxs
                font-weight-bolder
                opacity-7
              "
            >
              LAST MESSAGE
            </th>
            <th class="text-secondary opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" v-bind:key="item.id">
            <td class="align-middle text-sm">
              <input type="checkbox" />
            </td>
            <!-- first column data -->
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <img :src="item.avatar" class="avatar avatar-sm me-3" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-xs">{{ item.name }}</h6>
                  <p class="text-xs text-secondary mb-0">
                    {{ item.email }}
                  </p>
                </div>
              </div>
            </td>
            <td class="align-middle text-sm">
              <span>{{item.subject}}</span>
            </td>
            <td class="align-middle text-center text-sm">
              <span>{{ item.assignee }}</span>
            </td>
            <td class="align-middle text-center text-sm">
              <span class="badge rounded-pill bg-success">{{item.status}}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">
                {{item.time}}
              </span>
            </td>
            <td class="align-middle">
              <button
                class="btn btn-danger btn-sm"
                v-on:click="deleteTicket(item.id)"
              >
                <a
                  href="javascript:;"
                  class="font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  style="text-decoration: none; color: white"
                >
                  Delete
                </a>
              </button>
             
            </td>
            <td  class="align-middle">
              <router-link :to="'/update/'+item.id">
                <button
                class="btn btn-primary btn-sm"
                v-on:click="UpdateTickets()"
              >
                <a
                  href="javascript:;"
                  class="font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  style="text-decoration: none; color: white"
                >
                  Update
                </a>
              </button>
              </router-link>
</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> 

<script>
import apiCall from '../Common/Services/apiCall'
export default {
  name: 'List',
  components: {
    
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    //To render data in table
    //fetching data from api from services folder single instance apiCall
    async getDetails() {
      const info = await apiCall.getData() 
      //testing api call
      console.log(info.data)
      this.list = info.data
      },
      //delete data
    async deleteTicket(id){

          //testing delete function
          console.log("delete function calling")

          alert("Confirm deleting Ticket")
          //call api to delete data
         await apiCall.deleteData(id)
         //to check if data is deleted
          // .then(res => {
            // console.log(res)
          this.getDetails()
          this.list = this.list.filter(item => item.id !== id)
          console.log(this.list)
          // })
   }
  
},
    async mounted() {
      this.getDetails()
  }
}
</script>
<style scoped>
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.Tablebox {
  margin-top: 6.5rem !important;
}
.container {
  border-radius: 10px;
  max-width: -webkit-fill-available;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-right: 6px;
  margin-left: 4px;
}
</style>