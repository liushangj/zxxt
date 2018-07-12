<template>
  <div class="_container_ m0auto pt50 usercenter pb200">
      <div class="pl32 pr38 be5">
          <div v-for="(v,k) in msgs" class="bbeee pb30">
              <p class="lh80"><i class="fs14 lh80 c333 ffpf" v-html="v.title"></i><i class="fs12 c999 pl26" v-html="v.time"></i></p>
              <p v-html="v.msg" class="fs12 c333  overellipcs3 w100p"></p>
          </div>
      </div>


  </div>
</template>

<script>

    export default {
        name: '',
        data () {
            return {
                msgs:[
                    {title:'系统消息',time:'2016-09-08',msg:'2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。'},
                    {title:'系统消息',time:'2016-09-08',msg:'2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。'},
                    {title:'系统消息',time:'2016-09-08',msg:'2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。'},
                    {title:'系统消息',time:'2016-09-08',msg:'2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。2017年12月5日 - 回答：如果是动态的视频,除了实拍以外,就是特效软件制作,像3Dmax,Maya,Houdini都可以做。 如果是静态的图像,很可能是素材通过PS合成上去的。'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>






























