<template>
  <div class="home-page">
    <Banner />
    <div class="view-container-main">
      <SliderCarousel/>
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
  import Banner               from './Banner';
  import SliderCarousel       from './SliderCarousel'
  import UntrustworthyPersons from './UntrustworthyPersons'
  import AnimationBackground  from '@/components/AnimationBackground/AnimationBackground';


  export default {
    name      : "Home",
    components: {
      Banner,
      SliderCarousel,
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
