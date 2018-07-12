<template>
  <div class="_container_ m0auto pb200 pt76">
      <div class="clearfix jur_head bgbf fs12 cfff lh45">
          <span class="w10p fl">用户名</span>
          <span class="w36p fl">token</span>
          <div class="fl  jur_all_token postionre">
              <i class="el-icon-caret-left fs16 cfff left0" @click="handle_chains_trans('-1')"></i>
              <div class="w100p overhidden chains_outer">
                  <div class="clearfix postionre chains_trans trans3" :style="{width :chains_ul_width+'px',left:chains_left+'px'}">
                      <span v-for="(v,k) in nav_tokens" v-html="v.name" :style="'width :'+chains_item_width+'px'"></span>
                  </div>
              </div>
              <i class="el-icon-caret-right fs16 cfff" @click="handle_chains_trans('1')"></i>
          </div>
      </div>
      <div class="pb84">
          <div class="clearfix jur_head jur_body" v-for="(v,k) in token_logs" :key="k">
              <span class="w10p fl overell" v-html="v.username"></span>
              <span class="w36p fl overell" v-html="v.token"></span>
              <div class="fl  jur_all_token postionre">
                  <div class="w100p overhidden">
                      <div class="clearfix postionre chains_trans_switch trans3" :style="{width :chains_ul_width+'px',left:chains_left+'px'}">
                          <el-switch v-model="v2.status" v-for="(v2,k2) in v.nav_tokens" :key="k2" :style="'width :'+chains_item_width+'px'"></el-switch>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <PagingDevice @handlePage="handlePage" :page="page"></PagingDevice>

  </div>
</template>

<script>
    import PagingDevice from './../PagingDevice.vue'

    export default {
        name: '',
        components: {PagingDevice},
        data () {
            return {
                page:1,
                chains_outer_width:'',
                chains_item_width:'',
                chains_ul_width:'',
                isinout:false,
                chains_left:0,
                chains_current:3,
                nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ],
                token_logs:[
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                        {name:'区块链通道A',id:'0',status:false},
                        {name:'区块链通道B',id:'1',status:false},
                        {name:'区块链通道C',id:'2',status:false},
                        {name:'区块链通道D',id:'3',status:true},
                        {name:'区块链通道E',id:'4',status:true},
                        {name:'区块链通道F',id:'5',status:true},
                        {name:'区块链通道G',id:'6',status:true},
                        {name:'区块链通道H',id:'7',status:true},
                        {name:'区块链通道I',id:'8',status:true},
                        {name:'区块链通道J',id:'9',status:true},
                        {name:'区块链通道K',id:'10',status:true},
                        {name:'区块链通道L',id:'11',status:true},
                        {name:'区块链通道M',id:'12',status:true}
                    ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                        {name:'区块链通道A',id:'0',status:false},
                        {name:'区块链通道B',id:'1',status:false},
                        {name:'区块链通道C',id:'2',status:false},
                        {name:'区块链通道D',id:'3',status:true},
                        {name:'区块链通道E',id:'4',status:true},
                        {name:'区块链通道F',id:'5',status:true},
                        {name:'区块链通道G',id:'6',status:true},
                        {name:'区块链通道H',id:'7',status:true},
                        {name:'区块链通道I',id:'8',status:true},
                        {name:'区块链通道J',id:'9',status:true},
                        {name:'区块链通道K',id:'10',status:true},
                        {name:'区块链通道L',id:'11',status:true},
                        {name:'区块链通道M',id:'12',status:true}
                    ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]},
                    {username:'杨维张',token:'1233323567818944823489988473kdj1233323567818944823489988473kdj...',nav_tokens:[
                    {name:'区块链通道A',id:'0',status:false},
                    {name:'区块链通道B',id:'1',status:false},
                    {name:'区块链通道C',id:'2',status:false},
                    {name:'区块链通道D',id:'3',status:true},
                    {name:'区块链通道E',id:'4',status:true},
                    {name:'区块链通道F',id:'5',status:true},
                    {name:'区块链通道G',id:'6',status:true},
                    {name:'区块链通道H',id:'7',status:true},
                    {name:'区块链通道I',id:'8',status:true},
                    {name:'区块链通道J',id:'9',status:true},
                    {name:'区块链通道K',id:'10',status:true},
                    {name:'区块链通道L',id:'11',status:true},
                    {name:'区块链通道M',id:'12',status:true}
                ]}
                ]
            }
        },
        mounted(){
            this.chains_outer_width = document.getElementsByClassName('chains_outer')[0].clientWidth;
            this.chains_item_width = this.chains_outer_width/4;
            this.chains_ul_width = this.chains_item_width * this.nav_tokens.length;
            this.isinout = this.chains_outer_width < this.chains_ul_width ? true : false;
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
            },
            handle_chains_trans(status){//切换通道
                if(!this.isinout) { return }
                if(status==1){
                    /*console.log(this.chains_current);
                    console.log(this.nav_tokens.length-1);*/
                    if(this.chains_current>=this.nav_tokens.length-1){ return }//已经是最后一个
                    this.chains_left = -this.chains_item_width * (this.chains_current-2);
                    this.chains_current++ ;
                }else{
                    if(this.chains_current==3){ return }//已经是第一个
//                    console.log(this.chains_current);
                    this.chains_left = -this.chains_item_width * (this.chains_current-4);
//                    console.log(this.chains_left);
                    this.chains_current -- ;
                }
            }
        }
    }
</script>

<style>
    .jur_head .w10p{
        width: 10%;
        text-align: center;
    }
    .jur_head .w36p{
        width: 36%;
        text-align: center;
    }
    .jur_all_token{
        width: 54%;
        overflow-x: hidden;
        padding-left: .17rem;
        padding-right: .38rem;
    }
    .jur_all_token span,.jur_all_token .el-switch{
        text-align: center;
        display: inline-block;
    }
    .jur_all_token i{
        position: absolute;
        top:0;
        bottom: 0;
        line-height: .45rem;
    }
    .jur_all_token .el-icon-caret-right{
        right: .21rem;
    }
    .jur_body{
        line-height: .83rem;
        border-bottom: 1px solid #eee;
    }
    .jur_all_token .el-switch .el-switch__core{
        width: .7rem !important;
        height: .28rem;
        border-radius: 14px;
    }
    .jur_all_token .el-switch__core:after{
        width: .24rem;
        height: .24rem;
    }
    .jur_all_token .el-switch.is-checked .el-switch__core::after{
        margin-left: -.25rem;
        top: .01rem;
    }
</style>






























