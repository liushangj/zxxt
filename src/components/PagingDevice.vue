<template>
    <div class="page fs14">
        <div class="page-center" id="order_pagestring">
            <i class="disabled page-a" @click="handlePage('first')"><<首页</i>
            <i class="disabled page-a pl11" @click="handlePage(-1)"><上一页 </i>
            <i class="num current" ><i v-html="page"></i></i>
            <i class="num" >2</i>
            <i class="disabled page-a" @click="handlePage(1)">下一页></i>
        <!--    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon&#45;&#45;right"></i></el-button>-->
            <!--<a class="disabled page-a" @click="handlePage('last')">末页</a>-->
        </div>
    </div>
</template>

<script>
export default {
    props:['page'],
    data () {
        return {

        }
    },
    methods:{
        handlePage(status){
            this.$emit('handlePage',status)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .page-a{
        font-size: .14rem;
    }
    a.page-a:link{
        color: #333;
    }
    .page .num{
        display: inline-block;
        width: .4rem;
        text-align: center;
        font-family: PingFang-SC-Bold;
    }
    .page .num:hover i,.num.current i{
        color: #00a0e9;
        font-size:.18rem;
        border-bottom: 2px solid #00a0e9;
    }
    /*分页器*/
    .page-center{
        /*width: 100% !important;*/
        text-align: center ;
    }

    .page{
        width: 100%;
    }
    .page i{
        /*width: 20px;/*/
        font-size: .14rem;
        display: inline-block;
        text-align: center;
    }

</style>























