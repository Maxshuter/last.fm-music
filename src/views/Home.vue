<template>
  <div class="home">
      <h1 align="center">Top artists</h1>
      <v-layout>
        <v-row>
          <v-col v-for="(artist, i) in dataTile" :key="`dataTile${i}`">
              <TileItem @click="goToPage(i)" :dataTile="artist"/>
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
  name: 'Home',

  mixins: [infiniteHandler],
  
  computed: {

    ...mapGetters({dataTile: 'ARTISTS'}),
    
    getData() {
        return this.$lastfm.getTopArtists
    }, 

    page() { 
        return this.PAGE.artists || 1  
    },

  },
  
   methods: {
    ...mapActions(['LOAD']),

      async loadData() {
        try {
            const response = await this.LOAD([this.getData, this.page])
            
            this.$store.commit('SET_ARTISTS', [...this.dataTile, ...response.artist])
            this.$store.commit('SET_PAGE', { artists: this.page + 1 })
            
            return true
        } catch (e) {
          this.$store.commit('SET_LOADING', false)
          return e
        }    
      },

      goToPage(i) {
        this.$router.push({name: 'Albums', query: {'artist': this.dataTile[i].name}})
      }
   },    
 }     
</script>

<style scoped>
h1{
  margin: 5px 0;
  text-shadow:  0 0 2em red;
  font-family: Open Sans,Lucida Grande,Helvetica Neue,Helvetica,Arial,Sans-serif;
  font-size: 48px
}
</style>
