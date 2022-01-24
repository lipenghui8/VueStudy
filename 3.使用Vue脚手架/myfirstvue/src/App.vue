<template>
    <div class="container">
        <Count/>
    </div>
</template>

<script>
    
    import Count from './components/Count.vue'
    //引入组件
    export default {
        name:'App',
        components:{
            Count
        },
        
    }
</script>
<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
    .footer{
        display: flex;
        justify-content: space-between;
    }
    h2{
        text-align: center;
    }
</style>