<template>
    <v-app>
        <v-app-bar dark absolute color="#a80303">
            <!-- <v-toolbar color="#f75959"></v-toolbar> -->
            <img id="logo" src="../assets/logo_header.png" alt="LAST FM">
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-for="(item, i) in menuItems" text :key="`menuitem${i}`" :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </v-app>
</template>

<script>
    export default {
        computed: {
            menuItems() {
                return [
                    {
                        title: 'HOME',
                        icon: 'mdi-home',
                        route: '/performers'
                    },

                    {
                        title: 'MUSIC',
                        icon: 'mdi-music',
                        route: '/music'
                    }
                ]
            }
        }
        
    }
</script>

<style scoped>
#logo{
    block-size: 50%;
}
</style>