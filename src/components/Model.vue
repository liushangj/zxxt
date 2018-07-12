<template>
  <div class="pl22 pr27 bred mb30 model">
      <p v-html="modeldata.title" class="c333 textc lh80 bbeee fs18 ffpf"></p>
      <div class="clearfix pt30">
          <i class="fl c999 fs14 lh38">权重比例</i>
          <i class="fr bdc pl66 pr66 cblue fs16 lh38 ffpf" v-html="modeldata.percent+'%'"></i>
      </div>
      <el-progress :percentage="modeldata.percent" class="fs14 pt36"></el-progress>
      <p class="c999 fs14 textc lh80" v-html="modeldata.source"></p>
  </div>
</template>

<script>
export default {
    props:['modeldata'],
    data () {
        return {

        }
    }
}
</script>

<style>
    .model .el-progress__text{display: none}
    .model .el-progress-bar{
        padding-right: 0;
    }
    .model .el-progress-bar__outer{
        border-radius: 1px;
        height: .12rem !important;
    }
    .model .el-progress-bar__inner{
        border-radius: 1px;
    }
</style>






























