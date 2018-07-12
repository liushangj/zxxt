<template>
  <div class="">
    <ul class="fs14 pb76 bteee" >
      <li v-for="(v,k) in logs" :key="k">
        <TableTr :logs="v" :status="4"></TableTr>
      </li>
    </ul>
    <PagingDevice @handlePage="handlePage" :page="page"></PagingDevice>

  </div>
</template>

<script>
    import TableTr from './../../components/TableTr.vue'
    import PagingDevice from './../PagingDevice.vue'

    export default {
        name: '',
        components: {TableTr,PagingDevice},
        data () {
            return {
                page:1,
                logs:[
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷',share:0},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷',share:1},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷',share:1},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'1',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'1',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'1',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'2',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'2',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'2',launch:'正中信贷'},
                    {name:'王中和', score:'154', scoretime:' 2018-09-08', inpromise:12, topromise:121, addtime:'2018-05-03',level:'0',launch:'正中信贷'}
                ]
            }
        },
        methods:{
            handlePage(status){
                if(status=='first' && this.page==1){ return }
                if(status==-1&&this.page==1){return}
                if(status=='first'){
                    this.page=1;
                }else {
                    this.page+=status;
                }
              /*         this.logs = '';
               this.getInfo('more');*/
            }
        }
    }
</script>

<style scoped>

</style>






























