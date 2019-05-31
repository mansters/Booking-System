<template>
  <div id="Travel">
    <div class="booking" @click="booking">
      <img src="../../../static/images/travel/word.png">
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
    height: 60px;
    font-size: 22px;
    line-height: 30px;
    color:#fff;
    text-align: center;
    margin-top: 14px;
    letter-spacing: 2px;
    cursor: pointer;
    img{
      height: 60px;
    }
  }
</style>
