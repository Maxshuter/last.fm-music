<template>
  <div class="music">
      <h1>Top tracks</h1>
      <v-layout>
        <v-row>
          <v-col v-for="(track, i) in dataTile" :key="`dataTile${i}`">
              <TileItem :dataTile="track"/>
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
  name: 'Music',
 
  mixins: [infiniteHandler],
  
  computed: {

    ...mapGetters({dataTile: 'TRACKS'}),

    getData() {
        return this.$lastfm.getTopTracks
    }, 

    page() { 
        return this.PAGE.tracks || 1
    },

  },
  
   methods: {
    ...mapActions(['LOAD']),

      async loadData() {
        try {
            const response = await this.LOAD([this.getData, this.page])
            
            this.$store.commit('SET_TRACKS', [...this.dataTile, ...response.track])
            this.$store.commit('SET_PAGE', { tracks: this.page + 1 })
            
            return true
        } catch (e) {
          this.$store.commit('SET_LOADING', false)
          return e
        }    
      },
   },
   
}     
</script>

<style scoped>
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
