<template>
    <div class="clearfix rooter ">
        <!--<div class="postionab app_rooter" v-if="isapp">
            <div class="rooter_btn" v-if="status==2">
            <span>
                <router-link to="/login" class="cfff">
                    登录
                </router-link>
            </span>
            </div>
            <div class="rooter_btn" v-else-if="status==3">
            <span class="overell pl2px pr2px">
                 <router-link to="/usercenter" class="cfff">
                     <i class="iconfont icon-gerenzhongxin cfff" v-html="'  '+ user.name"></i>
                </router-link>
            </span>

            </div>
            <div class="rooter_btn" v-else>
            <span>
                <router-link to="/login" class="cfff">
                    登录
                </router-link>／
                <router-link to="/register" class="cfff">
                    注册
                </router-link>
            </span>

            </div>
            <ul class="rooter_nav clearfix fr pr5">
                <li class="rooter_nav_li" >
                    <router-link to="/index">
                        首页
                    </router-link>
                </li>
                <li class="rooter_nav_li" >
                    <router-link to="/internaldata">
                        内部数据
                    </router-link>
                </li>
                <li class="rooter_nav_li" >
                    <router-link to="/alliance">
                        联盟数据
                    </router-link>
                </li>
                <li class="rooter_nav_li" >
                    <router-link to="/dataentry">
                        数据录入
                    </router-link>
                </li>
                <li class="rooter_nav_li" >
                    <router-link to="/blockchain">
                        区块链管理
                    </router-link>
                </li>
                <li class="rooter_nav_li" >
                    <router-link to="/loans">
                        贷款超市管理
                    </router-link>
                </li>
            </ul>
        </div>-->
       <!-- <div v-if="isapp" class="postionab top0 left0 w100p h50px bgfff">
            <i class="el-icon-menu" @click="handle_approote"></i>
            <p class="textc fs20px lh50px ffpf">区块链征信系统</p>
        </div>-->
        <img src="./../../static/img/logo.png" alt="" class="fl">
        <div class="rooter_btn lh1 pl5" v-if="status==3">
            <router-link to="/login" class="cfff pl11">
                <i class="cfff fs16 lh45">退出登录</i>
            </router-link>

        </div>
        <div class="rooter_btn" v-if="status==2">
                <span>
                    <router-link to="/login" class="cfff">
                        登录
                    </router-link>
                </span>
        </div>
        <div class="rooter_btn" v-else-if="status==3">
                <span class="overell pl2px pr2px">
                     <router-link to="/usercenter" class="cfff">
                         <i class="iconfont icon-gerenzhongxin cfff fs16" v-html="'  '+ user.name"></i>
                    </router-link>

                </span>
        </div>
        <div class="rooter_btn" v-else>
                <span>
                    <router-link to="/login" class="cfff">
                        登录
                    </router-link>／
                    <router-link to="/register" class="cfff">
                        注册
                    </router-link>
                </span>
        </div>
        <ul class="rooter_nav clearfix fr pr5">
            <li class="rooter_nav_li" >
                <router-link to="/index">
                    首页
                </router-link>
            </li>
            <li class="rooter_nav_li" >
                <router-link to="/internaldata">
                    内部数据
                </router-link>
            </li>
            <li class="rooter_nav_li" >
                <router-link to="/alliance">
                    联盟数据
                </router-link>
            </li>
            <li class="rooter_nav_li" >
                <router-link to="/dataentry">
                    数据录入
                </router-link>
            </li>
            <li class="rooter_nav_li" >
                <router-link to="/blockchain">
                    区块链管理
                </router-link>
            </li>
            <li class="rooter_nav_li" >
                <router-link to="/loans">
                    贷款超市管理
                </router-link>
            </li>
        </ul>


    </div>

</template>

<script>
    export default {
        props : ['status','user'],
        data(){
            return{
                isapp:false,
                ismenu:false
            }
        },
        mounted(){
           /* if(window.screen.availWidth<768){
                this.isapp = true;
            }*/
        },
        methods:{
            handleClick(){

            },
   /*         handle_approote(){
                this.ismenu = !this.ismenu;
                if(this.ismenu){
                    document.getElementById('app').style.left = '200px';
                }else{
                    document.getElementById('app').style.left = '0';
                }
                console.log(this.ismenu)

            }*/
        }
    }
</script>

<style>
    .rooter{
        position: absolute;
        width: 17.22rem;
        line-height: 1rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        top:0;
        z-index: 3;
    }
    .rooter img{
        margin-top: .3rem;
        width: 1.35rem;
        height: .37rem;
    }
    .rooter_nav_li{
        font-size: .16rem;
        width: 1.4rem;
        float: left;
        transition: .3s;
    }
    .rooter_nav_li a{
        color: #fff;
        display: block;
        text-align: center;
    }
    .rooter_btn{
        float: right;
        padding-top: .28rem;
    }
    .rooter_btn span{
        display: block;
        border: 1px solid #fff;
        width: 1.44rem;
        line-height: .45rem;
        text-align: center;
        color: #fff;
        font-size: .16rem;
    }
    .rooter_nav_li.active,.rooter_nav .router-link-active{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%,rgba(255, 255, 255, 0)) 90%; ;
        font-size: .2rem;
        font-family: PingFang-SC-Bold;
    }

    .rooter .el-icon-menu{
        width: 40px;
        position: absolute;
        left: 12px;
        top: 5px;
        color: #999;
        font-size: 40px;

    }
    .app_rooter{
        left: -200px;
        top: 0;
        width: 200px;
        height: 100vh;
        background: #040d14;
        z-index: 1;
        text-align: center;
        padding-top: 100px;
    }
    @media screen and (max-width: 1024px) {
        .rooter_nav_li{
            width: 1.6rem;
        }
        .rooter{
            width: 100%;
        }
    }
 /*   @media screen and (max-width: 767px) {
        .rooter_btn{
            float: none;
        }
        .rooter_btn span {
            width: 144px;
            line-height: 45px;
            font-size: 16px;
            margin: 0 auto;
        }
        .rooter_nav{
            float: none;
            padding-right: 0;
            padding-top: 50px;
        }
        .rooter_nav_li{
            float: none;
            font-size: 18px;
            width: 100%;
            line-height: 60px;
        }
        .rooter_nav_li.active, .rooter_nav .router-link-active{
            font-size: 22px;
        }
    }*/
</style>



















