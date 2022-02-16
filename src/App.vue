<script>
 /* eslint-disable */
import Sidebar from './components/Common/sidebar/Sidebar.vue'
import { sidebarWidth } from './components/Common/sidebar/state'
export default {
  components: { Sidebar               
  },
  setup() {
    return { sidebarWidth }
  }
}
</script>
<template>
  <Sidebar/>
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>


