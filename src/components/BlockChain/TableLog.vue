<template>
  <div class="chain_logs_item">
      <!--
            status : 0--title1 , 1---body1 , 2--title2 , 3-- body2
      -->
      <div v-if="status==0" class="clearfix w100p bgblue cfff fs12 chain_logs_head lh45">
          <span class="w13p fl">时间</span>
          <span class="w30p fl">Transaction ID</span>
          <span class="w30p fl">类型</span>
          <span class="w25p fl">操作人</span>
      </div>
      <div v-if="status==1" class="clearfix w100p c333 fs14 chain_logs_head chain_logs_body ffpf ">
          <span class="w13p fl" v-html="logs.time"></span>
          <span class="w30p fl overell" v-html="logs.id"></span>
          <span class="w30p fl" v-html="logs.type"></span>
          <span class="w25p fl" v-html="logs.peo"></span>
      </div>


      <div v-if="status==2" class="clearfix w100p bgblue cfff fs12 failed_logs_head lh45">
          <span class="w20p fl">时间</span>
          <span class="w20p fl">类型</span>
          <span class="w55p fl pl10p">公告</span>
      </div>
      <div v-if="status==3" class="clearfix w100p c333 fs14 chain_logs_head failed_logs_body failed_logs_head ffpf ">
          <span class="w20p fl" v-html="logs.time"></span>
          <span class="w20p fl" v-html="logs.type"></span>
          <span class="w55p fl" v-html="logs.info"></span>
      </div>
  </div>
</template>

<script>

    export default {
        name: '',
        props:['status','logs'],
        data () {
            return {

            }
        }
    }
</script>

<style>
    .chain_logs_head .w13p{
        width: 13%;
        text-align: center;
    }
    .chain_logs_head .w30p{
        width: 30%;
        padding: 0 2%;
        text-align: center;
        box-sizing: border-box;
    }
    .chain_logs_head .w25p{
        width: 25%;
        text-align: center;
    }
    .chain_logs_body{
        line-height: .7rem;
    }
    .chains_logs .chain_logs_item:nth-child(2n+1){
        background: #f5f5f5;
    }
    .failed_logs_head .w20p{
        width: 20%;
        text-align: center;
        padding: 0 1%;
        box-sizing: border-box;
    }
    .failed_logs_body{
        display: flex;
        height: .7rem;
    }
    .failed_logs_body span{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        line-height: 1;
    }
    .failed_logs_head .w55p{
        width: 55%;
        text-align: left;
        box-sizing: border-box;
    }
</style>






























