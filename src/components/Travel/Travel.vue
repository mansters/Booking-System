<template>
  <div id="Travel">
    <div class="booking" @click="booking">
      一场说走就走的旅行-你的专属目的地
    </div>
  </div>
</template>

<script>
  export default {
    name: "Travel",
    data(){
      return{
      }
    },
    methods:{
      booking(){
        alert('这个是订票')
      }
    }
  }
</script>

<style scoped lang="scss">
  .booking{
    width: 100%;
    height: 30px;
    font-size: 22px;
    line-height: 30px;
    color:#fff;
    text-align: center;
    margin-top: 14px;
  }
</style>
