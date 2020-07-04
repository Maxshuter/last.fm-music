<template>
    <div id="header">
        <v-app-bar app dark color="#a80303">
            <img id="logo" src="../assets/logo_header.png" alt="LAST FM">
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-for="(item, i) in menuItems" text :key="`menuitem${i}`" :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
            <v-progress-linear id="load" v-show="LOADING" :active="LOADING" :indeterminate="LOADING" background-opacity="0" absolute bottom color="white accent-4"></v-progress-linear>         
        </v-app-bar>
    </div>
</template>

<script>
 import { mapGetters } from 'vuex'

    export default {
               computed: {
                    menuItems() {
                        return [
                            {
                                title: 'HOME',
                                icon: 'mdi-home',
                                route: '/'
                            },

                            {
                                title: 'MUSIC',
                                icon: 'mdi-music',
                                route: '/music'
                            }
                        ]
                    },

                    ...mapGetters(['LOADING'])
        },
    }
</script>

<style scoped>
    #logo {
        block-size: 50%;
    } 

</style>