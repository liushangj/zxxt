<template>
    <div tabindex="-1" role="dialog" aria-modal="true" aria-label="标题名称" class="el-message-box__wrapper change_pwd_info" >
        <div class="change_pwd mediatrans15" v-show="status=='pwd'">
            <i class="iconfont icon-shachu-xue c89 " @click="handle_click(0,'pwd')"></i>
            <p class="fs16px c333 pb36" v-html="status=='forget'?'设置新密码':'修改密码'"></p>
            <el-input placeholder="请输入手机号" v-model="tel"  class="pwd_tel bordernone mb10 bgf5" clearable>
                <template slot="prepend">+86 |</template>
            </el-input>
            <div class="postionre mb10 bgf5">
                <el-input v-model="code" placeholder="输入手机验证码" class="bordernone" clearable></el-input>
                <i class="postionab get_code" @click="getYzm" v-html="yzmtext"></i>
            </div>
            <!--<getCode :code="code" :tel="tel"></getCode>-->
            <el-input v-model="number" type="text" placeholder="输入登录账号" class="bordernone mb10 bgf5" clearable></el-input>
            <el-input v-model="pwd1" type="password" placeholder="输入新的登录密码" class="bordernone mb10 bgf5" clearable></el-input>
            <el-input v-model="pwd2" type="password" placeholder="再次输入新的密码" class="bordernone mb10 bgf5" clearable @keyup.enter.native='handle_click(2,status)'></el-input>

            <i class="confirm" @click="handle_click(2,status)" v-html="submit_text"></i>
        </div>
        <div class="change_pwd mediatrans15" v-show="status=='email'">
            <i class="iconfont icon-shachu-xue c89 " @click="handle_click(0,'pwd')"></i>
            <p class="fs16px c333 pb140">修改企业邮箱</p>
            <el-input v-model="email" type="text" placeholder="请输入企业邮箱" class="bordernone mb10 bgf5" clearable></el-input>

            <i class="confirm" @click="handle_click(2,status)" v-html="submit_text"></i>
        </div>
    </div>

</template>

