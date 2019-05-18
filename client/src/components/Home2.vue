<template id="">
  <div class="">
    <home-header></home-header>
    <mdb-row>
      <mdb-col sm="2">
      <router-link to="/scam"><p class="animated fadeIn infinite" style="color: red; margin-top: 20px;"><span style="font-weight: bold">Scam Alert!!!</span> click here</p></router-link>
      <h1>AD HERE</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </mdb-col>
      <mdb-col sm="8" style="margin-top: 20px">
        <router-view></router-view>
      </mdb-col>
      <mdb-col sm="2">
        <h1>AD HERE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </mdb-col>
    </mdb-row>
    <home-footer></home-footer>
  </div>
</template>
<script>
import { mdbNavbar,mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbNavbarNav,mdbNavItem,mdbContainer,
mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbView, mdbBtn,mdbCardImage, mdbCardTitle, mdbCardText } from 'mdbvue';
import HomeHeader from './Header'
import HomeFooter from './Footer'

export default {
    name: 'Home2',
    components: {
      mdbNavbar,
      mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbNavbarNav,mdbNavItem,HomeHeader,HomeFooter,mdbContainer,
      mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbView, mdbBtn,mdbCardImage, mdbCardTitle, mdbCardText
    },
    data() {
      return {

      }
    },
    created() {
      this.$router.push('/top')
    },
}
</script>
