<template>
  <div class="home-page">
    <BannerCarousel/>
    <div class="view-container-main">
      <SliderCarousel/>
    </div>
    <div class="untrustworthy-persons">
      <div class="view-container-main">
        <UntrustworthyPersons/>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerCarousel       from './BannerCarousel';
  import SliderCarousel       from './SliderCarousel'
  import UntrustworthyPersons from './UntrustworthyPersons'


  export default {
    name      : "Home",
    components: {
      BannerCarousel,
      SliderCarousel,
      UntrustworthyPersons
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .home-page {
    width: 100%;
    height: 100%;

    .untrustworthy-persons {
      background: whitesmoke;
    }
  }
</style>
