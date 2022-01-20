<template>
    <div>
        <Students/>
    </div>
</template>

<script>
    
    import Students from './components/Student.vue'
    //引入组件
    export default {
        name:'App',
        components:{
            Students
        }
    }
</script>