<script>
    import getCode from './getCode.vue'

    export default {
        props:['score','status','addrRedact'],
        components: {getCode},
        data () {
            return {
                tel:'',
                code:'',
                pwd1:'',
                pwd2:'',
                number:'',
                submit_status:false,
                submit_text:'确认',
                gotYzm:false,
                yzmtext:'获取验证码',
                email:''
            }
        },
        mounted(){
//            console.log(11111111);
            this.tel='';
            this.code='';
            this.pwd1='';
            this.pwd2='';
            this.number='';
            if(this.addrRedact){
                this.addr.name = this.addrRedact.username;
                this.addr.tel = this.addrRedact.mobile;
                this.addr.detail = this.addrRedact.address;
                this.addr.cityInfo.province.code = this.addrRedact.province;
                this.addr.cityInfo.province.value = this.addrRedact.provinceh;

                this.addr.cityInfo.city.code = this.addrRedact.city;
                this.addr.cityInfo.city.value = this.addrRedact.cityh;

                this.addr.cityInfo.block.code = this.addrRedact.district;
                this.addr.cityInfo.block.value = this.addrRedact.districth;
            }
        },
        methods:{
            handle_click(idx,status){
                if(idx==0){
                    this.$emit('handle_click',idx,status);
                }else if(idx==2){
                    if(status=='pwd' || status=='forget'){//修改密码

                        if(this.submit_status) return;

                        if(!this.$telReg(this.tel)){
                            this.$message({
                                message: '请输入正确的电话号码',
                                type: 'error'
                            });
                            return
                        }

                        if(!this.$pwdReg(this.pwd1.trim())){
                            this.$message({
                                message: '请输入6-21位密码，包含数字和字母',
                                type: 'error'
                            });
                            return
                        }

                        if(!this.pwd1.trim() || !this.pwd2.trim()){
                            this.$message({
                                message: '请输入密码',
                                type: 'error'
                            });
                            return
                        }

                        if(this.pwd1.trim() != this.pwd2.trim()){
                            this.$message({
                                message: '两次密码不一致',
                                type: 'error'
                            });
                            return
                        }

                        if(!this.code.trim()){
                            this.$message({
                                message: '请输入验证码',
                                type: 'error'
                            });
                            return
                        }

                        this.submit_status = true;
                        this.submit_text = '正在提交，请耐心等待~';

                        var params = new FormData();
                        params.append('mobile',this.tel.trim());
                        params.append('password',this.pwd1.trim());
                        params.append('code',this.code.trim());
                        params.append('number',this.number.trim());

                        this.$axios.post(this.$URL+'app/index.php?i=5&c=entry&do=back_password&action=login&m='+this.$m+this.$User,params).then((res)=> {
                            res = res.data;
                            this.submit_status = false;
                            this.submit_text = '提交';
                            this.$emit('handle_click',idx,status);
                            this.tel='';
                            this.code='';
                            this.pwd1='';
                            this.pwd2='';
                            this.number='';
//                            console.log('alertinfo');
                            if(res.status=='1'){
                                this.$message({
                                    message: '修改成功~',
                                    type: 'success'
                                });
                            }else if(res.status==-100){
                                this.$message({
                                    message: '请登录！',
                                    type: 'warning'
                                });
                                setTimeout( () =>{
                                    this.$router.push({ path: '/login'})
                                }, 500)
                            }else {
                                this.$message({
                                    message: res.msg || '提交失败，请稍后再试~',
                                    type: 'error'
                                });
                            }
                        })
                    }
                }else if(idx==1){//地址
//                    console.log(this.addr.cityInfo);
                    if ( this.addr.name && this.addr.tel && this.addr.detail){

                        let url=this.$URL+'app/index.php?i=5&c=entry&do=addr&action=user&m='+this.$m;
                        let params = new FormData();
                        params.append('op','add');

                        if(this.addrRedact.id){//修改
                            params.append('id',this.addrRedact.id);
                        }
//                        console.log(this.addr.cityInfo.block.code);
                        params.append('username',this.addr.name);
                        params.append('mobile',this.addr.tel);
                        params.append('province',this.addr.cityInfo.province.code);
                        params.append('city',this.addr.cityInfo.city.code);
                        params.append('district',this.addr.cityInfo.block.code);
                        params.append('addr',this.addr.detail);

                 /*       if(this.idx){
                            params.append('id',this.addr_id);
                        }*/
                        this.$axios.post(url+this.$User,params).then((res)=> {
                            res = res.data;
                            this.$emit('handle_click',idx,status);

                            if(res.result=='1') {
                                if (this.addrRedact) {
                                    this.$message({
                                        message: '修改成功！',
                                        type: 'success'
                                    });
                                } else {
                                    this.$message({
                                        message: '添加成功！',
                                        type: 'success'
                                    });
                                }
                                this.addr.name = '';
                                this.addr.tel = '';
                                this.addr.detail = '';
                                this.addr.addr = '';
                                this.$emit('handle_refresh')
                            }else if(res.result==-100) {
                                this.$message({
                                    message: '请登录！',
                                    type: 'warning'
                                });
                                setTimeout( () =>{
                                    this.$router.push({ path: '/login'})
                                }, 500)
                            }else if(res.result =='-1'){
                                this.$message({
                                    message: res.msg || '请求错误，请稍后再试',
                                    type: 'warning'
                                });
                            }
                        })
                    }else {
                        this.$message({
                            message: res.msg || '信息不完整，请重新填写',
                            type: 'warning'
                        });
                    }
                }

            },
            getYzm(){
                if(this.gotYzm){
                    this.$message({
                        message: '已发送验证码',
                        type: 'error'
                    });
                    return
                }

                this.gotYzm = true;

                if(this.$telReg(this.tel)){//手机号正确
                    var params = new FormData();
                    params.append('phone',this.tel);
                    params.append('code',this.code);
                    this.$axios.post(this.$URL+'app/index.php?i=5&c=entry&do=get_code&action=login&m='+this.$m+this.$User,params).then((res)=> {
                        res = res.data;

                        this.gotYzm = true;
                        this.yzmclock();
                        this.$message({
                            message: '已发送验证码',
                            type: 'success'
                        });
                    })
                }else {
                    this.$message({
                        message: '请输入正确手机号',
                        type: 'error'
                    });
                    this.gotYzm = false;
                }
            },
            yzmclock(){
                var time = 60;
                var timer = null;

                this.yzmtext = time+'s后获取';
                timer = setInterval( ()=> {
                    if(time<=0){
                        this.yzmtext = '获取验证码';
                        this.gotYzm = false;
                        clearInterval(timer);
                        return
                    }
                    time--;
                    this.yzmtext = time+'s后获取';

                },1000);

            }
        },
        computed: {

        }
    }
</script>

<style>
    .change_pwd{
        width: 354px;
        margin:auto;
        height: 420px;
        background: #fff;
        text-align: center;
        padding: 25px 23px 93px 23px ;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .change_pwd.h455{
        height: 455px;
    }
    .get_code{
        width: 70px;
        height: 24px;
        border: 1px solid #e5e5e5;
        border-radius: 1px;
        color: #f16301;
        font-size: 12px;
        text-align: center;
        line-height: 24px;
        position: absolute;
        cursor: pointer;
        background: #fff;
        top:8px;
        right: 11px;
    }
    .change_pwd .icon-shachu-xue{
        position: absolute;
        right: 33px;
        top:24px;
        font-size: 26px;
        cursor: pointer;
    }
    .bordernone.el-input__inner{
        border: none;
    }
    .change_pwd .confirm{
        width: 100%;
        height: 40px;
        background: #f16301;
        border-radius: 2px;
        line-height: 40px;
        color: #fff;
        font-size: 16px;
        text-align: center;
        display: block;
        margin-top: 17px;
        cursor: pointer;
    }
    .pwd_tel .el-input-group__prepend{
        border: none;
        color: #333;
        padding: 0 9px 0 12px;
    }
    .change_pwd_info{
        background: rgba(0,0,0,.4);
        z-index: 10;
    }
 /*   .distpicker-address-wrapper{
        display: flex;
    }
    .distpicker-address-wrapper.bordernone select{
        width: 33.3%;
        border: none;
        font-size: 13px;
    }*/
</style>


























