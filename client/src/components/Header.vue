<template id="">
  <div class="main-body">
    <!-- <mdb-navbar position="top" class="mt-2 special-color-dark" dark>
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="">
      </mdb-navbar-brand>
      <mdb-navbar-nav right>
        <mdb-nav-item href="#" waves-fixed class="border border-light rounded mr-1" target="_blank"><mdb-icon fab icon="sign-in-alt" class="mr-2"/>Login </mdb-nav-item>
        <mdb-nav-item href="#" waves-fixed class="border border-light rounded" target="_blank"><mdb-icon icon="" far class="mr-2"/>Sign up free</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar> -->
    <div class="top" position="top">
        <lists></lists>
      </div>
  </div>
</template>
<script>
import { mdbNavbar,mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbIcon,mdbNavbarNav,mdbNavItem,mdbContainer } from 'mdbvue';
import Datepicker from 'vuejs-datepicker';
import lists from './Lists'

export default {
    name: 'Header',
    components: {
      mdbNavbar,
      mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbIcon,Datepicker,mdbNavbarNav,mdbNavItem,lists,mdbContainer
    },
    data() {
      return {

      }
    }
}
</script>
<style scopped>
.cata-lists:hover{
  background-color: #D3D3D3;
  color: white;
  cursor: pointer;
}
.top{
  width: 100%;
  background-color: #123;
  height: auto;
  padding: 50px 50px 50px 50px;
  /* position:fixed; */
}
.main-body{
  width: 100%;
}
</style>
