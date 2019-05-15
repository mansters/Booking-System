/**
* 改签
**/
<template>
  <div id="Endorse">
    <el-dialog
      :visible.sync="endorseShow"
      width="400px"
    >
      <div class="tickets" v-for="(item,index) in tickets" :key="index">
        <div class="ticketPlace">
          <span>{{item.origin}} - {{item.destination}}</span>
        </div>
        <div class="ticketTime">
          <span>{{item.departureTime}} - {{item.arrivalTime}}</span>
        </div>
        <div class="ticketButton">
          <el-button @click="ToEndorse" class="exit">改签</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Ticket from './Ticket'

  export default {
    name: "Endorse",
    data(){
      return{
        endorseShow:false,
        tickets:Ticket
      }
    },
    methods:{
      ToEndorse(){
        this.$router.push({path:'/ToEndorse'})
        this.endorseShow = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .tickets {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #969896;
    padding: 6px;

    .exit {
      background: linear-gradient(to right, #FFFF00, #FFD700);;
    }
    span {
      color: #969896;
      line-height: 40px;
      font-weight: 600;
    }

    .ticketPlace {
      float: left;

    }

    .ticketTime {
      float: left;
      margin-left: 30px;
    }

    .ticketButton {
      float: right;
    }
  }
</style>
