// jshint -W033
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    artists: [],
    album: {},
    pages: {},
    tracks: [],
    albums: []
  },
  getters: {
    ARTISTS: state => {
      return state.artists
    },
    LOADING: state => {
      return state.loading
    },
    PAGE: state => {
      return state.pages
    },
    TRACKS: state => {
      return state.tracks
    },
    ALBUMS: state => {
      return state.albums
    },
    ALBUM: state => {
      return state.album
    }
  },
  mutations: {
    SET_ARTISTS: (state, payload) => {
      state.artists = payload
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload
    },
    SET_PAGE: (state, payload = {}) => {
      state.pages = {...state.pages, ...payload }
    },
    SET_TRACKS: (state, payload) => {
      state.tracks = payload
    },
    SET_ALBUMS: (state, payload) => {
      state.albums = payload
    },
    SET_ALBUM: (state, payload) => {
      state.album = payload
    }
  },
  actions: {
    LOAD: async ({commit}, [getData, ...properties]) => {   
       commit('SET_LOADING', true)
        try {
          
          const response = await getData(...properties)

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
