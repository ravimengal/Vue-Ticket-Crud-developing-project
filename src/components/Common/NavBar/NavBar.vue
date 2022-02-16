<template>
  <div>
    <nav class="navbar fixed-top navbar-light bg-light">
       
      <div class="container-fluid">
       <div class="Headsearch">
          <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    </form>
        </div>
        <div style="margin-left:2px;">
          <img
            src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg"
            class="Headavatar avatar-sm"
          />
           </div>
            <div style="margin-left:5px; margin-right: 10px;">
            <Icon type="fas fa-gear">Setting</Icon>
         </div>
      </div>
    </nav> 
    </div>
</template>


<script>


export default {
  name: "NavBar",
  components:{},
  methods: {
    getdata() {
      console.log("Nav Bar is working");
    },
  },
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
.Setting-font{
    font-size: 20px;
    color: red;
    margin-right: 47px;
}
.Headsearch{

border-radius:5px;
  margin-right:40px;
}
    
</style>