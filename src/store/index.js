// jshint -W033
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    artists: [],
    props: {},
    page: null,
    temps: []
  },
  getters: {
    ARTISTS: state => {
      return state.artists
    },
    LOADING: state => {
      return state.loading
    },
    PAGE: state => {
      return state.page
    }
  },
  mutations: {
    SET_ARTISTS: (state, payload) => {
      state.artists = payload
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload
    },
    SET_PAGE: (state, payload) => {
      state.page = payload
    }
  },
  actions: {
    LOAD: async ({commit}, [getData, PAGE]) => {   
       commit('SET_LOADING', true)
        try {
          
          const response = await getData(PAGE)
          //commit('SET_PAGE', response['@attr'].page)
          //commit('SET_ARTISTS', response.artist)
          commit('SET_LOADING', false)
          
          return response
        } catch (e) {
          commit('SET_LOADING', false)
          return e
        }    
         
    }
},
  modules: {
  }
})
