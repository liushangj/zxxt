<template>
  <div id="app" class="postionre fs14 trans3">
    <!--<img src="./assets/logo.png">-->
    <Rooter v-if="isLogin!=1" :status="isLogin" :user="user"></Rooter>
    <router-view/>
  </div>
</template>

<script>
    import Rooter from './components/Rooter.vue';

    export default {
        name: 'App' ,
        components: {Rooter},
        data(){
            return{
                isLogin:0 ,// 0---没有登录 1---在登录页面  2---注册页面  3--已经登录
                user:{name:'',pwd:''}
            }
        },
        mounted(){
            this.user = JSON.parse(localStorage.getItem('chains_user')) || '';
            if(this.user){this.isLogin = 3;}
            console.log(this.isLogin);
        },
        watch:{
            '$route': function(to, from) {
                this.user = JSON.parse(localStorage.getItem('chains_user')) || '';
                if(to.name == 'login'){
                    this.isLogin = 1;
                }else if(to.name == 'register'){
                    this.isLogin = 2;
                }else if(this.user){
                    this.isLogin = 3;
                }else{
                    this.isLogin = 0;
                }
                console.log(this.isLogin);
            }
        }
    }
</script>

<style>
    #app{
        width: 100%;
        height: 100%;
    }
    .el_message{
      z-index: 9999 !important;
    }

    /*@media screen and (max-width: 767px) {
        #app{padding-top: 50px;}
        .internaldata.pt236{
          padding-top: 122px;
        }
        .search .el-input--suffix.fl {
            float: none;
            width: 100%;
        }
        .search .search_input{
            line-height: 50px;
            height: 50px;
            margin-bottom: 10px;
        }
        .search_input input.el-input__inner{
            height: 50px;
            line-height: 50px;
        }
        .search .el-select{
            width: 20%;
        }
        .search .search_select .el-input{
            font-size: 14px;
        }
        .search .h49 input.el-input__inner{
            height: 50px;
            font-size: 14px;
        }
        .search .fs14{
            font-size: 14px;
        }
        .search .lh45{line-height: 45px;}
        .mediaw25p{
            width: 25%;
        }
    }*/

</style>
























