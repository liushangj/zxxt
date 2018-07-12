<template>
  <div class="topbg">


  </div>
</template>

<script>
export default {
    name: 'topbg',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .topbg{
        background:url("./../assets/tb.jpg") no-repeat;
        background-size: 100% 100%;
        width: 100%;
        position: absolute;
        top:0;
        left: 0;
        height: 2.36rem;
    }
    @media screen and (max-width: 767px) {
        .topbg{
            top:50px;
            height: 120px;
        }
    }
</style>






























