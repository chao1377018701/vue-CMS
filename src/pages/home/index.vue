<template>
    <div class="home-container">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000" class="binner-container">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    
</script>

<style lang="less">
    .home-container{
        .binner-container{
            height: 200px;
            .mint-swipe-item{
                &:nth-child(1){
                    background-color: yellow;
                }
                &:nth-child(2){
                    background-color:aqua ;
                }
                &:nth-child(3){
                    background-color:burlywood ;
                }
            }
        }
    }
</style>

