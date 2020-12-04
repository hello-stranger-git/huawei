<template>
    <div class="CustomerItem">
        <img class="userImage" :src="cusromerIcon"/>
        <p class="date">19:45:21</p>
        <p class="age">
            <i :class="[sex== 'woman'?'woman':'man','el-icon-user-solid']"></i>
            {{ age }}
        </p>
        <p :class="[count==1?'firstCount':'','count']">
            <span v-if="count!=1">{{ count }}次到店</span>
            <span v-else class="">新客</span>
        </p>
    </div>
</template>
<script>
export default {
    props:['sex','age','count','cusromerIcon']
}
</script>
<style scoped>
    .CustomerItem{
        text-align: center;
        flex: 1;
    }
    .CustomerItem p{
        margin-bottom: 0px;
    }
    .userImage{    
        width: 50px;
        height: 55px;
        border-radius: 5px;
    }
    .date{
        color: #909090;
        font-size: 10px;
    }
    .age{
        font-size: 10px;
    }
    .count{
        font-size: 10px;
    }
    .woman{
        color: #F98181;
    }
    .man{
        color: #2194d1;
    }
    .firstCount{
        background-color: #50a6ff;
        color: #ffffff;
        border-radius: 5px;
        font-size: 10px;
        width: 50px;
        margin: auto;
    }
</style>