<template>
  <div class="databox_1">
      <div>
          <p>累计<span v-html="number"></span><i v-html="units"></i></p>
          <p v-html="text"></p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'databox_1',
    props:['total','text'],
    data () {
        return {
            number : '',
            units:'人'
        }
    },
    mounted(){

    },
    watch:{
        'total'(newValue,oldValue){
            this.number = newValue;
            if(newValue>10000){
                this.number = (newValue/10000).toFixed(2);
                this.units = '万人';
            }
        }
    }
}
</script>

<style scoped>
    .databox_1{
        width: 50%;
        color: #333;
        font-size: .2rem;
        padding: 1.23rem 0 1.22rem;
        text-align: center;
    }

    .databox_1 span{
        font-size: .6rem;
        font-weight: bold;
        padding: 0 .5rem 0 .46rem;
        cursor: pointer;
    }
    .databox_1 p{
        letter-spacing: 1px;
    }
</style>






























