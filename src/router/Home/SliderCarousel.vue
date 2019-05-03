<template>
  <div class="slider-carousel">
    <el-carousel type="card" height="360px">
      <el-carousel-item v-for="(item, index) in imageList" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import SliderImage_01 from '@/assets/Slider/slider_01.jpg';
  import SliderImage_02 from '@/assets/Slider/slider_02.jpg';
  import SliderImage_03 from '@/assets/Slider/slider_03.jpg';
  import SliderImage_04 from '@/assets/Slider/slider_04.jpg';
  import SliderImage_05 from '@/assets/Slider/slider_05.jpg';
  import SliderImage_06 from '@/assets/Slider/slider_06.jpg';
  import SliderImage_07 from '@/assets/Slider/slider_07.jpg';


  export default {
    name: "SliderCarousel",
    data() {
      return {
        imageList: [
          SliderImage_01,
          SliderImage_02,
          SliderImage_03,
          SliderImage_04,
          SliderImage_05,
          SliderImage_06,
          SliderImage_07
        ]
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .slider-carousel {
    .el-carousel__item {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 100%;
      }
    }
  }
</style>
