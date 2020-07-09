<template>
    <v-skeleton-loader  min-width="300" max-width="360" height="300px" :loading="LOADING" type="image, image">
      <v-card min-width="300" max-width="360" @click="$emit('click')" dark class="card dws mx-auto">
        <v-img 
          :src="dataTile.image[3]['#text']"
          class="white--text align-end blocImg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
          height="300px"/>
          <div class="blocText" >
            <div v-for="(item, i) in items" :key="`items${i}`" :class="{'mx-auto': item.data, text: true} " :title="item.title">
                <v-btn v-if="item.data" fab x-small :color="item.color" class="disable-events">
                  <v-icon class="icon" v-html="item.icon"></v-icon>
                </v-btn>
                {{item.data}}
            </div>
            <v-list-item-title :title="dataTile.name" class="card-title" v-text="dataTile.name"></v-list-item-title> 
          </div>
      </v-card>
    </v-skeleton-loader>
</template>

<script>
 import { mapGetters } from 'vuex'

export default {
    data () {
      return {
        items: [
          {
            color: 'blue',
            icon: 'mdi-headphones',
            title: 'Playcount',
            data: this.dataTile.playcount,
          },
          {
            color: 'red',
            icon: 'mdi-account-music',
            title: 'Listeners',
            data: this.dataTile.listeners,
          } 
        ],
      }
    },

    props: {
      dataTile: {
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

<style >

  .disable-events {
    pointer-events: none
  }

    .card-title {
      position: absolute;
      top: 200px;
      width: 250px;
      border-left: 4px solid #ffb611;
      padding: 0 10px;
      font-size: 20px !important;
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

  .dws:hover .text {
    opacity: 1;
  }

</style>