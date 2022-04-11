












import Vue from "vue"
import Vuex from "vuex"

import countAbout from './countAbout'
import personAbout from './personAbout'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})