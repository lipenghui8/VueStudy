<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            getStudents(){
                axios.get('http://localhost:5000/students').then(
                    response=>{
                        console.log('请求成功',response.data);
                    },
                    error=>{
                        console.log('请求失败！',error.message)
                    }
                )
            }
        },
    }
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>