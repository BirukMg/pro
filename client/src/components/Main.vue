<template id="">
  <div class="main-body">
    <mdb-navbar position="sticky-top" class="mt-2 special-color-dark" dark>
      <mdb-navbar-brand href="#">
        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="">
      </mdb-navbar-brand>
      <mdb-navbar-nav right>
        <mdb-nav-item v-if="!this.$store.getters.isLoggedIn" href="#" waves-fixed class="border border-light rounded mr-1" @click.native="account = true" target="_blank"><mdb-icon icon="sign-in-alt" class="mr-2"/> Login </mdb-nav-item>
        <mdb-nav-item v-if="this.$store.getters.isLoggedIn" href="#" waves-fixed class="mr-1" target="_blank"><mdb-icon icon="user" class="mr-2"/> Hi {{userData.first_name}}</mdb-nav-item>
        <mdb-nav-item v-if="this.$store.getters.isLoggedIn" href="#" waves-fixed class="border border-light rounded mr-1" @click.native="logout" target="_blank"><mdb-icon icon="sign-out-alt" class="mr-2"/> Logout </mdb-nav-item>
        
      </mdb-navbar-nav>
    </mdb-navbar>
        <mdb-modal v-if="account" @close="account = false">
            <mdb-modal-body>
                <mdb-row>
                  <mdb-col sm="6"><mdb-btn :color="log_btn_color" size="sm" style="width: 100%" @click="showLogin">Login</mdb-btn></mdb-col>
                  <mdb-col sm="6"><mdb-btn :color="reg_btn_color" size="sm" style="width: 100%" @click="showRegister">Register</mdb-btn></mdb-col>
                </mdb-row>
                 <section v-if="showLog" class="animated fadeIn">
                   <h5 v-if="logmsg.show" :class="logmsg.styles">{{logmsg.title}}</h5>
                  <div class="form-content">
                    <div class="form-group">
                      <input type="text" placeholder="Email or Username" class="form-control" v-model="loginData.email" >
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="Password" class="form-control" v-model="loginData.password">
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <mdb-btn outline="elegant" size="sm" style="width: 100%" @click="login">Login</mdb-btn>
                    <p class="text-sm-left font-weight-bold text-primary">Forgot Password??</p>
                  </div>
                 </section>

                 <section v-if="showReg" class="animated fadeIn">
                   <div class="text-center">
                    Contnue with
                  </div>
                  <mdb-row>
                    <mdb-col sm="12"><mdb-btn outline="primary" size="sm" style="width: 100%"><mdb-icon icon="facebook-f" class="mr-1"/> Facebook</mdb-btn></mdb-col>
                  </mdb-row>
                  <div class="text-center">
                    OR
                  </div>
                  <h5 v-if="regmsg.show" :class="regmsg.styles">{{regmsg.title}}</h5>
                    <div class="form-group">
                      <input type="text" placeholder="First name" class="form-control" v-model="registerData.first_name">
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="Last name" class="form-control" v-model="registerData.last_name">
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="Choose username" class="form-control" v-model="registerData.username">
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="Address" class="form-control" v-model="registerData.address">
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="E-mail" class="form-control" v-model="registerData.email">
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="Password" class="form-control" v-model="registerData.password">
                    </div>
                     <div class="form-group">
                      <input type="text" placeholder="Re-Password" class="form-control" v-model="re_pass">
                    </div>
                    <div class="text-center mt-4">
                      <mdb-btn outline="elegant" size="sm" style="width: 100%" @click="register">Register</mdb-btn>
                    </div>
                 </section>
            </mdb-modal-body>
        </mdb-modal>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
import { mdbNavbar,mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbIcon,mdbNavbarNav,mdbNavItem,mdbContainer,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn,mdbTab, mdbTabItem, mdbTabContent, mdbTabPane } from 'mdbvue';
import Datepicker from 'vuejs-datepicker';
import lists from './Lists'

