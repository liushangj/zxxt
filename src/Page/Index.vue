<template>
    <div class="index" v-loading="isLoading">
        <!--轮播-->
        <el-carousel class="w100p h818" arrow="hover" :autoplay="false">
            <el-carousel-item v-for="(v,k) in banners" :key="k">
                <img :src="v.thumb" alt="" class="w100p h100p">
            </el-carousel-item>
        </el-carousel>
        <div class="_container_ ml0 mr0 m0auto w100p pb97">
            <div class="clearfix index_total">
                <DataBox_1 :total="total_user" class="fl" text="选择区块链征信系统"></DataBox_1>
                <DataBox_1 :total="total_peoData" text="个人信息数据搜集" class="fl"></DataBox_1>
            </div>
            <div class="disflex spa_bet w100p">
                <DataBox_2 :msg="v" v-for="(v,k) in functions" :key="k"></DataBox_2>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import DataBox_1 from './../components/Index/DataBox_1.vue'
    import DataBox_2 from './../components/Index/DataBox_2.vue'
    import Footer from './../components/Footer.vue'

    export default {
        name: 'index',
        components: {DataBox_1, DataBox_2, Footer},
        data() {
            return {
                banners: [{thumb: './../../static/img/banner.jpg'}, {thumb: './../../static/img/banner.jpg'}, {thumb: './../../static/img/banner.jpg'}],
//                statistics:[{total:0,text:'选择区块链征信系统'},{total:0,text:'个人信息数据搜集'}],
                functions: [
                    {icon: 'icon-gouwuche', name: '区块链技术', detail: '基于区块链技术信息不可篡改更可靠'},
                    {icon: 'icon-jingzhun', name: '收集全面', detail: '信息收集渠道多样，用户画像更完善'},
                    {icon: 'icon-jizhuangxiang', name: '精准评估', detail: '信息采集全面评估更精准风险更可控'},
                    {icon: 'icon-kuaisu', name: '响应迅速', detail: '响应迅速，优质客户更快获得'}
                ],
                total_user: 0,
                total_peoData: 0,
                isLoading: false
            }
        },
        mounted() {
            console.log('index');
            this.getInfo();
        },
        methods: {
            getInfo() {//获取数据
                // this.isLoading = true;
            /*    var _data = {
                    "functionName": "queryCar",
                    "args": "Wu1",
                    "operation": "query",
                    "id": "5b3a0be2517f622f500418a8"
                };
                this.$axios.post(this.$urlHead + "/api/deploy/operate/5b3a0be2517f622f500418a8", _data,
                    {
                        headers: {
                            'Content-type': 'application/json; charset=utf-8'
                            // "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId
                        },
                        timeout: 1000 * 60 * 5
                    }
                ).then((res) => {
                    this.isLoading = false;
                    res = res.data;
                    console.log(res);
                    if (res.status == 1) {

                    } else {

                    }
                }).catch((err,xhr,type)=>{
                    this.isLoading = false;
                    console.log(err,xhr,type);
                    this.$message.error(JSON.stringify(err));
                });*/

                // document.cookie = "EGG_SESS=go08dDYQhztrsxH1nnalUvOviFWHklEwzdkSAmk9GW1uuCBJLM9";
                /*
                                var xhr = new XMLHttpRequest();
                                //设置请求的类型及url
                                //post请求一定要添加请求头才行不然会报错
                                xhr.withCredentials = true; //支持跨域发送cookies
                                xhr.open('POST', this.$urlHead + "/api/deploy/operate/5b3a0be2517f622f500418a8");
                                xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

                                // xhr.withCredentials = true;
                                //发送请求
                                xhr.send(JSON.stringify(_data));
                                xhr.onreadystatechange = () => {
                                    // 这步为判断服务器是否正确响应
                                    if (xhr.readyState == 4 && xhr.status == 200) {
                                        this.isLoading = false;

                                    }else{
                                        this.isLoading = false;
                                    }
                                };*/
                        this.$axios.post('/auth/web').then((res) => {
                            res = res.data;
                            console.log(res);
                            if(res.status == 1) {
                                this.total_peoData = res.data[0].total_peoData;
                                this.total_user = res.data[0].total_user;
                       /*         this.$set(this.statistics[0],'total',res.data[0].total_user);
                                this.$set(this.statistics[1],'total',res.data[0].total_peoData);
                                console.log('index_statistics',this.statistics);*/
                            }else{
                               /* this.isLoading = false;
                                this.$alert(res.msg || '注册失败！', '错误提示', {
                                    confirmButtonText: '确定'
                                });*/
                            }
                        });
            }
        }
    }
</script>

<style>
    div.el-carousel__container {
        height: 100%;
    }

    .index .el-carousel__button {
        width: .24rem;
        height: .24rem;
        border-radius: 50%;
    }

    .index_total .databox_1:nth-child(1) div {
        border-right: 1px solid #d2d2d2;
    }

    @media screen and (max-width: 767px) {
        .footer {
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
</style>






















