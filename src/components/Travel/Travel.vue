<template>
  <div id="Travel">
    <div class="booking" @click="booking">
     >  一场说走就走的旅行 - 你的专属目的地  <
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "Travel",
    data(){
      return{
      }
    },
    methods:{
      ...mapActions('ticket',[
        'openExclusive'
      ]),
      booking(){
        // this.openExclusive()
        this.$router.push({path:'/Exclusive'})
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
    letter-spacing: 2px;
    cursor: pointer;
  }
</style>
