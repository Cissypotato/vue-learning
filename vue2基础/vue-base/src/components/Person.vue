<template>
    <div>
        <h1>人员列表</h1>
        <div>
            <input type="text" v-model="name">
            <button @click="addPerson">添加</button>
        </div>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>
<script>
import {nanoid} from 'nanoid'
export default {
    name:"Person",
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        }
    },
    methods:{
        addPerson(){
            let obj={
                id:nanoid(),
                name:this.name
            }
            if(this.name)  this.$store.commit('ADD_PERSON',obj)
           
            this.name=''
        }
    }
}
</script>