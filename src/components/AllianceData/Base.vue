<template>
    <div class="">
        <div class="_container_ m0auto pb200">
            <p class="fs16 c333 lh80 fw700 pt5">筛选</p>

            <div class="clearfix pb37 bbeee search">
                <el-input
                        class="fl w430"
                        placeholder="输入姓名搜索"
                        suffix-icon="iconfont icon-sousuo"
                        v-model="sea_key">
                </el-input>
                <!--<ButtonIcon text="守约中" icon="icon-jt" class="fr be5 "></ButtonIcon>-->
                <el-select v-model="ispro" placeholder="请选择" class="fr w120 search_select ml16 h49">
                    <el-option
                            v-for="item in ispro_option"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>

                <div class="fr fs14 c999 be5 ml16 pl18 lh45 ">
                    <span class="disinblock">守约次数</span>
                    <el-select v-model="pronum" placeholder="请选择" class="fr w120 search_select bnone">
                        <el-option
                                v-for="item in pronum_option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="fr fs14 c999 be5 ml16 pl18 pr30">
                    <span class="disinblock">评估时间</span>
                    <!--<ButtonIcon text="一天内" icon="icon-jt"></ButtonIcon>-->
                    <el-date-picker
                            class="search_time"
                            v-model="time"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </div>
                <el-select v-model="credit" placeholder="请选择" class="fr w120 search_select h49">
                    <el-option
                            v-for="item in credit_option"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <ul class="fs14 pb76" >
                <li v-for="(v,k) in logs" :key="k">
                    <TableTr :logs="v" :status="5"></TableTr>
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
        name: 'alliance_base',
        components: {ButtonIcon,TableTr,PagingDevice},
        data () {
            return {
                sea_key:'',
                page:1,
                credit_option: [{//信用排序
                    value: '信用升序',
                    label: '信用升序'
                }, {
                    value: '信用降序',
                    label: '信用降序'
                }],
                credit:'信用升序',//信用
                pronum_option: [{//信用排序
                    value: '升序',
                    label: '升序'
                }, {
                    value: '降序',
                    label: '降序'
                }],
                pronum:'升序',//守约次数
                ispro:'',//守约中
                ispro_option: [{//是否守约
                    value: '守约中',
                    label: '守约中'
                }, {
                    value: '未守约',
                    label: '未守约'
                }],
                time:'',//评估时间
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
        mounted(){

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
    .search .el-input__icon{
        line-height: .4rem;
    }
    .search_select .el-input{
        font-size: .14rem;
    }
    .search_select .el-input__inner{
        border-radius: 0;
        padding-right: 20px;
        color: #333;
        background: none;
        border: 1px solid #e5e5e5;
    }
    .search_select .el-icon-arrow-up:before{
        content: "\E60C";
        color: #333;
    }
    .search_select .el-input__suffix{
        right: 0;
    }
    .search_select .el-select .el-input .el-select__caret{
        font-size: .16rem;
    }
    .bnone input.el-input__inner{
        border-color:#fff ;
    }
    .search_time .el-icon-date{
        display: none;
    }
    .search_time.el-date-editor.el-input{
        width: 1rem;
    }
    .search_time.el-input--prefix .el-input__inner{
        padding: 0;
        border: none;
        background: none;
        text-align: center;
    }
    .search_time .el-input__suffix{
        right: -.3rem;
    }
    .h49 input.el-input__inner{
        height: .49rem;
    }
</style>




























