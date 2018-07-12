<template>
  <div class="_container_ m0auto pb200 pt30">
      <div class="clearfix pb29">
          <div class="w170 textc fl afterline_s postionre">
              <p class="c333 fs14 lh40">非黑名单录入</p>
              <p class="fs34 ffpf">2124</p>
          </div>
          <div class="w170 textc fl afterline_s postionre">
              <p class="c333 fs14 lh40">黑名单录入</p>
              <p class="fs34 ffpf">2124</p>
          </div>
          <div class="w170 textc fl afterline_s postionre">
              <p class="c333 fs14 lh40">信息查询</p>
              <p class="fs34 ffpf">2124</p>
          </div>
          <div class="w170 textc fl afterline_s postionre">
              <p class="c333 fs14 lh40">数据分享</p>
              <p class="fs34 ffpf">2124</p>
          </div>
          <div class="fr pl40 pr42 textc bgred2 curpointer pt15 pb17" @click="$router.push({path:'/blockchain/browse/ailureopera'})">
              <p class="fs14 cred2">失败操作 ></p>
              <p class="fs34 ffpf cred2">1023</p>
          </div>
      </div>

      <div class="clearfix chains w100p" @click="handle_nodes">
          <div class="chains_name " v-for="(v,k) in nodes" v-html="v.name" :key="k" :data-chain_id="k"></div>
      </div>

      <!--数据明细-->
      <div class="clearfix">
          <i class="fl c333 lh80 fs16">数据明细</i>
          <i class="c333 fl fs28 ffpf lh80 pl20" v-html="nodes[chain_id].name"></i>
          <el-date-picker
                  class="fr chains_time"
                  v-model="search_time"
                  type="datetimerange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00']">
          </el-date-picker>
      </div>

      <!--记录-->
      <transition name="fade" mode="out-in">
          <div class="pt22 chains_logs pb97 minh50vh">
              <TableLog status="0"></TableLog>
              <TableLog status="1" :logs="v" v-for="(v,k) in chains_logs" :key="k"></TableLog>
          </div>
      </transition>

      <PagingDevice @handlePage="handlePage" :page="page"></PagingDevice>

  </div>
</template>

<script>
    import TableLog from './TableLog.vue'
    import PagingDevice from './../PagingDevice.vue'

    export default {
        components: {TableLog,PagingDevice},
        data () {
            return {
                chain_id:0,
                page:1,
                nodes:[
                    {name:'#001',id:0},
                    {name:'#002',id:1},
                    {name:'#003',id:2},
                    {name:'#004',id:3},
                    {name:'#005',id:4},
                    {name:'#006',id:5}
                ],
                search_time:"",
                chains_logs:[
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'},
                    {time:'2018-05-02  12:30',id:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',type:'数据录入',peo:'DFKJFKD'}
                ]
            }
        },
        methods:{
            handle_nodes(e){
                if(e.target && e.target.nodeName=='DIV'){
                    this.chain_id = e.target.dataset.chain_id;
                }
            },
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
    .chains .chains_name:first-child{
        margin-left: 0;
    }
    .chains .chains_name:first-child::before{
        width: 0;
        height: 0;
    }
    .chains_name{
        width: 13%;
        padding: 5% 0 ;
        border: 1px solid #239aee;
        color: #239aee;
        font-size: .3rem;
        text-align: center;
        /*line-height: 1.6rem;*/
        float: left;
        position: relative;
        margin-left: 4%;
        margin-bottom: .2rem;
        font-family: PingFang-SC-Bold;
        cursor: pointer;
    }
    .chains_name::before{
        content: '';
        width: 32%;
        height: 1px;
        background: #239aee;
        position: absolute;
        left: -32%;
        top:0;
        bottom: 0;
        margin: auto;
    }
    .chains_time.el-range-editor.el-input__inner{
        margin-top: .1rem;
    }
</style>






























