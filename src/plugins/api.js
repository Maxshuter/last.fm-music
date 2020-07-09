// jshint -W033
import axios from 'axios'

const URL = 'http://ws.audioscrobbler.com/2.0/'
const API_KEY = '18889af1db2a0d29ed039144e3aeb630'


const lastfm = {

    getTopArtists: page => axios.get(`${URL}?method=chart.gettopartists&page=${page}&api_key=${API_KEY}&format=json`)
                                .then(response => response.data.artists),

    getTopTracks: page => axios.get(`${URL}?method=chart.gettoptracks&page=${page}&api_key=${API_KEY}&format=json`)
                                .then(response => response.data.tracks),
                                
    getTopAlbums: (page, artist) => axios.get(`${URL}?method=artist.gettopalbums&artist=${artist}&page=${page}&api_key=${API_KEY}&format=json`)
                                .then(response => response.data.topalbums),

    getAlbumInfo: (artist, album) => axios.get(`${URL}?method=album.getinfo&api_key=${API_KEY}&artist=${artist}&album=${album}&format=json`)
                                .then(response => response.data.album)
                                
}

export default {
    install(Vue) {
      Object.defineProperty(Vue.prototype, '$lastfm', {value: lastfm})
    }
  }


