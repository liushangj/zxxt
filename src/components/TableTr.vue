<template>
    <div class="clearfix pb26 bbeee">
        <div class="clearfix fl">
            <!--
                status : 0---基础 ， 1---黑名单 ， 2---我的查询 ， 4---我的共享-----内部数据
                         5---基础 ,  6---黑名单  ------数据联盟
            -->
            <div class="lh76">
                <span v-html="logs.name" class="c333 fs16 pr45"></span>
                <span class="c999"><i class="pr2">信用评分</i><i v-html="logs.score" class="fs18 fw700 pr5"></i></span>
                <span v-if="logs.level==0" class="corange fs16 ffpf pr5">信用一般</span>
                <span v-else-if="logs.level==1" class="fs16 cgreen ffpf pr5">信用良好</span>
                <span v-else-if="logs.level==2" class="fs16 cblue ffpf pr5">信用极好</span>
                <div class="disinblock" v-show="status!=1">
                    <span class="c999"><i class="pr2">评分时间</i><i v-html="logs.scoretime" class="fs16 c333  fw700" :class="status==4? 'pr56' : 'pr118' "></i></span>
                    <span class="c999" v-show="status!=6"><i class="pr16">守约</i><i v-html="logs.inpromise" class="fs16 c333 fw700 pr4"></i></span>
                    <span class="c999" v-show="status!=6"><i class="pr16">待守约</i><i v-html="logs.topromise" class="fs16 c333 fw700"></i></span>
                </div>
                <div class="disinblock" v-show="status==1">
                    <span class="c999"><i class="pr2">拉黑时间</i><i v-html="logs.scoretime" class="fs16 c333 pr118 fw700"></i></span>
                </div>

            </div>
            <div class="fs12 c999" v-if="status==4">
                <i v-html="'发起申请：'+logs.launch" class="pr2"></i>
                <i v-html="'时间：'+logs.addtime"></i>
            </div>
            <div class="fs12 c999" v-else>
                <i v-html="'添加时间：'+logs.addtime" class="pr2"></i>
                <i v-html="'来源公司：'+logs.soure" v-if="status==3"></i>
            </div>
        </div>
        <div class="mt43 fr" v-if="status==4">
            <i class="fr fs14 cfff w105 lh36 textc disblock bgred3 ml15">拒绝</i>
            <i class="fr fs14 cfff w105 lh36 textc disblock bgblue ml15">共享</i>
            <i class="fr fs14 c333 w105 bd2 lh36 textc disblock">详情</i>
        </div>
        <div class="mt43 fr" v-else-if="status==5 || status==6">
            <i class="fr fs14 cfff w105 lh36 textc disblock bgblue ml15">数据交换</i>
        </div>
        <div class="mt43 fr" v-else>
            <i class="fr fs14 cfff w105 lh36 textc disblock bgred2" v-if="logs.share==0">待共享</i>
            <span class="fr fs14 cred lh36 disblock " v-else-if="logs.share==1">查询失败 <i class="cblue">查看原因 ></i></span>
            <i class="fr fs14 c333 w105 bd2 lh36 textc disblock" v-else @click="handle_detail">详情</i>
        </div>

    </div>
</template>

<script>
export default {
    name: '',
    props : ['logs','status'],
    data () {
        return {

        }
    },
    mounted(){
        console.log('tabletr-status',this.status);
    },
    methods:{
        handle_detail(){
            if(this.status==0){//基础信息详情
                this.$router.push({ path: '/internaldata/base/detail',query:{status:0}});
            }else if(this.status==1){//黑名单详情
                this.$router.push({ path: '/internaldata/blacklist/detail',query:{status:1}});
            }
        }
    }
}
</script>

<style scoped>

</style>






























