<template>
    <div class="internaldata topbg minh100p pt236">
        <TopBg></TopBg>
        <div class="clearfix inner_root _container_">
            <BtnRooter text="账户信息" links="/usercenter/account"></BtnRooter>
            <BtnRooter text="消息中心" links="/usercenter/msg"></BtnRooter>
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
        name: 'blockchain',
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













































