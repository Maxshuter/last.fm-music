<template>
  <div class="home">
      <h1>Top artists</h1>
      <v-layout row wrap>
        <v-flex v-for="(artist, i) in dataTile" :key="`dataTile${i}`">
             <TileItem :artist_data="artist"/>
        </v-flex>
      </v-layout>
      <infinite-loading  @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import TileItem from '@/components/TileItem.vue'
import infiniteHandler from '../mixins/infiniteHandler'

export default {
  name: 'Home',
  components: {
    TileItem,
  },

  mixins: [infiniteHandler],
  
  computed: {

    ...mapGetters({dataTile: 'ARTISTS'}),
    ...mapActions(['LOAD']),

     getData() {
          return this.$lastfm.getTopArtists
     }, 

 /*    page() { 
          return this.$store.getters.PAGE || 1
      }, */

  },
  
   methods: {
      async infiniteHandler($state) {
         const response = await this.$store.dispatch('LOAD', [this.getData, this.page])
        
        console.log(response.artist)

            if (response.artist.length) {
               this.$store.commit('SET_ARTISTS', this.page > 1 ? [...this.dataTile, ...response.artist] : response.artist)
               //this.$store.commit('SET_PAGE', +response['@attr'].page + 1)
               this.page++
               $state.loaded()
            } else {
               $state.complete();
           }

      },
   }  
 }     
</script>

<style scoped>
#load{
  margin-bottom: 20px;
}
  h1{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  text-shadow:  0 0 2em red;
  font-family: Open Sans,Lucida Grande,Helvetica Neue,Helvetica,Arial,Sans-serif;
  font-size: 48px
}
</style>
