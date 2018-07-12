<template>
    <div class="_container_ m0auto pb200">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="lh80 fs16 fw700 pt15">
            <el-breadcrumb-item :to="{ path: '/internaldata/base' }" class="c666">内部数据</el-breadcrumb-item>
            <el-breadcrumb-item class="c666" :to="{ path: '/internaldata/base/index' }" v-if="status==0">基础信息</el-breadcrumb-item>
            <el-breadcrumb-item class="c666" :to="{ path: '/internaldata/blacklist/index' }" v-if="status==1">黑名单</el-breadcrumb-item>
            <el-breadcrumb-item class="c666">详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="postionre w100p pl303 clearfix h260">
            <div class="postionab left0 top0 w260 h100p bgblue cfff">
                <p class="fs16 pl18 pt22 clearfix pr12">
                    <i class="fl">信用评分</i>
                    <i class="fr bgfff c333 fs14 w103 textc lh35 disblock" v-if="status==1">抹黑</i>
                </p>
                <p class="textc fs64 ffpf lh160" v-html="score"></p>
                <p class="textc fs12">更新：2017.09.08  13:43</p>
            </div>
            <div class="postionab bgf5 w100p h100p"></div>
        </div>
        <ul class="detail_nav textc clearfix fs14  lh80 pt36 bbf5" v-if="status==0">
            <li class="fl w150">
                <router-link to="/internaldata/base/detail/indexmsg" class="c999">
                    <span class="curpointer">基本信息</span>
                </router-link>
            </li>
            <li class="fl w150">
                <router-link to="/internaldata/base/detail/history/1" class="c999">
                    <span class="curpointer">历史贷款</span>
                </router-link>
            </li>
            <li class="fl w150">
                <router-link to="/internaldata/base/detail/history/2" class="c999">
                    <span class="curpointer">运营商数据</span>
                </router-link>
            </li>
            <li class="fl w150">
                <router-link to="/internaldata/base/detail/history/3" class="c999">
                    <span class="curpointer">出行纪录</span>
                </router-link>
            </li>
            <li class="fl w150">
                <router-link to="/internaldata/base/detail/history/4" class="c999">
                    <span class="curpointer">消费偏好</span>
                </router-link>
            </li>
            <li class="fl w150">
                <router-link to="/internaldata/base/detail/history/5" class="c999">
                    <span class="curpointer">社交行为</span>
                </router-link>
            </li>
            <li class="fl w150">
                <router-link to="/internaldata/base/detail/history/6" class="c999">
                    <span class="curpointer">第三方征信凭证</span>
                </router-link>
            </li>
            <li class="fl w150">
                <router-link to="/internaldata/base/detail/history/7" class="c999">
                    <span class="curpointer">其他数据</span>
                </router-link>
            </li>
        </ul>
        <ul class="detail_nav textc clearfix fs14  lh80 pt36 bbf5" v-if="status==1">
            <li class="fl w150">
                <router-link to="/internaldata/blacklist/detail/indexmsg" class="c999">
                    <span class="curpointer">基本信息</span>
                </router-link>
            </li>
            <li class="fl w150">
                <router-link to="/internaldata/blacklist/detail/history/8" class="c999">
                    <span class="curpointer">原因说明</span>
                </router-link>
            </li>

        </ul>
        <transition name="fade" mode="out-in">
            <router-view/>

        </transition>
    </div>
</template>

<script>
//    import IndexMsg from './../../components/InternalData/IndexMsg.vue'

    export default {
        name: '',
        components: {},
        data () {
            return {
                status:0 ,//0---基础信息 1---黑名单
                score:123
            }
        },
        watch:{
            '$route': function(to, from) {
//                console.log('to',);
//                console.log(this.status);
            }
        },
        methods:{

        },
        mounted(){
            this.status = this.$route.query.status;
            if(this.status==1){
                this.score = -23;
            }
            console.log(this.status);
        }
    }
</script>

<style>
    .el-breadcrumb.lh80{
        line-height: .8rem;
    }
    .detail_nav .router-link-active span{
        border-bottom: .06rem solid #00a0e9;
        font-size: .16rem;
        color: #333;
        display: inline-block;
        line-height: .8rem;
    }
</style>






























