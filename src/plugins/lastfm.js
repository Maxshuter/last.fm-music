// jshint -W033
import axios from 'axios'

const URL = 'http://ws.audioscrobbler.com/2.0/'
const API_KEY = '18889af1db2a0d29ed039144e3aeb630'


const lastfm = {

    getTopArtists: page => axios.get(`${URL}?method=chart.gettopartists&page=${page}&api_key=${API_KEY}&format=json`)
                                .then(response => response.data.artists)
                                
}

export default {
    install(Vue) {
      Object.defineProperty(Vue.prototype, '$lastfm', {value: lastfm})
    }
  }

console.log(lastfm.getTopArtists())

