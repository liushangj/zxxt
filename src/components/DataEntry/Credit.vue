<template>
    <div class="_container_ m0auto pb200"  v-loading="isLoading">
        <div class="clearfix pt52 pb36">
            <!--<i class="w254 textc c333 lh45 fs14 bd2 fl disblock">＋批量录入</i>-->
            <i class="fr w216 textc bgblue cfff fs18 disblock lh45" @click="handle_submit">提交保存</i>
        </div>
        <p class="bl4blue w100p bgf5 pl23 c333 fs18 lh46 ">基本信息</p>
        <div class="clearfix pb80">
            <div class="fl w487">
                <p class="pl16 before-star postionre lh80">姓名</p>
                <input type="text" v-model="name" placeholder="请输入姓名"
                       class="c999 fs16 ffpf bbd2 pl16 pb17 w100p place333 isdiabled">
                <p class="pl16 before-star postionre lh80">手机号</p>
                <input type="text" v-model="tel" placeholder="请输入手机号"
                       class="c999 fs16 ffpf bbd2 pl16 pb17 w100p place333 isdiabled">
                <p class="pl16 before-star postionre lh80">身份证</p>
                <input type="text" v-model="id_card" placeholder="请输入身份证号"
                       class="c999 fs16 ffpf bbd2 pl16 pb17 w100p place333">
                <p class="pl16 before-star postionre lh80">其他信息</p>
                <input type="text" v-model="other" placeholder="添加其他信息"
                       class="c999 fs16 ffpf bbd2 pl16 pb17 w100p place333 isdiabled">
            </div>
            <div class="fl w487 pl113">
                <p class="pl16 before-star postionre lh80">性别</p>
                <div class="pb140">
                    <el-radio v-model="sex" label="1" :disabled="isexist">男</el-radio>
                    <el-radio v-model="sex" label="0"  :disabled="isexist">女</el-radio>
                </div>
                <p class="pl16 before-star postionre lh80">学历</p>
                <el-select v-model="education" :disabled="isexist" placeholder="请选择" class="education_select place333 c999 fs16 ffpf">
                    <el-option
                            v-for="item in education_option"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <p class="bl4blue w100p bgf5 pl23 c333 fs18 lh46 mb37">借贷信息</p>
        <i class="w117 textc  cfff bgblue fs16 lh30 disinblock">历史贷款记录</i>
        <div class="clearfix borrow_history pt26 pb50">
            <MsgBox_history :status="0" mlclass="ml14" :isdel="true" :data="v" :key="k"
                            v-for="(v,k) in loanLists"
                            @handle_del="addDel"
                            :index="k">
            </MsgBox_history>
            <AddBox text="添加贷款记录" class="ml14 fl" @clickAdd="loanHistory=true"></AddBox>
            <el-dialog title="添加贷款记录" :visible.sync="loanHistory">
                <el-form :model="loanform">
                    <el-form-item label="贷款公司" label-width="100px">
                        <el-input v-model="loanform.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="贷款时间" label-width="100px">
                        <el-date-picker
                                v-model="loanform.begintime"
                                type="date"
                                placeholder="贷款时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="还款到期时间" label-width="100px">
                        <el-date-picker
                                v-model="loanform.endtime"
                                type="date"
                                placeholder="请输入还款到期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="还款状态" label-width="100px">
                        <el-select v-model="loanform.status" placeholder="请选择还款状态">
                            <el-option label="已还款" value="0"></el-option>
                            <el-option label="还款中" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="addCancel(0)">取 消</el-button>
                    <el-button type="primary" @click="addHistory(0)">确 定</el-button>
                </div>
            </el-dialog>

        </div>
        <i class="w117 textc cfff bgblue fs16 lh30 disinblock">逾期记录</i>
        <div class="clearfix borrow_history pt26 pb50">
            <MsgBox_history mlclass="ml14" :isdel="true" :data="v" :key="k"
                            v-for="(v,k) in overtimeLists"
                            @handle_del="addDel"
                            :status="1"
                            :index="k">
            </MsgBox_history>
            <AddBox text="添加逾期记录" class="ml14 fl" @clickAdd="overtimeHistory=true"></AddBox>
            <el-dialog title="添加逾期记录" :visible.sync="overtimeHistory">
                <el-form :model="overtimeform">
                    <el-form-item label="贷款公司" label-width="100px">
                        <el-input v-model="overtimeform.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="贷款时间" label-width="100px">
                        <el-date-picker
                                v-model="overtimeform.begintime"
                                type="date"
                                placeholder="贷款时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="还款到期时间" label-width="100px">
                        <el-date-picker
                                v-model="overtimeform.endtime"
                                type="date"
                                placeholder="请输入还款到期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="还款状态" label-width="100px">
                        <el-select v-model="overtimeform.status" placeholder="请选择还款状态">
                            <el-option label="已逾期" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="addCancel(1)">取 消</el-button>
                    <el-button type="primary" @click="addHistory(1)">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import MsgBox_history from './../MsgBox_history.vue'
    import AddBox from './../AddBox.vue'

    export default {
        name: 'credit',
        components: {MsgBox_history, AddBox},
        data() {
            return {
                name: '',
                tel: '',
                id_card: '511523199509160626',
                other: '',
                sex: '1',
                education_option: [
                    {
                        value: '博士研究生',
                        label: '博士研究生'
                    }, {
                        value: '硕士研究生',
                        label: '硕士研究生'
                    }, {
                        value: '本科',
                        label: '本科'
                    }, {
                        value: '专科',
                        label: '专科'
                    }, {
                        value: '高中',
                        label: '高中'
                    }, {
                        value: '初中',
                        label: '初中'
                    }, {
                        value: '小学',
                        label: '小学'
                    }
                ],
                education: '',
                loanHistory: false,//添加贷款记录
                loanLists:[],
                loanform: {
                    begintime: '',
                    real_begin:'',
                    name: '',
                    endtime: '',
                    real_end:'',
                    status: ''
                },
                loanId:[],//贷款id
                overtimeHistory: false,//添加贷款记录
                overtimeLists:[],
                overtimeform: {
                    begintime: '',
                    real_begin:'',
                    name: '',
                    endtime: '',
                    real_end:'',
                    status: ''
                },
                isLoading:false,
                operator_user:'',
                overtimeId:[],//逾期id
                isexist:false,//是否已经存在
                disable_inputs:''
            }
        },
        mounted() {
            this.operator_user = JSON.parse(localStorage.getItem('chains_user')) || '';
            this.disable_inputs = document.getElementsByClassName('isdiabled') ;
        },
        watch:{
            'id_card' : function (newVal,oldVal) {
                // console.log(newVal)
                if(!this.$idCard(newVal)){
                    return
                }
                this.check_idCard();
            }
        },
        methods: {
            addHistory_ajax(status){
                this.isLoading = true;
                var _data = '' , url = '';
                if(status==0){
                    _data = {
                        company:this.loanform.name,
                        begin_time : this.loanform.begintime,
                        end_time : this.loanform.endtime,
                        status : this.loanform.status,
                        operator_user : this.operator_user.name
                    };
                    url = '/auth/addloan';
                }else {
                    _data = {
                        company:this.overtimeform.name,
                        begin_time : this.overtimeform.begintime,
                        end_time : this.overtimeform.endtime,
                        status : this.overtimeform.status,
                        operator_user : this.operator_user.name
                    };
                    url = '/auth/addovertime';
                }

                //保存
                this.$axios.post(url,_data).then((res) => {
                    res = res.data;
                    console.log(res);
                    this.isLoading = false;
                    if(res.status == 1) {

                        this.$message({
                            message: '提交成功！',
                            type: 'success'
                        });
                        if(status==0){
                            this.loanId.push(res.data.loanId);
                            this.loanHistory = !this.loanHistory;
                            this.loanform.real_begin = this.loanform.begintime.getFullYear() + '-' + (this.loanform.begintime.getMonth() + 1) + '-' + this.loanform.begintime.getDate();
                            this.loanform.real_end = this.loanform.endtime.getFullYear() + '-' + (this.loanform.endtime.getMonth() + 1) + '-' + this.loanform.endtime.getDate();
                            this.loanform.id = res.data.loanId;
                            this.loanLists.push(this.loanform);
                            this.loanform = {
                                begintime: '',
                                real_begin:'',
                                name: '',
                                endtime: '',
                                real_end:'',
                                status: ''
                            };
                            console.log('loanId',this.loanId);
                        }else{
                            this.overtimeId.push(res.data.overtimeId);
                            this.overtimeHistory = !this.overtimeHistory;
                            this.overtimeform.real_begin = this.overtimeform.begintime.getFullYear() + '-' + (this.overtimeform.begintime.getMonth() + 1) + '-' + this.overtimeform.begintime.getDate();
                            this.overtimeform.real_end = this.overtimeform.endtime.getFullYear() + '-' + (this.overtimeform.endtime.getMonth() + 1) + '-' + this.overtimeform.endtime.getDate();
                            this.overtimeform.id = res.data.overtimeId;
                            this.overtimeLists.push(this.overtimeform);
                            this.overtimeform = {
                                begintime: '',
                                real_begin:'',
                                name: '',
                                endtime: '',
                                real_end:'',
                                status: ''
                            };
                        }
                        console.log('overtimeId',this.overtimeId);


                    }else if(res.status==-100){
                        this.$message.error('请先登录！');
                        setTimeout( ()=> {
                            this.$router.push({path:'/login'});
                        },500);
                    }else{
                        this.$message.error(res.msg || '提交失败，请稍后再试！');
                    }
                }).catch((err)=>{
                    this.isLoading = false;
                    this.$message.error('提交失败，请稍后再试！');
                });
            },
            addHistory(status) {
                if (status == 0) {//贷款记录
                    if(!this.loanform.name){
                        this.$message.error('请输入贷款公司！');
                        return
                    }
                    if(!this.loanform.begintime){
                        this.$message.error('请输入贷款时间！');
                        return
                    }
                    if(!this.loanform.endtime){
                        this.$message.error('请输入还款到期时间！');
                        return
                    }
                    if(!this.loanform.status){
                        this.$message.error('请选择还款状态！');
                        return
                    }
                    if(!this.operator_user){
                        this.$message.error('请先登录！');
                        setTimeout( ()=> {
                            this.$router.push({path:'/login'});
                        },500);
                        return
                    }

                    this.addHistory_ajax(status);

                } else {
                    if(!this.overtimeform.name){
                        this.$message.error('请输入贷款公司！');
                        return
                    }else if(!this.overtimeform.begintime){
                        this.$message.error('请输入贷款时间！');
                        return
                    }else if(!this.overtimeform.endtime){
                        this.$message.error('请输入还款到期时间！');
                        return
                    }else if(!this.overtimeform.status){
                        this.$message.error('请选择还款状态！');
                        return
                    }
                    this.addHistory_ajax(status);

                }
            },
            addCancel(status) {//关闭
                if (status == 0) {
                    this.loanHistory = false;
                    this.loanform = {
                        begintime: '',
                        name: '',
                        endtime: '',
                        status: ''
                    };
                } else {
                    this.overtimeHistory = false;
                    this.overtimeform = {
                        begintime: '',
                        name: '',
                        endtime: '',
                        status: ''
                    };
                }
            },
            addDel(status,index,idx){
               /* var _data = {id:idx} , url;
                if(status==0){
                    url = '/auth/loandel';
                }else {
                    url = '/auth/overtimedel';
                }
                this.$axios.post(url,_data).then((res) => {
                    res = res.data;
                    // console.log(res);
                    this.isLoading = false;
                    if(res.status == 1) {
                        this.$message({
                            message: res.msg || '删除成功~',
                            type: 'success'
                        });


                    }else if(res.status==-100){
                        this.$message.error('请先登录！');
                        setTimeout( ()=> {
                            this.$router.push({path:'/login'});
                        },500);
                        return
                    }else{
                        this.isLoading = false;
                        this.$message.error(res.msg || '提交失败，请稍后再试！');
                    }
                }).catch((err)=>{
                    this.isLoading = false;
                    this.$message.error('提交失败，请稍后再试！');

                })
                return*/
                if(status==0){
                    this.loanLists.splice(index,1);
                    console.log(this.loanLists)
                }else {
                    this.overtimeLists.splice(index,1);
                }
            },
            handle_submit(){
                if(!this.name.trim()){
                    this.$message.error('请输入姓名！');
                    return
                }
                if(!this.$telReg(this.tel.trim())){
                    this.$message.error('请输入正确的手机号！');
                    return
                }
                if(!this.$idCard(this.id_card.trim())){
                    this.$message.error('请输入正确的身份证号！');
                    return
                }
                if(!this.education.trim()){
                    this.$message.error('请选择学历！');
                    return
                }
                if(this.loanLists.length<=0 && this.overtimeLists.length<=0){
                    this.$message.error('请添加记录！');
                    return
                }

                this.isLoading = true;
                //请求
                var loan = this.loanId , overtime = this.overtimeId;
                var _data = {
                    username:this.name.trim(),
                    mobile:this.tel.trim(),
                    idCard:this.id_card.trim(),
                    loanId:this.loanId.toString(),
                    overtimeId:this.overtimeId.toString(),
                    sex:this.sex,
                    mark:this.mark,
                    education : this.education,
                    operator_user:this.operator_user.name,
                    operator_time:new Date()
                };
                // console.log(_data);
                this.$axios.post('/auth/addcredit',_data).then((res) => {
                    res = res.data;
                    // console.log(res);
                    this.isLoading = false;
                    if(res.status == 1) {
                        this.$message({
                            message: res.msg || '提交成功~',
                            type: 'success'
                        });

                        this.name =  '';
                        this.tel = '';
                        this.id_card = '';
                        this.other = '';
                        this.education = '';
                        this.loanLists = [];
                        this.loanform = {
                            begintime: '',
                            real_begin:'',
                            name: '',
                            endtime: '',
                            real_end:'',
                            status: ''
                        };
                        this.loanId = [];//贷款id
                        this.overtimeHistory = false;//添加贷款记录
                        this.overtimeLists = [];
                        this.overtimeform =  {
                            begintime: '',
                            real_begin:'',
                            name: '',
                            endtime: '',
                            real_end:'',
                            status: ''
                        };
                        this.overtimeId = [];
                    }else if(res.status==-100){
                        this.$message.error('请先登录！');
                        setTimeout( ()=> {
                            this.$router.push({path:'/login'});
                        },500);
                        return
                    }else{
                        this.isLoading = false;
                        this.$message.error(res.msg || '提交失败，请稍后再试！');
                    }
                }).catch((err)=>{
                    this.isLoading = false;
                    this.$message.error('提交失败，请稍后再试！');

                })
            },
            check_idCard(){//检验身份证
                console.log(this.id_card);

                //查询
                var _data = {idcard:this.id_card};
                this.$axios.post('/auth/check_credit_idcard',_data).then((res) => {
                    res = res.data;
                    console.log(res);
                    this.isLoading = false;
                    if(res.status == 1) {
                        //账户不存在
                        this.isexist = false;
                        this.disable_inputs[0].disabled = false;
                        this.disable_inputs[1].disabled = false;
                        this.disable_inputs[2].disabled = false;
                    }else if(res.status==-1){
                        //账户已经存在
                        this.$message.warning(res.msg || '改账户信息已经存在！');
                        this.name = res.data.username;
                        this.tel = res.data.mobile;
                        this.other = res.data.mark;
                        this.sex = res.data.sex;
                        this.education = res.data.education;
                        this.isexist = true;

                        this.disable_inputs[0].disabled = true;
                        this.disable_inputs[1].disabled = true;
                        this.disable_inputs[2].disabled = true;
                    }else{
                        this.isexist = false;
                        this.isLoading = false;
                        this.disable_inputs[0].disabled = false;
                        this.disable_inputs[1].disabled = false;
                        this.disable_inputs[2].disabled = false;
                        this.$message.error(res.msg || '提交失败，请稍后再试！');
                    }
                }).catch((err)=>{
                    this.isexist = false;
                    this.isLoading = false;
                    this.disable_inputs[0].disabled = false;
                    this.disable_inputs[1].disabled = false;
                    this.disable_inputs[2].disabled = false;
                    this.$message.error('提交失败，请稍后再试！');

                })
            }
        }
    }
</script>

<style>
    .el-select.education_select {
        width: 100%;
    }

    .education_select input {
        border: none;
        border-bottom: 1px solid #d2d2d2;
        border-radius: 0;
        font-size: .16rem;
        background: none;
    }

    .education_select .el-icon-arrow-up:before {
        content: "\E60C";
        color: #313131;
    }

    .education_select .el-input__icon {
        line-height: .4rem;
    }

    .education_select.el-select .el-input .el-icon-arrow-up {
        font-size: .14rem;
    }
    input.isdiabled[disabled]{
        background: none;
        color: #999;
    }
    .education_select .el-input.is-disabled .el-input__inner{
        background: none;
        border: none;
        color: #999;
        border-bottom: 1px solid #d2d2d2;
    }
</style>




























