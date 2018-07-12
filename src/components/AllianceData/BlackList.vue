<template>
    <div class="">
        <div class="_container_ m0auto pb200">
            <p class="fs16 c333 lh80 fw700 pt5">筛选</p>

            <div class="clearfix pb37 bbeee">
                <el-input
                        class="fl w430"
                        placeholder="输入姓名搜索"
                        suffix-icon="iconfont icon-sousuo"
                        v-model="sea_key">
                </el-input>
            </div>
            <ul class="fs14 pt37 pb76" >
                <li v-for="(v,k) in logs" :key="k">
                    <TableTr :logs="v" status="6"></TableTr>
                </li>
            </ul>
            <PagingDevice @handlePage="handlePage" :page="page"></PagingDevice>
        </div>
    </div>
</template>

<script>
    import ButtonIcon from './../../components/ButtonIcon.vue'
    import TableTr from './../../components/TableTr.vue'
    import PagingDevice from './../PagingDevice.vue'

    export default {
        name: 'alliance_blacklist',
        components: {ButtonIcon,TableTr,PagingDevice},
        data () {
            return {
                sea_key:'',
                page:1,
                logs:[
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'1'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'1'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'1'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'2'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'2'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'2'},
                    {name:'王海生', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0'}
                ]
            }
        },
        methods:{
            handlePage(status){
                if(status=='first' && this.page==1){ return }
                if(status==-1&&this.page==1){return}
                if(status=='first'){
                    this.page=1;
                }else {
                    this.page+=status;
                }
                /*         this.logs = '';
                 this.getInfo('more');*/
            }
        }
    }
</script>

<style>
    .el-input.w430{
        width: 4.3rem;
    }
    input.el-input__inner{
        background: #f5f5f5;
        border: 1px solid #eee;
        height: .45rem;
        line-height: .45rem;
        font-size: .14rem;
        color: #999;
        padding-left: .12rem;
    }
    .el-input__icon.icon-sousou{
        font-size: .24rem;
    }
</style>




























































