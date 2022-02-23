<template>
<MainSide/>
   <!-- <Sidebar/> -->
  <!-- <div :style="{ 'margin-left': sidebarWidth }"> -->
    <!-- <router-view /> -->
  <!-- </div> -->
</template>
<script>
 /* eslint-disable */
// import Sidebar from '../components/Common/sidebar/Sidebar.vue'
// import { sidebarWidth } from '../components/Common/sidebar/state'
import MainSide from '../components/Common/sidebar/MainSide.vue'
export default {

  components: {
    MainSide    
  },
  // components: { Sidebar               
  // }
  // ,
  // setup() {
  //   return { sidebarWidth }
  // }
  // ,
   mounted(){
        let user = localStorage.getItem('userDetails')
        if(!user){
                this.$router.push('/list')
        }
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>