<template>
    <div>
        <button @click="getDom">获取dom</button>
        <h1 ref="dog">汪汪汪</h1>
        <Cat ref="cat" />
    </div>
</template>

<script>
import Cat from "./components/Cat.vue"
export default {
    name:'App',
    components:{Cat},
    methods: {
        getDom(){
            console.log('this.$refs.dog',this.$refs.dog)
            console.log('this.$refs.cat',this.$refs.cat)
            console.log('this.$refs.cat.miaow',this.$refs.cat.miaow)
        }
    },
}
</script>

<style>

</style>