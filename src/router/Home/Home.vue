<template>
  <div class="home-page">
    <BannerCarousel/>
    <div class="view-container-main">
      <FlexCarousel :list="hotels" />
    </div>
    <div class="untrustworthy-persons">
      <AnimationBackground>
        <div class="view-container-main">
          <UntrustworthyPersons/>
        </div>
      </AnimationBackground>
    </div>
  </div>
</template>

<script>
  import BannerCarousel       from './BannerCarousel';
  import FlexCarousel         from '@/components/FlexCarousel';
  import UntrustworthyPersons from './UntrustworthyPersons'
  import AnimationBackground  from '@/components/AnimationBackground/AnimationBackground';
  import HotelTypes           from './HotelTypes';


  export default {
    name      : "Home",
    data() {
      return {
        hotels: HotelTypes
      }
    },
    components: {
      BannerCarousel,
      FlexCarousel,
      UntrustworthyPersons,
      AnimationBackground
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .home-page {
    width: 100%;
    height: 100%;

    .untrustworthy-persons .animate-list-block {
      margin-bottom: 100px;
    }
  }
</style>
