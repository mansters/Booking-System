<template>
    <div id="Edit">
      <Breadcrumb/>
      <el-table
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column
          label="出发地"
          align="center"
        >
          <template slot-scope="scope">
              <el-input v-model="scope.row.origin"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="目的地"
          align="center"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.destination"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="出发时间"
          align="center"
        >
          <template slot-scope="scope">
            <el-date-picker
              type="datetime"
              v-model="scope.row.departureTime"
              placeholder="请选择出发日期时间">
            </el-date-picker>
          </template>
        </el-table-column>
        <el-table-column
          label="到达时间"
          align="center"
        >
          <template slot-scope="scope">
            <el-date-picker
              type="datetime"
              v-model="scope.row.arrivalTime"
              placeholder="请选择出发日期时间">
            </el-date-picker>
          </template>
        </el-table-column>
        <el-table-column
          label="删除"
          align="center"
        >
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb/Breadcrumb'
  import Train from './train'
  export default {
    name: 'Edit',
    components:{
      Breadcrumb
    },
    data(){
      return{
        tableData:Train
      }
    },
    methods:{
      edit(data){
        for(let i=0;i<this.tableData.length;i++){
            if (this.tableData[i].id === data.id){
              this.tableData[i].origin = data.origin
              this.tableData[i].destination = data.destination
              this.tableData[i].departureTime = data.departureTime
              this.tableData[i].arrivalTime = data.arrivalTime
            }
        }
        // console.log(this.tableData)
      }

    }
  }
</script>

<style scoped lang="scss">
  #Edit{
    width: 60%;
    margin:auto;
  }
</style>
