export default {
    namespaced:true,
    actions: {
        addPersonWang(context,val){
            if(val.name.indexOf('王')===0){
                context.commit('ADD_PERSON',val)
            }else{
                window.alert('姓王的人才能被添加')
            }
        }
    },
    mutations: {
        ADD_PERSON(state, val) {
            state.personList.push(val)
        }
    },
    state: {
        personList: [{ id: '1', name: 'jack' }]
    },
    getters: {
       lastPersonName(state){
           return state.personList[state.personList.length-1].name
       }
    }
}