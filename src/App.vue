<template>
  <v-app>
      <Header id="nav"></Header>
      <v-content>
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

