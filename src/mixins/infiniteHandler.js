//jshint -W033
//import { /* mapActions, */ mapGetters } from 'vuex'
import TileItem from '../components/TileItem'
export default {
    components: { TileItem },
    data() {
        return {
            page: 1
        }
    },
    created() {
        if (!this.dataTile.length) this.loadTile()
    },
    computed: {
        //...mapGetters(['PAGE', 'LOADING']),
        dataTile() { return [] },
          
    },
    methods: {

        loadTile() {
            const {infiniteHandler} = this

            return infiniteHandler()
               
        },

    }
}