<template>
    <div class="_container_ m0auto pb200">
        <div class="clearfix pt52 pb36">
            <i class="w254 textc c333 lh45 fs14 bd2 fl disblock">＋批量录入</i>
            <i class="fr w216 textc bgblue cfff fs18 disblock lh45">提交保存</i>
        </div>
        <p class="bl4blue w100p bgf5 pl23 c333 fs18 lh46 ">基本信息</p>
        <div class="clearfix pb80">
            <div class="fl w487">
                <p class="pl16 before-star postionre lh80">姓名</p>
                <input type="text" v-model="name" placeholder="请输入姓名" class="c999 fs16 ffpf bbd2 pl16 pb17 w100p place333">
                <p class="pl16 before-star postionre lh80">手机号</p>
                <input type="text" v-model="tel" placeholder="请输入手机号" class="c999 fs16 ffpf bbd2 pl16 pb17 w100p place333">
                <p class="pl16 before-star postionre lh80">身份证</p>
                <input type="text" v-model="id_card" placeholder="请输入身份证号" class="c999 fs16 ffpf bbd2 pl16 pb17 w100p place333">
                <p class="pl16 before-star postionre lh80">其他信息</p>
                <input type="text" v-model="other" placeholder="添加其他信息" class="c999 fs16 ffpf bbd2 pl16 pb17 w100p place333">
            </div>
            <div class="fl w487 pl113">
                <p class="pl16 before-star postionre lh80">性别</p>
                <div class="pb140">
                    <el-radio v-model="sex" label="1">男</el-radio>
                    <el-radio v-model="sex" label="0">女</el-radio>
                </div>
                <p class="pl16 before-star postionre lh80">学历</p>
                <el-select v-model="education" placeholder="请选择" class="education_select place333 c999 fs16 ffpf">
                    <el-option
                            v-for="item in education_option"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <p class="bl4blue w100p bgf5 pl23 c333 fs18 lh46 mb22">拉黑原因</p>
        <textarea name="" id="" class="w100p h200 ffpf p2722 bd2 overyauto fs16 c999 place333" placeholder="在此输入原因"></textarea>
        <i class="disinblock w141 bblue textc cblue fs14 mt19 lh40" @click="fileclick">
            <i class="iconfont icon-fujian cblue fs20"></i>
            添加附件
        </i>
        <input type="file" name="logo" class="disn" id="file" style="display: none" @change="fch" />

        <div class="pt20">
            <div class="upload_div clearfix" v-for="(v,k) in upload_files" :key="k">
                <img src="./../../../static/img/file.png" alt="">
                <span class="fl c333 fs14 overell lh25" v-html="v.name"></span>
                <i class="fr fs12 c999 lh25" v-html="'大小 '+v.sizer+v.level"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import MsgBox_history from './../MsgBox_history.vue'
    import AddBox from './../AddBox.vue'

    export default {
        components: {MsgBox_history,AddBox},
        data () {
            return {
                name:'',
                tel:'',
                id_card:'',
                other:'',
                sex:'1',
                education_option: [{
                    value: '本科',
                    label: '本科'
                }, {
                    value: '专科',
                    label: '专科'
                }, {
                    value: '研究生',
                    label: '研究生'
                }],
                education: '',
                upload_files:[]
            }
        },
        mounted(){

        },
        methods:{
            fileclick(){
                var f=document.getElementById('file');
                f.click();
            },
            fch() {
                var f=document.getElementById('file');
                console.log(f.files[0]);
                f.files[0].sizer = (f.files[0].size/1024).toFixed(2);
                f.files[0].level = 'KB';
                console.log(f.files[0].sizer)
                console.log(f.files[0].sizer>1024);
                if(f.files[0].sizer>1024){
                    f.files[0].sizer = (f.files[0].sizer/1024).toFixed(2);
                    f.files[0].level = 'MB';
                    console.log(111)
                }
                this.upload_files.push(f.files[0]);
                /*if(f.files[0].type!='image/png'&&f.files[0].type!='image/jpeg'){
                    this.$message({
                        message: '只支持PNG或JPG格式！',
                        type: 'warning'
                    });
                    return
                }
                if(f.files[0].size/1024>1024){
                    this.$message({
                        message: '请上传小于1M的图片！',
                        type: 'warning'
                    });
                    return
                }
                var fd = new FileReader;
                fd.readAsDataURL(f.files[0]);
                var that = this;
                fd.onload = function (r) {
                    that.avatar = fd.result;
                    that.img = that.$cavansImg(fd.result);
                    that.update_img();
                }*/
            }
        }
    }
</script>

<style>
    .el-select.education_select{
        width: 100%;
    }
    .education_select input{
        border: none;
        border-bottom: 1px solid #d2d2d2;
        border-radius: 0;
        font-size: .16rem;
    }
    .education_select .el-icon-arrow-up:before{
        content:"\E60C" ;
        color: #313131;
    }
    .education_select.el-select .el-input .el-icon-arrow-up{
        font-size: .14rem;
    }
    .upload_div{
        max-width: 4rem;
        background: #f5f5f5;
        margin-bottom: .1rem;
        padding: .22rem .35rem .23rem .13rem;
    }
    .upload_div img{
        width: .3rem;
        height: .25rem;
        float: left;
    }
    .upload_div span{
        max-width: 2rem;
        padding-left: .1rem;
    }
</style>

























































