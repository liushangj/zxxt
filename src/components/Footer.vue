<template>
    <div class="footer w100p bgd2 textc">
        <div class="_container_ m0auto">
            <div class="textc c333 fs16 bb1705 w100p pb28">
                <i class="braaa pl26 pr26">关于我们</i>
                <i class="braaa pl26 pr26">资讯中心</i>
                <i class="pl26 pr26">新手指引</i>
            </div>
            <p class="c333 fs16 textc pt24 pb3">友情链接</p>
            <div class="links textc">
                <img :src="v" alt="" v-for="(v,k) in links">
            </div>
            <p class="c333 fs20 textc">客服电话 <i class="fs28">400-0000-0000</i></p>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            links:['./../../static/img/1.png','./../../static/img/2.png','./../../static/img/3.png','./../../static/img/4.png','./../../static/img/5.png']

        }
    }
}
</script>

<style scoped>
    .footer{
        padding-top: .48rem;
        padding-bottom: .72rem;
    }
    .links img{
        width: 1.58rem;
        height: .64rem;
        margin-right: .26rem;
    }
</style>






























