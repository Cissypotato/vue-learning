<template>
    <div>
        <ul>
            <li>编号：{{$route.query.id}}</li>
            <li>名字：{{$route.query.name}}</li>
        </ul>

    </div>
</template>
<script>
export default {
    name:"Detail"
}
</script>