import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user_id: localStorage.getItem('user_id') || '',
    is_loggedin: false,
    count: 0,
    admin_permmision: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user_id) {
      state.status = 'success'
      state.token = token
      state.user_id = user_id
      // state.users = users
    },
    get_userid(state, user_id){
      state.user_id = user_id
    },
    is_logged_in(state) {
    //   let is_loggedin = false
      if (localStorage.getItem('token') != '') {
        state.is_loggedin = true;
      } else {
        state.is_loggedin = false;
      }
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
      state.is_loggedin = false
    },
    count_request(state, amount){
      state.count = amount
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios
          .post("http://localhost:3000/api/users/login", user)
          .then(resp => {
            console.log(resp)
            const token = resp.data.id
            const user_id = resp.data.userId
            localStorage.setItem('token', token)
            localStorage.setItem('user_id', user_id)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token)
            commit('get_userid', user_id)
            commit('is_logged_in')
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.clear();
            reject(err)
          })
      })
    },
    	logout({commit}) {
    	  return new Promise((resolve, reject) => {
    	    commit('logout')
    	    // commit('is_logged_in')
    	    localStorage.clear();
    	    delete axios.defaults.headers.common['Authorization']
    	    resolve()
    	  })
      },
      countRequest({
        commit
      }) {
        return new Promise((res, rej) => {
          axios.get('http://localhost:3000/api/requests/count')
            .then(resp => {
              let amount = resp.data.count
              commit('count_request', amount)
            })
          res()
        })
      },
      // userData({commit}){
      //   return new Promise((res,rej) => {
      //     axios.get('http://localhost:3000/api/requests/count')
      //     .then(resp => {
      //       console.log(resp);
      //       let amount = resp.data.count
      //       commit('count_request', amount)
      //     })
      //     res()
      //   })
      // }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
