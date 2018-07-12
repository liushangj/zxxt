<template>
  <div class="add_div" @click="handleclick">
    <i class="el-icon-plus iconfont"></i>
    <p class="fs16 " v-html="text"></p>
  </div>
</template>

<script>

    export default {
        props:['text'],
        data () {
            return {

            }
        },
        methods:{
            handleclick(){
                this.$emit('clickAdd')
            }
        }
    }
</script>

<style scoped>
  .add_div{
      width: 2.16rem;
      /*height: 1.65rem;*/
      background: #d2d2d2;
      color: #fff;
      text-align: center;
      padding-top: .2rem;
      padding-bottom: .5rem;
  }
  .add_div .iconfont{
      font-size: .40rem;
      font-weight: 700;
      line-height: .8rem;
  }
</style>






























