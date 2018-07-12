<template>
    <div class="internaldata topbg minh100p pt236">
        <TopBg></TopBg>
        <div class="clearfix inner_root _container_">
            <BtnRooter text="基础信息" links="/internaldata/base"></BtnRooter>
            <BtnRooter text="黑名单" links="/internaldata/blacklist"></BtnRooter>
            <BtnRooter text="评分建模" links="/internaldata/grade"></BtnRooter>
            <BtnRooter text="数据共享" links="/internaldata/datashare"></BtnRooter>
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
        name: 'internaldata',
        components: {BtnRooter,TopBg},
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style>

</style>






















