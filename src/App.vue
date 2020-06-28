<template>
  <v-app>
      <v-content>
        <Header id="nav"></Header>
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

<style>

#nav {
  padding: 35px;
  position:-webkit-sticky; position:sticky; top:0;
}

</style>
