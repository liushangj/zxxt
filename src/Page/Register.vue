<template>
    <div class="internaldata topbg minh100p pt236" v-loading="isLoading">
        <TopBg></TopBg>
        <div class="register">
            <p class="fs20px lh80px textc c333 ffpf ">欢迎注册！</p>
            <div class="register_con w100p">
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">企业用户</p>
                <el-input
                        class="mb8px"
                        placeholder="企业用户名称"
                        v-model="company.name"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">公司注册号</p>
                <el-input
                        class="mb8px"
                        placeholder="注册号"
                        v-model="company.registration_id"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">登录密码</p>
                <el-input
                        type="password"
                        class="mb8px"
                        placeholder="请设置登录密码"
                        v-model="company.pwd1"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">确认登录密码</p>
                <el-input
                        type="password"
                        class="mb8px"
                        placeholder="请再次输入登录密码"
                        v-model="company.pwd2"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">营业执照</p>
                <div class="disflex license spa_bet mb8px">
                    <form action="" enctype="multipart/form-data">
                        <input type="file" name="logo" class="disn" id="file" style="float: left;display: none" @change="fch" />
                    </form>
                    <img :src="company.license || './../../static/img/mrtp.png'" alt="">
                    <i class="be5 fs14px textc lh45px cblue ffpf" @click="fileclick">上传营业执照</i>
                </div>
<!--
                <form action="http://localhost:8080/auth/register" method="post" enctype="multipart/form-data">
                    <input type="file" name="image" size="50" />
                    <br />
                    <input type="submit" value="上传文件" />
                </form>-->

                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">企业类型</p>
                <el-select v-model="company.type" placeholder="请选择企业类型" class="mb8px">
                    <el-option
                            v-for="item in type_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">企业状态</p>
                <el-select v-model="company.status" placeholder="请选择" class="mb8px">
                    <el-option
                            v-for="item in status_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">联盟许可码</p>
                <el-input
                        class="mb8px"
                        placeholder="请选择联盟许可码"
                        v-model="company.license_code"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">注册地址</p>
                <el-input
                        class="mb8px"
                        placeholder="请输入注册地址"
                        v-model="company.Registered_address"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">联系方式</p>
                <el-input
                        class="mb8px"
                        placeholder="请输入联系方式"
                        v-model="company.mobile"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">企业邮箱</p>
                <el-input
                        class="mb8px"
                        placeholder="请输入企业邮箱"
                        v-model="company.email"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">法人代表</p>
                <el-input
                        class="mb8px"
                        placeholder="请输入法人姓名"
                        v-model="company.legal_person"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">成立日期</p>
                <el-date-picker
                        class="mb8px"
                        v-model="company.begin_time"
                        type="date"
                        placeholder="成立日期">
                </el-date-picker>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">营业期限</p>
                <el-date-picker
                        class="mb8px"
                        v-model="company.end_time"
                        type="date"
                        placeholder="营业期限">
                </el-date-picker>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">登记机关</p>
                <el-input
                        class="mb8px"
                        placeholder="请输入登记机关"
                        v-model="company.authority"
                        clearable>
                </el-input>
                <p class="fs14px c333 pl16px ffpf lh50px before-star postionre star_lh50">营业范围</p>
                <el-input
                        class="mb8px"
                        placeholder="请输入营业范围"
                        v-model="company.scope"
                        @keyup.enter.native="handle_register"
                        clearable>
                </el-input>
                <div class="textc fs14px lh80px">
                    <span class="c333">已有账号？<i class="cblue" @click="$router.push({ path: '/login'})">立即登录</i></span>
                </div>
                <button type="submit" class="bgblue cfff textc lh45px boradius2 disblock w100p fs16px curpointer" @click="handle_register">注册</button>
          <!--      <form action="http://localhost:8080/auth/register" method="POST" id="myform">
                    First Name: <input type="text" name="first_name">  <br>

                    Last Name: <input type="text" name="last_name">
                    <input type="submit" value="Submit">

                </form>-->
            </div>
        </div>

    </div>
</template>

