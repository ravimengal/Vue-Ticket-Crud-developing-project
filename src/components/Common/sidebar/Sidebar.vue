<script>
import NavBar from "../NavBar/NavBar.vue"
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink,
  NavBar
   },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>
<template>
  <NavBar/>
  <div class="sidebar" :style="{ width: sidebarWidth }"> 
    <h1>
      <span v-if="collapsed">
        <div>LG</div>
       
      </span>
      <span v-else>Logo</span>
    </h1>
 <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    </form><br>
    <SidebarLink to="" icon="fas fa-home">Home</SidebarLink><br>
    <SidebarLink to="" icon="fas fa-columns">Open Tickets</SidebarLink><br>
    <SidebarLink to="" icon="fas fa-chart-bar">Pending Tickets</SidebarLink><br>
    <SidebarLink to="" icon="fas fa-users">Solved Tickets</SidebarLink><br>
    <SidebarLink to="" icon="fas fa-image">Spam</SidebarLink><br>
  
    <hr>
  <br>
    <SidebarLink to="/list" icon="fas fa-image">All Tickets</SidebarLink><br>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color:#f8f9fa;
  --sidebar-item-hover: #ffffff;
  --sidebar-item-active: #e1e5e6;
}
</style>
<style scoped>
.sidebar {
  color: rgb(0, 0, 0);
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 1.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 1.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
