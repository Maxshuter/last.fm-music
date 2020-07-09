<template>
  <div class="albums">
      <h1 align="center">
        <v-icon class="icon" v-html="'mdi-microphone-variant'"></v-icon>
        {{getArtist}}
        <v-icon class="icon" v-html="'mdi-microphone-variant'"></v-icon>
      </h1>
      <h2  align="center" style="color:grey">Top albums</h2>
      <v-layout>
        <v-row>
          <v-col v-for="(album, i) in dataTile" :key="`dataTile${i}`">
              <TileItem @click="goToPage(i)" :dataTile="album"/>
          </v-col>
          <infinite-loading :distance=0 @infinite="infiniteHandler"></infinite-loading>
        </v-row>
      </v-layout>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import infiniteHandler from '../mixins/infiniteHandler'

export default {
  name: 'Albums',

  mixins: [infiniteHandler],
  
  computed: {

    ...mapGetters({dataTile: 'ALBUMS'}),

    getArtist() {
      return this.$route.query.artist
    },
    
    getData() {
        return this.$lastfm.getTopAlbums
    }, 

    page() { 
        return this.PAGE.albums || 1  
    },

  },
  
   methods: {
    ...mapActions(['LOAD']),

      async loadData() {
        try {
            const response = await this.LOAD([this.getData, this.page, this.getArtist])
            
            this.$store.commit('SET_ALBUMS', [...this.dataTile, ...response.album])
            this.$store.commit('SET_PAGE', { albums: this.page + 1 })

            return true
        } catch (e) {
          this.$store.commit('SET_LOADING', false)
          return e
        }    
      },

      goToPage(i) {
        this.$router.push({name: 'AlbumInfo', query: {'artist': this.dataTile[i].artist.name, 'album': this.dataTile[i].name}})
      }
   },
   
   destroyed() {
     this.$store.commit('SET_ALBUMS', [])
     this.$store.commit('SET_PAGE', { albums: 0 })
   }
 }     
</script>

<style scoped>
h1, h2{
 margin-left: 30px;
 margin-top: 10px;
}
</style>
