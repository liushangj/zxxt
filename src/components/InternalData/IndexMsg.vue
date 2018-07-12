<template>
    <div>
        <div class="pt34 clearfix pb30">
            <img src="./../../../static/img/tx.png" alt="" class="disblock w150 h180 fl">
            <div class="fl pl20">
                <div class="lh52 disinblock">
                    <i class="fs18 c333 ffpf" v-html="user_msg.name"></i>
                    <i class="iconfont icon-nanxing  cblue fs16 pl5" v-if="user_msg.sex==1"></i>
                    <i class="iconfont icon-nv cblue fs16 pl5" v-else></i>
                    <i class="cred fs14 pl10" v-html="'［学历：'+user_msg.education+']'"></i>
                </div>
                <div class="w370 lh35 pl10 fs14 c666 bgf5 mb10">
                    <i class="iconfont icon-shouji-copy fs16 c70"></i>
                    <i class="w70 textjustfly disinblock">手机号</i>：
                    <i v-html="user_msg.tel"></i>
                </div>
                <div class="w370 lh35 pl10 fs14 c666 bgf5 mb10">
                    <i class="iconfont icon-icon-test1 fs16 c70"></i>
                    <i class="w70 textjustfly disinblock">身份证号</i>：
                    <i v-html="user_msg.tel"></i>
                </div>
                <div class="w370 lh35 pl10 fs14 c666 bgf5 mb10 postionre">
                    <i class="iconfont icon-icon-test fs16 c70"></i>
                    <i class="w70 textjustfly disinblock">地址</i>：
                    <i v-html="user_msg.tel"></i>
                    <span class="postionab cblue fs12 curpointer right-60" v-if="status==1">
                        <i class="iconfont icon-fujian cblue fs16"></i>
                        附件
                    </span>
                </div>
            </div>
        </div>
        <textarea name="" id="" class="w100p h210 p2216 beee fs14 c333 overyauto" placeholder="其他说明"></textarea>
    </div>

</template>

<script>
    export default {
        components: {},
        data () {
            return {
                user_msg:{
                    name:'王伟忠',
                    sex:1,
                    education:'本科',
                    tel :'1325452415',
                    id_card:'46352619902087222',
                    addr:'成都市青羊区北湖路口'
                },
                status:0//0---基础信息 1---黑名单
            }
        },
        methods:{

        },
        mounted(){
            this.status = this.$route.query.status;
         /*   if(this.status==1){
                this.score = -23;
            }*/
            console.log(this.$route);
        }
    }
</script>

<style>

</style>






























