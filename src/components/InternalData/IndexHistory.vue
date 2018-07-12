<template>
    <div class="">
        <div class="pt35 pb30" @click="handle_type" v-if="status==0">
            <span class="w80 c333 lh40 textc fs14 mr38 disinblock trans3 curpointer" :data-status="0" :class="type_status==0?'bgblue cfff':''">
                历史借贷
            </span>
            <span class="w80 c333 lh40 textc fs14 mr38 disinblock trans3 curpointer" :data-status="1" :class="type_status==1?'bgblue cfff':''">
                逾期记录
            </span>
        </div>
        <div class="clearfix borrow_history" v-if="status==0">
            <MsgBox_history :status="0" mlclass="ml3"></MsgBox_history>
            <MsgBox_history :status="1" mlclass="ml3"></MsgBox_history>
        </div>
    </div>
</template>

<script>
    import MsgBox_history from './../MsgBox_history.vue'

    export default {
        components: {MsgBox_history},
        data () {
            return {
                status:1,//当前的状态 0--基础 1--黑名单
                type_status:0
            }
        },
        methods:{
            handle_type(e){
                if(e.target.nodeName=='SPAN'){
                    this.type_status= e.target.dataset.status;
                }
            }
        },
        watch:{
            '$route': function(to, from) {
//                console.log('to',);
               /* this.status = to.params.status;
                console.log(to);*/
            }
        },
        mounted(){
            this.status = this.$route.params.status;
            console.log(this.$route);
        }
    }
</script>

<style>

</style>






























