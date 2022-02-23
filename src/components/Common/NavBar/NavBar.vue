<template>
  <div>
      <nav class="navbar fixed-top navbar-light bg-light">  
        <div class="container-fluid">
          <!-- <div class="Headsearch">
              <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              </form>
          </div> -->
        <div style="margin-left:2px;">
        <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style="z-index:20; vertical-align: middle; width: 43px; height: 43px; border-radius: 50%;">
                <img src=" https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg" class="Headavatar avatar-sm"/>
        </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <br>  
            <li style="display: flex;"><i class='fas fa-user-circle  dropdown-icon'/><a class="dropdown-item" href="#">Profile</a></li>
            <br>
            <li style="display: flex;"><i class='fas fa-random dropdown-icon'/><a class="dropdown-item" href="#">Another action</a></li>
            <br>
            <li style="display: flex;"><i class='fas fa-sign-out-alt dropdown-icon'/><a class="dropdown-item" v-on:click="Logout">Signout</a></li>
            </ul>
          </div>
          <!-- Image URL for testing -->
          <!-- https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg -->
          </div>
          <div style="margin-left:42px; margin-right: 30px; font-size:23px; cursor:pointer;">
          <div class="dropdown">
          <a
          class="btn btn-light dropdown-toggle"
         
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style="z-index:20; vertical-align: middle; width: 43px; height: 43px; border-radius: 50%;">
               <i class="fas fa-cog setting-icon" />
          </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <br>  
            <li style="display: flex;"><i class='fas fa-random dropdown-icon  dropdown-icon'/><a class="dropdown-item" href="#">Setting 1</a></li>
            <br>
            <li style="display: flex;"><i class='fas fa-random dropdown-icon'/><a class="dropdown-item" href="#">Setting 1 action</a></li>
            <br>
            <li style="display: flex;"><i class='fas fa-random dropdown-icon'/><a class="dropdown-item" >Setting 2 action</a></li>
            <br>
            <li style="display: flex;"><i class='fas fa-random dropdown-icon'/><a class="dropdown-item" >Setting 2 action</a></li>
            <br>
            <li style="display: flex;"><i class='fas fa-random dropdown-icon'/><a class="dropdown-item" >Setting 2 action</a></li>
            <br>
            <li style="display: flex;"><i class='fas fa-random dropdown-icon'/><a class="dropdown-item" >Setting 2 action</a></li>
            </ul>
          </div>
                    
                </div>
        </div>
    </nav> 
  </div>
</template>


<script>

import axios from 'axios'
export default {
  name: "NavBar",
  data(){
    return{

      list:[]
    }
    
  },
  components:{},
  
  methods: { 

    async getAvatar(){
      const result = await axios.get("http://localhost:3000/auth")
      console.log('getting data from nav console',result.data)
      this.list = result.data
    },
    Logout(){
      // console.log("Onclick logout button is working")

      // localStorage.clear();
      // alert('Click OK to confirm Logout')
      // this.$router.push({name: 'Signup'})
    }
  },
  mounted(){
    this. getAvatar()
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

.avatar {
  vertical-align: middle;
  width: 43px;
  height: 43px;
  border-radius: 50%;
}
.Headavatar {
  vertical-align: middle;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  margin-right: 12px;
}
.menu-png {
  vertical-align: middle;
  width: 37px;
  height: 28px;
  border-radius: 50%;
}
.navbar {
  z-index:0;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
 
}
.navbar > .container-fluid{
   display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: right;
}
#Setting-font{
    font-size: 20px;
    color: red;
    margin-right: 47px;
}
.Headsearch{

border-radius:5px;
  margin-right:40px;
}
.dropdown-menu{
  position:absolute!important;
  opacity:1;
  left: -140px!important;
  min-width: 12rem!important;
  padding: 15px!important;
  background-color:#f8f9fa!important;
}
.dropdown-icon{
  font-size:x-large!important;
  margin-right:5px!important;
}
.setting-icon{
  font-size:43px;
}

    
</style>