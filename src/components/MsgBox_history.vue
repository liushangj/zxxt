<template>
  <div class="borrow_history_item" :class="mlclass">
      <!--
        status --- 1--还款中  0----已还款  2---已逾期
      -->
      <img src="./../../static/img/hkz.png" alt="" v-if="data.status==1">
      <img src="./../../static/img/yhk.png" alt="" v-else-if="data.status==0">
      <img src="./../../static/img/yyq.png" alt="" v-else>
      <p class="c333 fs20 lh80 ffpf pb20" v-html="data.name">中国银行借款</p>
      <p class="fs12 c999 lh20" v-html="'借贷时间：'+data.real_begin"></p>
      <p class="fs12 c999" v-html="'还款到期：'+data.real_end"></p>
      <i class="el-icon-delete" v-if="isdel" @click="handle_del(data.id)"></i>
  </div>
</template>

<script>

    export default {
        name: '',
        props:['status','mlclass','isdel','data','index'],
        data () {
            return {

            }
        },
        methods:{
            handle_del(id){
                this.$emit('handle_del',this.status,this.index,id)
            }
        }
    }
</script>

<style>
    .borrow_history .borrow_history_item:nth-child(1){
        margin-left: 0;
    }
    .borrow_history_item{
        position: relative;
        /*width: 2.16rem;*/
        /*height: 1.65rem;*/
        padding: 0 .5rem .3rem .15rem;
        border: 1px solid #e5e5e5;
        float: left;
    }
    .borrow_history_item img{
        position: absolute;
        top:0;
        right: .1rem;
        width: .41rem;
        height: .47rem;
    }
    .borrow_history_item .el-icon-delete{
        font-size: .16rem;
        position: absolute;
        bottom: .13rem;
        right: .14rem;
        color: #898989;
    }
</style>






