export default {
    components: {
      mdbNavbar,
      mdbNavbarBrand,mdbRow,mdbCol,mdbListGroup, mdbListGroupItem,mdbFooter,mdbIcon,Datepicker,mdbNavbarNav,mdbNavItem,lists,mdbContainer,mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn,mdbTab, mdbTabItem, mdbTabContent, mdbTabPane
    },
    data() {
      return {
        regmsg:{
            styles:'',
            title:'',
            show: false
        },
         logmsg:{
            styles:'',
            title:'',
            show: false
        },
        isExist: false,
        passed: false,
        account: false,
        showLog: true,
        showReg: false,
        reg_btn_color: 'white',
        log_btn_color: 'elegant',
        registerData: {
          first_name:'',
          last_name: '',
          username: '',
          address: '',
          email: '',
          password: '',
          account_type: 'free'
        },
        loginData: {
          email: '',
          password: ''
        },
        re_pass: '',
        userData: null

      }
    },
    mounted(){
        this.$router.push('/home')
        this.initialize()
    },
    methods: {
      initialize(){
        if (this.$store.getters.isLoggedIn) {
          axios.get('http://localhost:3000/api/users/'+ this.$store.state.user_id +'/accounts')
          .then(res => {
            this.userData = res.data[0]
            console.log(this.userData)
          })
        }
      },
      showLogin(){
        this.showLog = true
        this.showReg = false
        this.reg_btn_color = 'white'
        this.log_btn_color = 'elegant'
      },
      showRegister(){
        this.showLog = false
        this.showReg = true
        this.reg_btn_color = 'elegant'
        this.log_btn_color = 'white'
      },
      register(){
        this.checkEmpty(this.registerData, this.regmsg)
        this.checkEmail(this.registerData.email)
        if (this.passed) {
          if (!this.validateEmail(this.registerData.email)) {
            this.regmsg.title = "Invalid Email"
            this.regmsg.styles = 'text-danger font-weight-bold'
          }else if (this.isExist) {
            this.regmsg.title = "Email is alredy taken"
            this.regmsg.styles = 'text-danger font-weight-bold'
          }else if (this.registerData.password != this.re_pass) {
            this.regmsg.title = "Password is not match"
            this.regmsg.styles = 'text-danger font-weight-bold'
          }else{
            axios.post('http://localhost:3000/api/users', {username: this.registerData.username, email: this.registerData.email, password: this.registerData.password})
            .then(res => {
              axios.post('http://localhost:3000/api/users/'+ res.data.id +'/accounts',this.registerData)
              .then(res => {
                this.regmsg.title = "Registration successfully"
                this.regmsg.styles = 'text-success font-weight-bold'
              })
            })
          }
        }
      },
      login(){
          this.checkEmpty(this.loginData,this.logmsg)
          if (this.passed) {
              this.$store.dispatch('login', this.loginData)
              .then(res => {
                  this.account = false
                  this.initialize()
                  this.logmsg.show = false
              }).catch(err => {
                  this.logmsg.title = "Incorrect user/email or password"
                  this.logmsg.styles = 'text-danger font-weight-bold'
                  this.logmsg.show = true
              })
          }
      },
      logout(){
        this.$store.dispatch('logout')
        .then(() =>{
          this.$router.push('/top')
        })
        .catch(err => console.log(err))
      },
      checkEmpty(object,msgs){
          for (const value in object) {
              if (object.hasOwnProperty(value)) {
                  if (object[value] == '') {
                      msgs.title = value + " is requred"
                      msgs.styles = 'text-danger font-weight-bold'
                      msgs.show = true
                      this.passed = false
                      break
                  }else {
                      this.passed = true
                  }
              }
          }
      },
      validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      },
      checkEmail(email){
        let filter = {
          where: {
            email : email
          }
        }
        axios.get("http://localhost:3000/api/users?filter="+ JSON.stringify(filter))
        .then(res => {
          if (res.data.length > 0) {
            this.isExist = true
          }else {
            this.isExist = false
          }
        })
      }
    },
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
  height: 700px;
  padding: 50px 50px 50px 50px;
  /* position:fixed; */
}
.main-body{
  width: 100%;
}
 .slide-toggle-enter-active {
    transition: .3s ease-in;
    opacity: 1;
    max-height: 500px;
  }

  .slide-toggle-enter,
  .slide-toggle-leave-active {
    opacity: 0;
    max-height: 0;
  }

  .slide-toggle-leave {
    opacity: 1;
    max-height: 500px;
  }
  .form-content{
    margin-top: 30px
  }
</style>
