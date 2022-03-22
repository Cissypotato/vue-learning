<template>
    <div>
        <h1>I am apple</h1>
        <div>
            <button @click="handleData">emit data</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Apple",
    data() {
        return {
            
        }
    },
    methods:{
        handleData(){
            this.$bus.$emit('receive',666)
        }
    }
}
</script>