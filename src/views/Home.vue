<template>
  <div class="home">
      <h1>Artists</h1>
      <v-layout row wrap>
        <v-flex v-for="artist in ARTISTS" :key="artist.name">
             <TileItem :artist_data="artist"/>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import TileItem from '@/components/TileItem.vue'

export default {
  name: 'Home',
  components: {
    TileItem
   
  },

  computed: {
    ...mapGetters(['ARTISTS']),

     getData() {
          return this.$lastfm.getTopArtists
     }, 
  },

   mounted() {
      this.$store.dispatch('SET_ARTISTS', this.getData)
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
