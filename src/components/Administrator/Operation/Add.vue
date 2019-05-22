<template>
    <div id="Add">
      <Breadcrumb/>
      <div class="AddTable">
          <el-table
            :data="tableData"
            style="width: 100%"
            border
          >
            <el-table-column
              prop="origin"
              label="出发地"
              align="center"
              >
            </el-table-column>
            <el-table-column
              prop="destination"
              label="目的地"
              align="center"
            >
            </el-table-column>
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
        </div>
        <div class="AddModule">
          <div class="AddInput">
            <el-input v-model="origin" placeholder="请输入出发地"></el-input>
          </div>
          <div class="AddInput">
            <el-input v-model="destination" placeholder="请输入出发地"></el-input>
          </div>
          <div class="AddInput">
            <el-date-picker
              type="datetime"
              v-model="departureTime"
              placeholder="请选择出发日期时间">
            </el-date-picker>
          </div>
          <div class="AddInput">
            <el-date-picker
              type="datetime"
              v-model="arrivalTime"
              placeholder="请选择到达日期时间">
            </el-date-picker>
          </div>
          <div class="AddButton">
           <el-button @click="addTrain">添加</el-button>
          </div>
        </div>
    </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb/Breadcrumb'
  import ChangeTime from './changeTime'
  export default {
    name: 'Add',
    components:{
      Breadcrumb
    },
    data () {
      return {
        tableData:[],
        origin:'',
        destination:'',
        departureTime:'',
        arrivalTime:''
      }
    },
    methods:{
      addTrain(){
        let _this = this
        console.log(_this.departureTime.getDay())
        _this.tableData.push({origin:_this.origin,
          destination:_this.destination,
          departureTime:ChangeTime(_this.departureTime),
          arrivalTime:ChangeTime(_this.arrivalTime)
        })
      },

    }
  }
</script>

<style scoped lang="scss">
  #Add /deep/ .el-table__empty-block{
    display: none;
  }
#Add{
  width: 60%;
  margin:auto;
  .AddTable{

  }
  .AddModule{
    width: 100%;
    border:1px solid #EBEEF5;
    .AddInput{
      width: 20%;
      float: left;
    }
    .AddButton{
      width: 10%;
      float: left;
    }
  }
}
</style>
