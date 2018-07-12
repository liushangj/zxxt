<template>
  <div class="_container_ m0auto pt64 usercenter pb200">
      <span class="w150 cfff lh36 fs16 pl10 bgblue disblock">基本信息</span>
      <div class="clearfix pt36 pb60">
          <img :src="avator" alt="">
          <div class="fl c333 pt20">
              <p><i class="fs18 ffpf pr4">用户账号名</i><i class=" textc fs12 lh25 bd2 disinblock pl5 pr05">企业用户</i></p>
              <p class="fs14 c999 pt13">token:1736873737283</p>
          </div>
      </div>
      <span class="w150 cfff lh36 fs16 pl10 mb34 bgblue disblock">账户安全</span>
      <div class="beee clearfix w100p pr24 pl62">
          <div class="user_msg clearfix bbeee">
              <i class="iconfont icon-mail"></i>
              <i class="fs14 c333 fl w126">企业邮箱：</i>
              <i class="fs16 c999 fl ffpf w300">17637484948@163.com</i>
              <i class="fs14 c333 fl">已绑定</i>
              <i class="fs14 fr cblue" @click="handle_info('email')">修改 ></i>
          </div>
          <div class="user_msg clearfix bbeee">
              <i class="iconfont icon-shouji-copy"></i>
              <i class="fs14 c333 fl w126">手机号：</i>
              <i class="fs16 c999 fl ffpf w300">18270204719</i>
              <i class="fs14 c333 fl">已绑定</i>
          </div>
          <div class="user_msg clearfix">
              <i class="iconfont icon-mimaicon"></i>
              <i class="fs14 c333 fl w126">登录密码：</i>
              <i class="fs16 c999 fl ffpf w300">*******</i>
              <i class="fs14 c333 fl">已绑定</i>
              <i class="fs14 fr cblue" @click="handle_info('pwd')">修改 ></i>
          </div>
      </div>
      <ChangePwd @handle_click="handle_pwd" v-show="pwd_change_show" :status="status"></ChangePwd>

  </div>
</template>

<script>
    import ChangePwd from './../ChangePwd.vue'

    export default {
        components: {ChangePwd},
        data () {
            return {
                avator:'./../../../static/img/tx.png',
                pwd_change_show:false,
                status:''
            }
        },
        methods:{
            handle_pwd(){//忘记密码
                this.pwd_change_show = !this.pwd_change_show;
            },
            handle_info(status){//弹框
                this.status = status;
                this.pwd_change_show=!this.pwd_change_show;
            }
        }
    }
</script>

<style>
    .usercenter img{
        width: 1.49rem;
        height: 1.49rem;
        float: left;
        margin-right: .35rem;
    }
    .user_msg{
        position: relative;
        line-height: .8rem;
    }
    .user_msg .iconfont{
        position: absolute;
        font-size: .14rem;
        background: #eee;
        color: #898989;
        border-radius: 50%;
        width: .26rem;
        height: .26rem;
        text-align: center;
        line-height: .26rem;
        left: -.36rem;
        top: .26rem;
    }
</style>






























