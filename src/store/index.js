// jshint -W033
import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    artists: [],
    props: {},
  },
  getters: {
    ARTISTS: state => {
      return state.artists
    },
    LOADING: state => {
      return state.loading
    }
  },
  mutations: {
    SET_ARTISTS: (state, payload) => {
      state.artists = payload.artist
    
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload
    }
  },
  actions: {
    SET_ARTISTS: ({commit}, getData) => {                  
       commit('SET_LOADING', true)
       getData().then(data => {
          commit('SET_ARTISTS', data)
          commit('SET_LOADING', false)
          return data
       }).catch(({response}) => {
          commit('SET_LOADING', false)
          console.log(response.data)
          return response.data
       })  
    }
  },
  modules: {
  }
})
