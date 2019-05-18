<template id="">
  <div>
    <!-- First row -->
    <mdb-row>
      <!-- Search bar -->
      <mdb-col sm="2">
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
              <option v-for="area in areas"  :key="area">{{area}}</option>
            </select>
          </mdb-col>
        </mdb-row>
        <datepicker :bootstrap-styling="true" placeholder="Search Event" v-model="dateValue" style="margin-top: 30px;">
          <div slot="beforeCalendarHeader" class="calender-header">
            Choose a Date
          </div>
        </datepicker>
        <mdb-btn outline="white" style="width: 95%" @click="showAll = !showAll">Show all categories</mdb-btn>
      </mdb-col>
      <!-- Marchandise list -->
      <mdb-col sm="2">
        <mdb-list-group>
          <mdb-list-group-item class="list-header">Marchandise
            <span @click="add('/add/marchandise')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
          </mdb-list-group-item>
          <router-link v-for="item in 4"  :key="item" :to="path+marchandise[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showMarchandise">{{marchandise[item-1]}}</mdb-list-group-item></router-link>
          <mdb-list-group-item class="list-header"   @click.native.prevent="showMarchandise === true ? showMarchandise = false : showMarchandise = true,showMarchandise === true ? title = 'Show less' : title = 'Show more'">{{title}}  <mdb-icon v-if="!showMarchandise" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
          <!-- <mdb-list-group-item class="cata-lists" @click.native="more" v-if="showMarchandiseMore">Show Less <mdb-icon icon="arrow-up" class="text-right addBtn"/></mdb-list-group-item> -->
          <transition>
            <mdb-list-group class="hello" v-if="showMarchandise">
              <router-link v-for="item in marchandise"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
            </mdb-list-group>
          </transition>
        </mdb-list-group>
      </mdb-col>
      <!-- Services list-->
      <mdb-col sm="2">
        <mdb-list-group>
          <mdb-list-group-item class="list-header">Services
            <span @click="add('/add/services')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
          </mdb-list-group-item>
          <router-link v-for="item in 4"  :key="item" :to="path+services[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showService">{{services[item-1]}}</mdb-list-group-item></router-link>
          <mdb-list-group-item class="list-header" @click.native.prevent="showService === true ? showService = false : showService = true,showService === true ? title2 = 'Show less' : title2 = 'Show more'">{{title2}} <mdb-icon v-if="!showService" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
          <!-- <mdb-list-group-item class="cata-lists" @click.native="more" v-if="showMore">Show Less <mdb-icon icon="arrow-up" class="text-right addBtn"/></mdb-list-group-item> -->
          <transition v-if="showService">
            <mdb-list-group class="hello">
              <router-link v-for="item in services"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
            </mdb-list-group>
          </transition>
        </mdb-list-group>
      </mdb-col>
      <!-- Vehicles list-->
      <mdb-col sm="2">
         <mdb-list-group>
            <mdb-list-group-item class="list-header">Vehicles
              <span @click="add('/add/Vehicles')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
            </mdb-list-group-item>
            <router-link v-for="item in 4"  :key="item" :to="path+vehicles[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showVehicles">{{vehicles[item-1]}}</mdb-list-group-item></router-link>
            <mdb-list-group-item class="list-header" @click.native.prevent="showVehicles === true ? showVehicles = false : showVehicles = true,showVehicles === true ? title3 = 'Show less' : title3 = 'Show more'">{{title3}} <mdb-icon v-if="!showVehicles" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
            <transition v-if="showVehicles">
              <mdb-list-group class="hello">
                <router-link v-for="item in vehicles"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
              </mdb-list-group>
            </transition>
          </mdb-list-group>
      </mdb-col>
      <!-- Construction/ Farm Equipment list-->
      <mdb-col sm="2">
        <mdb-list-group>
          <mdb-list-group-item class="list-header">Construction/ Farm Equipment
            <span @click="add('/add/Construction&FarmEquipment')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
          </mdb-list-group-item>
          <router-link v-for="item in 4"  :key="item" :to="path+construction_farm[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showConstruction_farm">{{construction_farm[item-1]}}</mdb-list-group-item></router-link>
          <mdb-list-group-item class="list-header" @click.native.prevent="showConstruction_farm === true ? showConstruction_farm = false : showConstruction_farm = true,showConstruction_farm === true ? title4 = 'Show less' : title4 = 'Show more'">{{title4}} <mdb-icon v-if="!showConstruction_farm" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
          <transition v-if="showConstruction_farm">
            <mdb-list-group class="hello">
              <router-link v-for="item in construction_farm"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
            </mdb-list-group>
          </transition>
        </mdb-list-group>
      </mdb-col>
      <!-- Real Estate list -->
      <mdb-col sm="2">
        <mdb-list-group>
                <mdb-list-group-item class="list-header">Real Estate
                  <span @click="add('/add/RealEstate')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
                </mdb-list-group-item>
                <router-link v-for="item in 4"  :key="item" :to="path+realstate[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showRealestate">{{realstate[item-1]}}</mdb-list-group-item></router-link>
                <mdb-list-group-item class="list-header" @click.native.prevent="showRealestate === true ? showRealestate = false : showRealestate = true,showRealestate === true ? title5 = 'Show less' : title5 = 'Show more'">{{title5}} <mdb-icon v-if="!showRealestate" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
                <transition v-if="showRealestate">
                  <mdb-list-group class="hello">
                    <router-link v-for="item in realstate"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
                  </mdb-list-group>
                </transition>
              </mdb-list-group>
      </mdb-col>
    </mdb-row>
    <!-- Second row -->
    <mdb-row v-if="showAll" style="margin-top: 20px;" class="animated fadeIn">
      <!-- Employment list -->
      <mdb-col sm="2"></mdb-col>
      <mdb-col sm="2">
        <mdb-list-group>
          <mdb-list-group-item class="list-header">Employment
            <span @click="add('/add/Employment')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
          </mdb-list-group-item>
          <router-link v-for="item in 4"  :key="item" :to="path+employment[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showEmployment">{{employment[item-1]}}</mdb-list-group-item></router-link>
          <mdb-list-group-item class="list-header" @click.native.prevent="showEmployment === true ? showEmployment = false : showEmployment = true,showEmployment === true ? title6 = 'Show less' : title6 = 'Show more'">{{title6}} <mdb-icon v-if="!showEmployment" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
          <transition v-if="showEmployment">
            <mdb-list-group class="hello">
              <router-link v-for="item in employment"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
            </mdb-list-group>
          </transition>
        </mdb-list-group>
      </mdb-col>
      <!-- Community list-->
      <mdb-col sm="2">
        <mdb-list-group>
          <mdb-list-group-item class="list-header">Community
            <span @click="add('/add/Community')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
          </mdb-list-group-item>
          <router-link v-for="item in 4"  :key="item" :to="path+community[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showCommunity">{{community[item-1]}}</mdb-list-group-item></router-link>
          <mdb-list-group-item class="list-header" @click.native.prevent="showCommunity === true ? showCommunity = false : showCommunity = true,showCommunity === true ? title7 = 'Show less' : title7 = 'Show more'">{{title7}} <mdb-icon v-if="!showCommunity" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
          <transition v-if="showCommunity">
            <mdb-list-group class="hello">
              <router-link v-for="item in community"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
            </mdb-list-group>
          </transition>
        </mdb-list-group>
      </mdb-col>
      <!-- Rentals list-->
      <mdb-col sm="2">
        <mdb-list-group>
          <mdb-list-group-item class="list-header">Rentals
            <span @click="add('/add/rentals')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
          </mdb-list-group-item>
          <router-link v-for="item in 4"  :key="item" :to="path+rentals[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showRentals">{{rentals[item-1]}}</mdb-list-group-item></router-link>
          <mdb-list-group-item class="list-header" @click.native.prevent="showRentals === true ? showRentals = false : showRentals = true,showRentals === true ? title8 = 'Show less' : title8 = 'Show more'">{{title8}} <mdb-icon v-if="!showRentals" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
          <transition v-if="showRentals">
            <mdb-list-group class="hello">
              <router-link v-for="item in rentals"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
            </mdb-list-group>
          </transition>
        </mdb-list-group>
      </mdb-col>
      <!-- Discussion Forums list-->
      <mdb-col sm="2">
        <mdb-list-group>
            <mdb-list-group-item class="list-header">Discussion Forums
              <span @click="add('/add/discussionForum')"><mdb-icon icon="plus" class="text-right addBtn"/></span>
            </mdb-list-group-item>
            <router-link v-for="item in 4"  :key="item" :to="path+discussionForum[item-1]"><mdb-list-group-item class="cata-lists hello" v-if="!showDiscussionforum">{{discussionForum[item-1]}}</mdb-list-group-item></router-link>
            <mdb-list-group-item class="list-header" @click.native.prevent="showDiscussionforum === true ? showDiscussionforum = false : showDiscussionforum = true,showDiscussionforum === true ? title9 = 'Show less' : title9 = 'Show more'">{{title9}} <mdb-icon v-if="!showDiscussionforum" icon="arrow-down" class="text-right addBtn"/></mdb-list-group-item>
            <transition v-if="showDiscussionforum">
              <mdb-list-group class="hello">
                <router-link v-for="item in discussionForum"  :key="item" :to="path+item"><mdb-list-group-item class="cata-lists">{{item}}</mdb-list-group-item></router-link>
              </mdb-list-group>
            </transition>
          </mdb-list-group>
      </mdb-col>
      <mdb-col sm="2">
        <mdb-list-group>
          <mdb-list-group-item class="list-header">Resumes
            
            <router-link to="/add/discussionForum"><mdb-icon icon="plus" class="text-right addBtn"/></router-link>
          </mdb-list-group-item>
        </mdb-list-group>

        <mdb-list-group style="margin-top: 30px">
          <mdb-list-group-item class="list-header">Event
            <router-link to="/add/discussionForum"><mdb-icon icon="plus" class="text-right addBtn"/></router-link>
          </mdb-list-group-item>
        </mdb-list-group>
      </mdb-col>
    </mdb-row>
    <modal size="sm"  side position="top-right" v-if="info" @close="info = false">
      <modal-body>
        <h5 class="font-weight-bold">Please login first</h5>
      </modal-body>
    </modal>
  </div>
