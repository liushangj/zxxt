<template>
  <div class="_container_ m0auto pb200 pt30">
      <div class="clearfix postionre">
          <div class="fl pl40 pr42 textc bgred2 curpointer pt15 pb17">
              <p class="fs14 cred2">失败操作</p>
              <p class="fs34 ffpf cred2">1023</p>
          </div>
          <el-date-picker
                  class="fr failed_time"
                  v-model="search_time"
                  type="datetimerange"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['12:00:00']">
          </el-date-picker>
      </div>
      <!--记录-->
      <transition name="fade" mode="out-in">
          <div class="pt29 chains_logs minh50vh">
              <TableLog status="2"></TableLog>
              <TableLog status="3" :logs="v" v-for="(v,k) in chains_logs" :key="k"></TableLog>
          </div>
      </transition>
      <PagingDevice @handlePage="handlePage" :page="page" class="pt80"></PagingDevice>

  </div>
</template>

<script>
    import TableLog from './TableLog.vue'
    import PagingDevice from './../PagingDevice.vue'

    export default {
        components: {TableLog,PagingDevice},
        data () {
            return {
                search_time:'',
                page:1,
                chains_logs:[
                    {time:'2018-09-08  12:30',type:'联盟数据交换请求',info:'中三拒绝了你的数据交换请求，数据交换失败中三拒绝了你的数据交换请求，数据交换失败数据交换失败中三拒绝了你的数据交换请求'},
                    {time:'2018-09-08  12:30',type:'联盟数据交换请求',info:'中三拒绝了你的数据交换请求，数据交换失败中三拒绝了你的数据交换请求，数据交换失败'},
                    {time:'2018-09-08  12:30',type:'联盟数据交换请求',info:'中三拒绝了你的数据交换请求，数据交换失败中三拒绝了你的数据交换请求，数据交换失败'}
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
    .failed_time{
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>






























