<template>
  <div class="banner-carousel">
    <el-carousel
      height="450px"
      arrow="never"
    >
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>

    <div class="search-form">
      <h1>车票查询</h1>
      <SearchTicketForm />
    </div>
  </div>
</template>

<script>
  import BannerImage_01 from '@/assets/Banner/banner08.jpg';
  import BannerImage_02 from '@/assets/Banner/banner10.jpg';
  import BannerImage_03 from '@/assets/Banner/banner12.jpg';
  import BannerImage_04 from '@/assets/Banner/banner19.jpg';

  import SearchTicketForm from './SearchTicketForm'


  export default {
    name: "BannerCarousel",
    data() {
      return {
        banners: [BannerImage_01, BannerImage_02, BannerImage_03, BannerImage_04]
      }
    },
    components: {
      SearchTicketForm
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .banner-carousel {
    position: relative;

    .el-carousel__item {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 100%;
      }
    }

    .search-form {
      h1 {
        text-align: center;
        color: darkgray;
        padding: 10px;
        border-bottom: 2px solid darkgray;
        margin-bottom: 40px;
      }

      border-radius: 6px;
      padding: 0 50px 40px 40px;
      position: absolute;
      top: 20px;
      left: 10vw;
      z-index: 999;
      width: 400px;
      background: #fff;

      .el-form-item__content > * {
        width: calc(100% - 10px);
      }
    }
  }
</style>
