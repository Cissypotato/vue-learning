<template>
    <div>
        <ul>
            <li>编号：{{$route.params.id}}</li>
            <li>名字：{{$route.params.name}}</li>
        </ul>

    </div>
</template>
<script>
export default {
    name:"Detail"
}
</script>