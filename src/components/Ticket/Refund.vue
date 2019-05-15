/**
* 退票
**/
<template>
  <div id="Refund">
    <el-dialog
      :visible.sync="refundShow"
      width="400px"
      :before-close="closeIt"
    >
      <div class="tickets" v-for="(item,index) in tickets" :key="index">
        <div class="ticketPlace">
          <span>{{item.origin}} - {{item.destination}}</span>
        </div>
        <div class="ticketTime">
          <span>{{item.departureTime}} - {{item.arrivalTime}}</span>
        </div>
        <div class="ticketButton">
          <el-button @click="unsubscribe" class="exit">退票</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Ticket from './Ticket'
  import {mapState,mapActions} from 'vuex'

  export default {
    name: "Refund",
    computed:{
      ...mapState('ticket',{
        refundShow:state=>state.refund
      })
    },
    data(){
      return{
        tickets:Ticket
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeRefund'
      ]),
      closeIt(){
        this.closeRefund()
      },
      unsubscribe(){
        this.$message.warning('我们已经收到您的退票申请，我们将在三个工作日内联系您')
      }
    }
  }
</script>

<style scoped lang="scss">
  .tickets{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #969896;
    padding: 6px;
    .exit{
      background:linear-gradient(to  right, #FFFF00, #FFD700);;
    }
    span{
      color: #969896;
      line-height: 40px;
      font-weight: 600;
    }
    .ticketPlace{
      float: left;

    }
    .ticketTime{
      float: left;
      margin-left: 30px;
    }
    .ticketButton{
      float: right;
    }
  }
</style>
