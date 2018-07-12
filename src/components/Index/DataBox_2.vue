<template>
  <div class="databox_2">
      <i class="iconfont " :class="msg.icon"></i>
      <p v-html="msg.name" class="fs24 fw700 lh46"></p>
      <p v-html="msg.detail" class="fs14 c999"></p>
  </div>
</template>

<script>
export default {
    name: 'databox_2',
    props:['msg'],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .databox_2{
        cursor: pointer;
        width: 20%;
        background: #eee;
        text-align: center;
        padding: .2rem .38rem .58rem .36rem;
        position: relative;
        transition: .2s;
    }
    .databox_2:before{
        position: absolute;
        content: '';
        width: .4rem;
        height: .08rem;
        background: #00a0e9;
        left: 0;
        right: 0;
        margin: 0 auto;
        transition: .2s;
        top: 0;
    }
    .databox_2 .iconfont{
        color: #1b1b1b;
        font-size: .72rem;
        transition: .2s;
    }
    .databox_2:hover{
        background: #00a0e9;
    }
    .databox_2:hover i.iconfont{
        color: #fff;
    }
    .databox_2:hover p{color: #fff}
</style>






























