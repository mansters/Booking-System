<template>
  <div id="ToEndorse">
    <div class="endorseBox">
      <div class="">
        <span>出发地：天津</span>
        <span>目的地：北京</span>
        <span>出发时间：12:30</span>
        <span>到达时间：13:02</span>
      </div>
      <div>
        <el-select v-model="SetOut" placeholder="请选择出发时间">
          <el-option
            v-for="item in ticketTime"
            :key="item.departureTime"
            :label="item.departureTime"
            :value="item.departureTime">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
  import ChineseCities  from '@/router/Home/ChineseCities';
  import TicketTime     from './TicketTime'
  export default {
    name: 'ToEndorse',
    data(){
      return{
        chineseCities:ChineseCities,
        ticketTime: TicketTime,
        SetOut:''
      }
    }
  }
</script>

<style scoped lang="scss">
  #ToEndorse{
    width: 100vw;
    height:93.67vh;
    background:linear-gradient(to bottom  right,#00FA9A, #00BFFF);
    .endorseBox{
      width: 60%;
      margin:auto;
    }
  }

</style>
