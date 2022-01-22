<template>
    <div>
        <Students/>
        <Cars/>
    </div>
</template>

<script>
    
    import Students from './components/Student.vue'
    import Cars from './components/Car.vue'
    //引入组件
    export default {
        name:'App',
        components:{
            Students,
            Cars
        }
    }
</script>