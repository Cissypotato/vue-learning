



const countAbout = {
    namespaced:true,
    actions: {
        addOdd(context, val) {//context相当于微型store
            //    console.log(context,val,'addOdd')
            if (context.state.sum % 2) {
                context.commit('ADD', val)
            }
        },
        addWait(context, val) {
            setTimeout(() => {
                context.commit('ADD', val)
            }, 1000)
        }
    },
    mutations: {
        ADD(state, val) {
            state.sum += val
        },
        SUBTRACT(state, val) {
            state.sum -= val
        },
    },
    state: {
        sum: 0,
        fruit: 'durian',
        vegetable: 'patota',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
const personAbout = {
    namespaced:true,
    actions: {},
    mutations: {
        ADD_PERSON(state, val) {
            state.personList.push(val)
        }
    },
    state: {
        personList: [{ id: '1', name: 'jack' }]
    },
    getters: {
       
    }
}








import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})