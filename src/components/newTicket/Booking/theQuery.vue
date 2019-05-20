<template>
    <div id="theQuery">
        <el-row>
          <div class="queryNow">
            <div class="queryInput">
              <el-input v-model="origin" placeholder="出发地"></el-input>
            </div>
            <div class="queryInput left20">
              <el-input v-model="destination" placeholder="目的地"></el-input>
            </div>
            <div class="querySearch">
              <el-button class="searchQuery" @click="search">查询</el-button>
            </div>
          </div>
        </el-row>
        <el-row>
          <el-table
            :data="timeData"
            style="width: 100%"
            border
            @row-click="choseSeat"
          >
            <el-table-column
              prop="departureTime"
              label="出发时间"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="arrivalTime"
              label="到达时间"
              align="center"
            >
            </el-table-column>
          </el-table>
        </el-row>
    </div>
</template>

<script>
  import ticketTime from '../../Ticket/TicketTime'
  import {mapActions,mapState} from 'vuex'
  export default {
    name: 'theQuery',
    data(){
      return{
        timeData:[]
      }
    },
    methods:{
      ...mapActions('ticket',[
        'openSeats'
      ]),
      search(){
        this.timeData = ticketTime
      },
      choseSeat(){
          this.openSeats()
      }
    }
  }
</script>

<style scoped lang="scss">
  #theQuery /deep/ .el-table td{
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }
  #theQuery /deep/ .el-table th{
    font-size: 20px;
    line-height: 40px;
    background: #EAEEF1;

  }
#theQuery{
  .queryNow{
    width: 100%;
    height: 58px;
  }
  .queryInput{
    float: left;
    width: 30%;
  }
  .left20{
    margin-left: 40px;
  }
  .querySearch{
    width: 20%;
    float: right;
    .searchQuery{
      width: 100%;
      background:linear-gradient(to right,#FC9C3B,#FFC95D);
    }
  }
}
</style>
