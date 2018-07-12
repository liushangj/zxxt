<template>
    <div class="_container_ m0auto pb200 sharedata">
        <div class="pt50 pb32">
            <router-link to="/internaldata/datashare/myinquire" class="w124 c333 lh40 textc fs16 mr38 disinblock trans3">
                我的查询
            </router-link>
            <router-link to="/internaldata/datashare/myshare" class="w124 c333 lh40 textc fs16 mr38 disinblock trans3">
                我的共享
            </router-link>
        </div>

        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
//
    export default {
        name: 'internaldata_datashare',
        data () {
            return {

            }
        }
    }
</script>

<style>
    .sharedata .router-link-active{
        background: #00a0e9;
        color: #fff;
        border-radius: 1px;
    }
</style>






























