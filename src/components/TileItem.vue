<template>
    <v-skeleton-loader  width="300px" height="300px" :loading="LOADING" type="card">
      <v-card dark class="card dws">
        <v-img 
          :src="artist_data.image[4]['#text']"
          class="white--text align-end blocImg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="300px"/>
          <div class="blocText">
            <div v-for="(item, i) in items" :key="`items${i}`" class="text" :title="item.title">
                <v-btn  fab x-small :color="item.color" class="disable-events">
                  <v-icon class="icon" v-html="item.icon"></v-icon>
                </v-btn>
                {{item.data}}
            </div>
            <v-card-title class="card-title" v-text="artist_data.name"></v-card-title> 
          </div>
      </v-card>
    </v-skeleton-loader>
</template>

<script>
 import { mapGetters } from 'vuex'

export default {
    data: function () {
      return {
        items: [
          {
            color: 'red',
            icon: 'mdi-account-music',
            title: 'Listeners',
            data: this.artist_data.listeners,
          }, 
          {
            color: 'blue',
            icon: 'mdi-headphones',
            title: 'Playcount',
            data: this.artist_data.playcount,
          }
        ]
      }

    },

    props: {
      artist_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },

    computed: {
        ...mapGetters(['LOADING'])
    }
}
</script>

<style>

  .disable-events {
    pointer-events: none
  }

    .card-title {
      position: absolute;
      top: 180px;
      width: 250px;
      border-left: 4px solid #ffb611;
      padding: 0 10px;
    } 

  .blocImg {
    overflow: hidden;
    cursor: pointer;
  }

  .dws:hover .blocImg  {
    filter: blur(1px);
    opacity: .5;
  }
  .blocText {
    display: flex;
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
  }
  .text {
    color: #fff;
    text-transform: uppercase;
    padding: 0 10px;
    opacity: 0;
    transition: .5s;
    font-size: 15px;
  }

  .text h2 {
    font-size: 25px;
  }
  .text h2 span {
    color: orange;
    padding-bottom: 3px;
    border-bottom: 2px solid #fff;
  }

  .dws:hover .text {
    opacity: 1;
  }

</style>