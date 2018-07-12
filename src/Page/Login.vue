<template>
    <div class="login">
        <img src="./../../static/img/logo.png" alt="">
        <div class="login_con"  v-loading="isLoading">
            <p class="ffpf fs20px c333 lh80 textc">欢迎登录!</p>
            <div class="inputer clearfix lh45px bgf5 pl13px mb25px">
                <i class="iconfont icon-shouji-copy fl c666 fs18px"></i>
                <input type="text" class="place999 lh45px bgf5 pl13px" placeholder="请输入账号手机号" v-model="tel">
            </div>
            <div class="inputer clearfix lh45px bgf5 pl13px">
                <i class="iconfont icon-shouji-copy fl c666 fs18px"></i>
                <input type="password" class="place999 lh45px bgf5 pl13px" placeholder="请输入登录密码" v-model="pwd"  @keyup.enter    ="handle_enter">
            </div>

            <div class="clearfix fs12px pb36px pt24px pl10px">
                <span class="fl c333">已有账号？<i class="cblue" @click="$router.push({ path: '/register'})">立即注册</i></span>
                <i class="fr" @click="pwd_change_show=!pwd_change_show">忘记密码？</i>
            </div>

            <button class="bgblue cfff textc lh45px boradius2 disblock w100p fs16px curpointer" @click="handle_login">确认登录</button>

        </div>

        <ChangePwd @handle_click="handle_pwd" v-show="pwd_change_show" status="forget"></ChangePwd>

    </div>
</template>

<script>
    import ChangePwd from './../components/ChangePwd.vue'


    export default {
        name: 'login',
        components: {ChangePwd},
        data(){
            return{
                tel:'admin',
                pwd:'pass',
                pwd_change_show:false,
                isLoading:false
            }
        },
        mounted(){

        },
        methods:{
            handle_enter(e){
                e.keyCode === 13 && this.handle_login()
            },
            handle_login(){//
                if(!this.tel){
                    this.$alert('请输入账号手机号', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {

                        }
                    });
                    return
                }
                if(!this.pwd){
                    this.$alert('请输入登录密码', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {

                        }
                    });
                    return
                }
                this.isLoading = true;

                var _data = {
                    username : this.tel.trim(),
                    password : this.pwd.trim()
                };
/*
                this.$axios.post( this.$urlHead + "/login", {
                    headers: {
                        'Content-type': 'application/json; charset=utf-8'
                        // "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId
                    }
                },_data).then((res)=>{

                }).catch((err)=>{
                    console.log(err)
                });*/



                this.$axios.post('/auth/login',_data).then((res) => {
                    res = res.data;
                    console.log(res);
                    if(res.status == 1) {
                        // this.isLoading = false;

                        //区块链
                        //发送请求
                        //xhr.send(null);
                        //创建异步对象
                      /*  var xhr = new XMLHttpRequest();
                        //设置请求的类型及url
                        //post请求一定要添加请求头才行不然会报错
                        xhr.open('POST', this.$urlHead + "/login");
                        xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
                        xhr.send(JSON.stringify(_data));
                        xhr.onreadystatechange = ()=>{
                            // 这步为判断服务器是否正确响应
                            if (xhr.readyState == 4 && xhr.status == 200) {
                                // console.log(xhr);
                                this.isLoading = false;
                                this.$message({
                                    message: '登录成功！现在去首页~',
                                    type: 'success'
                                });
                                localStorage.setItem('chains_user',JSON.stringify({name:'admin',pwd:'pass'}));
                                setTimeout( ()=> {
                                    this.$router.push({path:'/index'});
                                },500);

                            }else {
                                this.isLoading = false;
                                /!*  this.$alert('登录失败', '错误提示', {
                                     confirmButtonText: '确定'
                                 });*!/
                            }
                        };*/

                        this.$message({
                            message: res.msg || '登录成功！现在去登录~',
                            type: 'success'
                        });
                  /*      console.log(this.tel);
                        console.log(this.pwd);*/
                        localStorage.setItem('chains_user',JSON.stringify({name:this.tel,pwd:this.pwd}));
                        setTimeout( ()=> {
                            this.$router.push({path:'/index'});
                        /*    console.log(this.tel);
                            console.log(this.pwd);*/
                        },500);
                        this.tel = '';
                        this.pwd = '';
                    }else{
                        this.isLoading = false;
                        this.$alert(res.msg || '登录失败！', '错误提示', {
                            confirmButtonText: '确定'
                        });
                    }
                }).catch((err)=>{
                    console.log(err);
                    this.isLoading = false;
                });


            },
            handle_pwd(){//忘记密码
                this.pwd_change_show = !this.pwd_change_show;
            }
        }
    }
</script>

<style>

    .login{
        background:#001440 url("./../assets/bj.jpg") no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        padding-top: 2rem;
    }
    .login img{
        width: 135px;
        height: 37px;
        margin: 0 auto;
        display: block;
        margin-bottom: .55rem;
    }
    .login_con input{
        font-size: 14px;
    }
    .login_con{
        width: 3.84rem;
        background:#fff;
        margin: 0 auto ;
        padding: 10px 42px 68px;
        min-width: 384px;
    }
    .login_con .lh80{
        line-height: 80px;
    }
</style>






