<script>
    import TopBg from './../components/TopBg.vue'

    export default {
        name: 'register',
        components: {TopBg},
        data(){
            return{
                company:{
                    name:'',
                    registration_id:'123456',
                    license:'',
                    type:'',
                    status:'',
                    license_code:'12346',
                    Registered_address:'成都市',
                    mobile:'13518298587',
                    email:'123456',
                    legal_person:'代表',
                    begin_time:'',
                    end_time:'',
                    authority:'成都市',
                    scope:'IT',
                    pwd1:'',
                    pwd2:''
                },
                value1:'',
                type_options: [{//企业类型
                    value: 'IT行业',
                    label: 'IT行业'
                }, {
                    value: '教育行业',
                    label: '教育行业'
                }],
                status_options: [{//企业状态
                    value: '营业',
                    label: '营业'
                }, {
                    value: '关闭',
                    label: '关闭'
                }],
                isLoading:false,
                img:''
            }
        },
        mounted(){

        },
        methods:{
            handle_register(){//

                if(!this.company.name.trim()){
                    this.$message.error('请输入企业用户名称！');
                    return
                }else if(!this.company.registration_id.trim()){
                    this.$message.error('请输入企业注册号！');
                    return
                }else if(this.company.pwd1 != this.company.pwd2 || !this.company.pwd1 || !this.company.pwd2){
                    this.$message.error('请确认登录密码！');
                    return
                }else if(!this.company.license){
                    this.$message.error('请上传营业执照！');
                    return
                }else if(!this.company.type){
                    this.$message.error('请选择企业类型！');
                    return
                }else if(!this.company.status){
                    this.$message.error('请选择企业状态！');
                    return
                }else if(!this.company.license_code){
                    this.$message.error('请输入联盟许可码！');
                    return
                }else if(!this.company.Registered_address){
                    this.$message.error('请输入注册地址！');
                    return
                }else if(!this.$telReg(this.company.mobile)){
                    this.$message.error('请输入正确的联系方式！');
                    return
                }else if(!this.company.email){
                    this.$message.error('请输入邮箱！');
                    return
                }else if(!this.company.legal_person){
                    this.$message.error('请输入法人姓名！');
                    return
                }else if(!this.company.begin_time){
                    this.$message.error('请选择成立日期！');
                    return
                }else if(!this.company.end_time){
                    this.$message.error('请选择营业期限！');
                    return
                }else if(!this.company.authority){
                    this.$message.error('请输入登记机关！');
                    return
                }else if(!this.company.scope){
                    this.$message.error('请输入营业范围！');
                    return
                }
                this.isLoading = true;
//                console.log(this.img);

                var _data = {
                    name:this.company.name,
                    registration_id:this.company.registration_id,
                    license:this.company.license,
                    type:this.company.type,
                    status:this.company.status,
                    license_code:this.company.license_code,
                    Registered_address:this.company.Registered_address,
                    mobile:this.company.mobile,
                    email:this.company.email,
                    legal_person:this.company.legal_person,
                    begin_time:this.company.begin_time,
                    end_time:this.company.end_time,
                    authority:this.company.authority,
                    scope:this.company.scope,
                    pwd:this.company.pwd1
                };

             /*   this.$axios({
                    method: 'post',
                    url: '/auth/register',
                    data: {
                        firstName: 'Fred',
                        lastName: 'Flintstone'
                    }
                });*/
                this.$axios.post('/auth/register',_data).then((res) => {
                    res = res.data;
                    console.log(res);
                    if(res.status == 1) {
                        this.isLoading = false;
                        this.$message({
                            message: res.msg || '注册成功！现在去登录~',
                            type: 'success'
                        });
                        setTimeout( ()=> {
                            this.$router.push({path:'/login'});
                        },500);
                        this.company = {
                            name:'',
                            registration_id :'',
                            license :'',
                            type :'',
                            status :'',
                            license_code :'',
                            Registered_address :'',
                            mobile :'',
                            email :'',
                            legal_person :'',
                            begin_time :'',
                            end_time :'',
                            authority :'',
                            scope :''
                        };
                        this.img = '';
                    }else{
                        this.isLoading = false;
                        this.$alert(res.msg || '注册失败！', '错误提示', {
                            confirmButtonText: '确定'
                        });
                    }
                })
            },
            fch() {
                var f=document.getElementById('file');
                if(f.files[0].type!='image/png'&&f.files[0].type!='image/jpeg'){
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
                    that.company.license = fd.result;
                    that.img = f.files[0];
                    console.log(that.img);

                    /*上传图片*/
                    that.imgUploading(fd.result);


                  /*  that.img = that.$cavansImg(fd.result);
                    that.update_img();*/
                }
            },
            fileclick(){
                var f=document.getElementById('file');
                f.click();
            },
            imgUploading(image_base64){
                var _data = {
                    image:image_base64
                };
                this.$axios.post('/auth/imageupload',_data).then((res) => {
                    res = res.data;
                    if(res.status == 1) {
                        this.company.license = res.url;
                    }else{
                        this.$message({
                            message: res.msg || '保存失败，请重新选择图片！',
                            type: 'error'
                        });
                    }
                })
               /* console.log(_data);
                var params = new FormData();
                params.append('img',this.img);
                params.append('name','11111');
                var xhr;
                /!* if(window.ActiveXObject) {
                 xhr= new ActiveXObject("Microsoft.XMLHTTP");
                 }else if (window.XMLHttpRequest) {
                 }else {
                 xhr= null;
                 }*!/
                xhr= new XMLHttpRequest();
                xhr.open("post","/auth/register");

// 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//                xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");//可以发送json格式字符串
//                var data = {'name':this.img};

                xhr.send(params);
                xhr.onreadystatechange= function() {
                    if(xhr.readyState == 4 && xhr.status == 200) {
//                        alert("returned:"+ xhr.responseText);
//                        this.isLoading = false;
                        console.log(xhr.responseText);

                    }
                };*/
            }
        }
    }
</script>

<style>
    .register{
        width: 611px;
        margin: 0 auto;
        padding-bottom: 130px;
        padding-top: 10px;
    }
    .register_con{
        background: #eee;
        border: 1px solid #eee;
        padding: 10px 96px 37px;
    }
    .license img ,.license i{
        width: 44%;
    }
    .license img{
        height: 169px;
    }
    .license i{
        height: 45px;
        background: #fff;
    }
    .register .el-input__inner{
        border: 1px solid #eee;
    }
    .register .el-input.is-active .el-input__inner, .el-input__inner:focus{
        border-color: #409EFF;
    }
    .register .el-select{
        width: 100%;
    }
    .register .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: 100%;
    }
    .register .el-icon-arrow-up:before{
        content: "\E60C";
    }
    .register .el-select .el-input .el-select__caret{
        color: #333;
    }
    .star_lh50.before-star::before{
        line-height: 50px;
    }
</style>






















