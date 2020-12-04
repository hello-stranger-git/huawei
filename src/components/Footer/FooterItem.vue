<template>
    <div class="FooterItem">
        <i :class="icon">
            <p class="footertitle">{{ title }}</p>
        </i>
    </div>
</template>
<script>
export default {
    props:['title','icon']
}
</script>
<style scoped>
    .FooterItem{
        text-align: center;
        background-color: #fbfbfb;
        
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .FooterItem>i{
        font-size: 20px;
    }
    .footertitle{
        font-size: 12px;
        margin-top: 4px;
    }
</style>