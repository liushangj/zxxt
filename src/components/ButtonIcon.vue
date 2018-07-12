<template>
    <div class="fs14 disinblock w120 textc">
        <i v-html="text" class="fs14 c333 lh40 "></i>
        <i class="iconfont fs14 c31 lh40 scale17 pl23" :class="icon"></i>
    </div>
</template>

<script>
    export default {
        props : ['text','icon'],
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style>
    .scale17{
        display: inline-block;
        transform: scale(1,.7);
        font-size: .12rem;
    }

</style>



















