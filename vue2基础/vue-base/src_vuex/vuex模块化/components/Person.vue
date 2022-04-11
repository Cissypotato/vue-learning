<template>
    <div>
        <h1>人员列表</h1>
        <p>the last person'name is {{lastPersonName}}</p>
        <div>
            <input type="text" v-model="name">
            <button @click="addPerson">添加</button>
            <button @click="addPersonWang">姓王才添加</button>
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
            return this.$store.state.personAbout.personList
        },
        lastPersonName(){
            return this.$store.getters['personAbout/lastPersonName']
        }
    },
    methods:{
        addPerson(){
            let obj={
                id:nanoid(),
                name:this.name
            }
            if(this.name)  this.$store.commit('personAbout/ADD_PERSON',obj)
           
            this.name=''
        },
        addPersonWang(){
             let obj={
                id:nanoid(),
                name:this.name
            }
            if(this.name) this.$store.dispatch('personAbout/addPersonWang',obj)
            this.name=''
        }
    }
}
</script>