</template>
<script>
import { mdbNavbar,mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbIcon,mdbBtn,Modal,ModalBody } from 'mdbvue';
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'Lists',
  components: {
    mdbNavbar,
    mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbIcon,mdbBtn,Datepicker,ModalBody,Modal
  },
  data() {
    return {
      info: false,
      modal: false,
      showAll: false,
      showMarchandise: false,
      showService: false,
      showVehicles: false,
      showVehicles: false,
      showConstruction_farm: false,
      showRealestate: false,
      showEmployment: false,
      showCommunity:false,
      showRentals: false,
      showDiscussionforum: false,
      // title: 'Show more',
      showMore: false,
      showOrLess: '',
      dateValue: '',
      path:'/posts/',
      msg:"hello",
      marchandise: ["Appliances","Clothing","Collecting&art","Computers","Electronices","Furniture","musical instruments","Helth & beauty","Sporting Goods","Garge/yard sales","Free","other"],
      vehicles:["Auto parts","Accessories","Boats","Cars","Motorscycles","RVs","Trucks","Vans","other"],
      rentals:["Apartements","Homes","Rooms for rent","Short term rentals","Vacation rentals"],
      services:["Automotive","computer Repair","creative","Events","Financial","Home Service","Moving & Labor","Legal","Lessons & Training ","Real Estate Agents","Skilled Trades","Other Businesses"],
      construction_farm:["Forestry&Farm","Equipments","Garden Supplies","yard","Heavy Equipment","others","Tractors"],
      community: ["Activities","Artists","Childcare","Classes","General","Groups","Local News","Lost+Found","Missed connection","Musicians","Pets","Politics","Rants & raves","Rideshare","Volunteers"],
      discussionForum:["Android","Apple","Arts","Atheist","Autos","Beauty","Bikes","Celebs","Comp","Cosmos","Diet","Divorce","Dying","Eco","Feedbk","Film","Fixit","Food","Frugal","Gaming","Garden","Haiku","Help","History","Housing","Jobs","Jokes"
      ,"Legal","Linux","Manners","Marriage","Money","Music","Open","Outdoor","Parent","Pets","Philos","Photo","Politics","Psych","Recover","Eligion","Rofo","Science","Spirit","Sports","Super","Tax","Travel","Tv","Vegan","Words","Writing"],
      employment:[
        "Accounting",
        "Adminstrative & office jobs",
        "Advertising & Marketing jobs ",
        "Arts,media & Designen jobs",
        "Biothecnology & pharmaceuticals",
        "Community,social Service & nonprofit",
        "Construction,mining & Trades",
        " Educations,Training & library",
        "Employment placement Agencies",
        "Enginneering",
        "Finanicial & Banking",
        "General Labor",
        "Goverment",
        "Hotels&hospitality",
        "Human Resources(HR)",
        "information Technology(IT) ",
        "installation,maintenance & Repair",
        "insurance",
        "internet & ecommerce",
        "Law enforcement & security",
        "Legal & paralegal",
        "Medical & helthcare",
        "Others",
        "Personal Care,spas & fitness",
        "Professional Services",
        "Real Estate ",
        "Resturant & Beverage",
        "Retail & Wholesale",
        "sales",
        "Science",
        "Sports & recreation ",
        "Telecommunications",
        "Television ,film&Entertainment",
        "Trensportation"
      ],
      realstate: [
        "Commercial Real Estate",
        "Condos for Sale",
        "Duplexes",
        "Homes for Sale",
        "Land for Sale",
        "Others"
      ],
      collapse2: false,
      collapse3: false,
      selectedValue: new Date(),
      state : {
        date: new Date(2016, 9,  16)
      }
    }
  },
  methods: {
    more() {
      this.showMore === true ? this.showMore = false : this.showMore = true
      this.showLess === false ? this.showLess = true : this.showLess = false
    },
    add(route){
      if (this.$store.getters.isLoggedIn) {
        this.$router.push(route)
      }else{
        this.info = true
      }
    }
  }
}
</script>
<style scopped>
.cata-lists:hover{
  background-color: #D3D3D3;
  color: #123;
  cursor: pointer;
}
.cata-lists{
  color: #fff;
  background-color: #123;
}
.list-header{
  background-color: #666;
  color: #fff
}
.addBtn:hover{
  cursor: pointer;
}
.addBtn{
  color: #fff;
  float: right;
}
.hello{
  /* transition: height 3s */
}
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
