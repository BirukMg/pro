<template id="">
  <div class="">
    <mdb-navbar position="top" class="navbar-dark cyan">
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="">
      </mdb-navbar-brand>
    </mdb-navbar>
    <mdb-row style="width: 100%;">
      <mdb-col sm="2" style="margin-top: 20px">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>

        <mdb-row>
            <mdb-col>
              <select class="browser-default custom-select" style="margin-top: 30px;">
                <option selected>City</option>
                <option v-for="city in cities"  :key="city">{{city}}</option>
              </select>
            </mdb-col>
            <mdb-col>
              <select class="browser-default custom-select" style="margin-top: 30px;">
                <option selected>Area</option>
                <option v-for="area in areas"  :key="">{{area}}</option>
              </select>
            </mdb-col>
        </mdb-row>

        <datepicker :bootstrap-styling="true" placeholder="Search Event" v-model="dateValue" style="margin-top: 30px;">
          <div slot="beforeCalendarHeader" class="calender-header">
            Choose a Date
          </div>
        </datepicker>
      </mdb-col>
      <mdb-col sm="8">
        <router-view></router-view>
      </mdb-col>
      <mdb-col sm="2" style="margin-top: 20px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </mdb-col>
    </mdb-row>
    <!-- Footer -->
<mdb-footer color="cyan" class="font-small pt-4 mt-4 footer-copyright text-center py-3">
  <!-- <div class="footer-copyright text-center py-3" fluid> -->
    <!-- <container fluid> -->
      &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
    <!-- </container> -->
  <!-- </div> -->
</mdb-footer>
<!-- Footer -->
  </div>
</template>
<script>
import { mdbNavbar,mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbIcon } from 'mdbvue';
import Datepicker from 'vuejs-datepicker';

export default {
    components: {
      mdbNavbar,
      mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbIcon,Datepicker
    },
    data() {
      return {
        modal: false,
        dateValue: '',
        selectedValue: new Date(),
        cities: [
          "Addiss Ababa",
          "Hawassa",
          "Adama"
        ],
        areas: [
          "Piassa",
          "Mexico",
          "Stadium",
          "Bole"
        ],
        state : {
          date: new Date(2016, 9,  16)
        }
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
</style>
