<template>
  <div class="d-flex" id="wrapper" v-on:click="getToggled">
    <!-- Sidebar -->
    <div class="bg-white" id="sidebar-wrapper">
      <div
        class="
          sidebar-heading
          text-center
          py-4
          primary-text
          fs-4
          fw-bold
          text-uppercase
          border-bottom
        "
      >
        <i class="fas fa-user-secret me-2"></i>
        Logo
      </div>
      <div class="list-group list-group-flush my-3">
        <a
          href="/"
          class="
            list-group-item list-group-item-action
            bg-transparent
            second-text
            active
          "
        >
          <i class="fas fa-tachometer-alt me-2"></i>
          Home
        </a>
        <br />
        <a
          to="/list"
          class="
            list-group-item list-group-item-action
            bg-transparent
            second-text
            fw-bold
          "
          style="cursor:pointer;"
        >
          <i class="fas fa-project-diagram me-2"></i>
          Open Tickets
        </a>
        <br />
        <a
          href=""
          class="
            list-group-item list-group-item-action
            bg-transparent
            second-text
            fw-bold
          "
        >
          <i class="fas fa-chart-line me-2"></i>
          Pending Tickets
        </a>
        <br />
        <a
          href=""
          class="
            list-group-item list-group-item-action
            bg-transparent
            second-text
            fw-bold
          "
        >
          <i class="fas fa-paperclip me-2"></i>
          Solved Tickets
        </a>
        <br />
        <a
          href=""
          class="
            list-group-item list-group-item-action
            bg-transparent
            second-text
            fw-bold
          "
        >
          <i class="fas fa-paperclip me-2"></i>
          Spam
        </a>
        <hr />
        <br />

        <a
          href=""
          class="
            list-group-item list-group-item-action
            bg-transparent
            text-danger
            fw-bold
          "
        >
          <i class="fas fa-document me-2"></i>
          All Tickets
        </a>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper"> 
      <nav
        class="navbar navbar-expand-lg navbar-light  py-4 px-4"
      >
        <div class="d-flex align-items-center">
          <i
            class="fas fa-align-left primary-text fs-4 me-3"
            id="menu-toggle"
          ></i>  <h6>NameLogo/</h6> 
       </div> 
        </nav>
        <div class="NavCombine" style="display:flex; justify-content:right;"> 
              <div style="margin-left:2px;">
        <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style="z-index:20; vertical-align: middle; width: 43px; height: 43px; border-radius: 50%;  margin-top: -107px; margin-left:-63px;" >
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
     <!-- <NavBar/> -->
      <div style="margin-left:42px; margin-right: 30px; font-size:23px; cursor:pointer;">
          <div class="dropdown">
          <a
          class="btn btn-light dropdown-toggle"
         
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style="z-index:20; vertical-align: middle; width: 43px; height: 43px; border-radius: 50%; margin-top: -114px; margin-left: -45px;">
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
     <router-view></router-view>
      <!-- <List /> -->
    </div>
  </div>
</template>
    <script>
// import List from '../../Users/List.vue'
// import NavBar from '@/components/Common/NavBar/NavBar'
export default {
  name: 'MainSide',
  components: {
    // List
    // NavBar
  },
  methods: {
    getToggled() {
      var el = document.getElementById('wrapper')
      var toggleButton = document.getElementById('menu-toggle')

      toggleButton.onclick = function () {
        el.classList.toggle('toggled')
      }
    }
  }
}
</script>

<style>
:root {
  --main-bg-color: #008cff;
  --main-text-color: #008cff;
  --second-text-color: #bbbec5;
  --second-bg-color: #c1efde;
}

.primary-text {
  color: var(--main-text-color);
}

.second-text {
  color: var(--second-text-color);
}

.primary-bg {
  background-color: var(--main-bg-color);
}

.secondary-bg {
  background-color: var(--second-bg-color);
}

.rounded-full {
  border-radius: 100%;
}

#wrapper {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

#menu-toggle {
  cursor: pointer;
}

.list-group-item {
  border: none;
  padding: 20px 30px;
}

.list-group-item.active {
  background-color: transparent;
  color: var(--main-text-color);
  font-weight: bold;
  border: none;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
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
margin-top: -7px;
    margin-left: -13px;
}
.menu-png {
  vertical-align: middle;
  width: 37px;
  height: 28px;
  border-radius: 50%;
}
.navbar {
  z-index: 0;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.navbar > .container-fluid {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: right;
}
.Headsearch {
  border-radius: 5px;
  margin-right: 40px;
}
.dropdown-menu {
  position: absolute !important;
  opacity: 1;
  left: -180px !important;
  min-width: 12rem !important;
  padding: 15px !important;
  background-color: #f8f9fa !important;
}
.dropdown-icon {
  font-size: x-large !important;
  margin-right: 5px !important;
}
.setting-icon {
  font-size: 43px;
  margin-top: -7px;
    margin-left: -13px;
}
</style>