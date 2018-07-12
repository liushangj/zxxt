<template>
  <div class="">
      <div class="_container_ m0auto pb200">
          <p class="c333 ffpf fs18 pt72 clearfix pb37">
              <i class="fl">评分建模</i><i class="fr bgblue cfff fs16 textc w206 lh45">保存</i>
          </p>
          <div class="disflex spa_bet">
              <Model :modeldata="borrowing" class="w380"></Model>
              <Model class="w380" :modeldata="operator"></Model>
              <Model class="w380" :modeldata="thirdparty"></Model>
              <Model class="w380" :modeldata="trip"></Model>
              <Model class="w380" :modeldata="expence"></Model>
              <Model class="w380" :modeldata="other"></Model>
          </div>
      </div>
  </div>
</template>

<script>
    import Model from './../../components/Model.vue'

    export default {
        name: 'Modeling',
        components: {Model},
        data () {
            return {
                borrowing:{title:'历史借贷记录',percent:60,source:'历史借贷、逾期记录'},
                operator:{title:'运营商记录',percent:60,source:'移动、联通、电信'},
                thirdparty:{title:'第三方征信数据',percent:60,source:'平台名称一、平台名称二'},
                trip:{title:'出行记录',percent:60,source:'来源名称一、来源名称二'},
                expence:{title:'消费记录',percent:60,source:'来源名称一、来源名称二'},
                other:{title:'其他数据',percent:60,source:'来源名称一、来源名称二'}
            }
        }
    }
</script>

<style scoped>

</style>






























