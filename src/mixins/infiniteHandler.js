//jshint -W033
import { /* mapActions, */ mapGetters } from 'vuex'
import TileItem from '../components/TileItem'
export default {

    components: { TileItem },

    created() {
        if (!this.dataTile.length) this.loadData()
    },
    computed: {
        ...mapGetters(['PAGE', 'LOADING']),
        dataTile() { return [] },    
    },
    methods: {

        infiniteHandler($state) {
            this.loadData().then(data_is_uploaded => { 
              if (data_is_uploaded) {
                $state.loaded()
                } else {
                  $state.complete()   
                 }
            })
          },
    }
}