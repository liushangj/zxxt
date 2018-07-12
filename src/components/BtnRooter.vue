<template>
    <div class="inner_root_li cfff fl fs16 lh68">
        <router-link :to="links" v-html="text"></router-link>
    </div>

</template>

<script>
    export default {
        props : ['text','links'],
        data(){
            return{

            }
        },
        methods:{
            handleClick(){

            }
        }
    }
</script>

<style>

    .inner_root{
        position: absolute;
        top: 1.68rem;
        left:  0;
        right: 0;
        margin: 0 auto;
    }
    .inner_root_li a{
        color: #fff;
        width: 1.38rem;
        text-align: center;
        display: block;
    }
    .inner_root_li.active,.inner_root .router-link-active{
        background: rgba(0, 160, 233, 0.5);
        border-radius: 5px 5px 0 0 ;
        font-family: PingFang-SC-Bold;
        font-size: .18rem;
    }
    @media screen and (max-width: 767px) {
        .inner_root{
            top:125px;
        }
        .inner_root_li{
            width: 20%;
            font-size: 18px;
            line-height: 45px;
        }
        .inner_root_li a{
            width: 100%;
        }
        .inner_root_li.active, .inner_root .router-link-active{
            font-size: 20px;
        }
    }
</style>



















