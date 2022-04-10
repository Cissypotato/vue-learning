

/**actions 响应组件中的动作 */
//有业务逻辑的就写在actions里面
const actions={
    addOdd(context,val){//context相当于微型store
    //    console.log(context,val,'addOdd')
       if(context.state.sum%2){
           context.commit('ADD',val)
       }
    },
    addWait(context,val){
        setTimeout(()=>{
            context.commit('ADD',val)
        },1000)
    }
}

/**mutations 操作数据（state） */
//没有业务逻辑可以直接调用mutations
//里面的方法用大写
const mutations={
    ADD(state,val){
        state.sum+=val
    },
    SUBTRACT(state,val){
        state.sum-=val
    }

}

/**用于state中的数据加工，与computed的作用类似 */
const getters={
    bigSum(state){
        return state.sum*10
    }
}

/**存储数据 */
const state={
    sum:0,
    fruit:'durian',
    vegetable:'patota'
}



import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})