<template>
    <div>
        <i class="postionab get_code" @click="getYzm" v-html="yzmtext"></i>
    </div>
</template>

<script>
export default {
    props:['tel'],
    data () {
        return {
            gotYzm:false,
            yzmtext:'获取验证码'
        }
    },
    methods:{
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
                this.$axios.post(this.$URL+'app/index.php?i=5&c=entry&do=get_code&action=login&m='+this.$m+this.$User,params).then((res)=> {
                    this.gotYzm = true;
                    this.yzmclock();
                    this.$message({
                        message: '已发送验证码',
                        type: 'success'
                    });
//                    this.$emit('handle_getcode')
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
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
</style>
