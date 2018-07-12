<template>
    <div class="internaldata topbg minh100p pt236">
        <TopBg></TopBg>
        <div class="clearfix inner_root _container_">
            <BtnRooter text="基础信息" links="/alliance/base"></BtnRooter>
            <BtnRooter text="黑名单" links="/alliance/blacklist"></BtnRooter>
        </div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>

    </div>
</template>

<script>
    import BtnRooter from './../components/BtnRooter.vue'
    import TopBg from './../components/TopBg.vue'

    export default {
        name: 'alliancedata',
        components: {BtnRooter,TopBg},
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{
            getInfo(){//获取数据----------status：1--pc，2--app，3--wechat

            }
        }
    }
</script>

<style>

</style>






















