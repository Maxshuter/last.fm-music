<template>
  <div class="album">
      <h1 align="center">
        <v-icon class="icon" v-html="'mdi-microphone-variant'"></v-icon>
        {{getArtist}}
        <v-icon class="icon" v-html="'mdi-microphone-variant'"></v-icon>
      </h1>
      <h2  align="center" style="color:grey">{{getAlbum | uppercase}}</h2>
      <v-container >
        <v-row>
           <v-col align="center" >
            <h3 style="color:grey" >{{getPublished}}</h3>
            <v-skeleton-loader class="item" width="400px" min-height="400px" :loading="LOADING" type="image, image, list-item-avatar">
                <v-card class="card" width="400px" height="400px" elevation="24">
                    <v-img 
                    :src="getImg"
                    class="white--text align-end"
                    width ="400px" height="400px"/>
                </v-card>
                <v-row  class="mx-auto disable-events">
                  <v-col v-for="(item, i) in items" :key="i" style="color:grey" :title="item.title">
                    <v-btn dark fab madium :color="item.color">
                      <v-icon class="icon" v-html="item.icon"></v-icon>
                    </v-btn>
                    {{item.data}}
                  </v-col>        
                </v-row>    
            </v-skeleton-loader>
          </v-col>
          <v-col>
            <v-skeleton-loader width="500px" :loading="LOADING" type="table">
                <v-data-table :headers="headers" :items="getTracks"></v-data-table>
            </v-skeleton-loader>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import infiniteHandler from '../mixins/infiniteHandler'

export default {
    
  name: 'AlbumInfo',

  mixins: [infiniteHandler],
  
  computed: {

    headers(){
        return [
          {text: 'Name', value: 'name' },
          {text: 'Duration', value: 'duration' }
        ]
    },

    items() {
         return [
           {
            color: 'blue',
            icon: 'mdi-headphones',
            title: 'Playcount',
            data: this.album.playcount,
           },
           {
            color: 'red',
            icon: 'mdi-account-music',
            title: 'Listeners',
            data: this.album.listeners,
           } 
         ]               
   },

    ...mapGetters({album: 'ALBUM'}),
    
    getPublished(){
      return {...this.album.wiki}.published
    },

    getImg() {
      return {...{...this.album.image}[4]}['#text']
    },

    getTracks() {
      return {...this.album.tracks}.track
    },

    getArtist() {
      return this.$route.query.artist
    },

    getAlbum() {
      return this.$route.query.album
    },

    getData() {
        return this.$lastfm.getAlbumInfo
    }, 

  },
  
   methods: {
    ...mapActions(['LOAD']),

      async loadData() {
        try {
            const response = await this.LOAD([this.getData, this.getArtist, this.getAlbum])
            
            this.$store.commit('SET_ALBUM', response)

            return true
        } catch (e) {
          this.$store.commit('SET_LOADING', false)
          return e
        }    
      },
   }
 }     
</script>

<style scoped>
.card{
  margin-bottom: 20px;
}
.item {
  font-size: 20px !important;
}
h1, h2{
    margin-left: 30px;
    margin-top: 10px;
}
</style>
