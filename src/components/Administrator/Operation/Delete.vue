<template>
    <div id="Delete">
      <Breadcrumb/>
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
          label="出发时间"
          align="center"
        >
          <template slot-scope="scope">
              <span>
                {{changeTime(scope.row.departureTime)}}
              </span>
          </template>
        </el-table-column>
        <el-table-column
          label="到达时间"
          align="center"
        >
          <template slot-scope="scope">
              <span>
                {{changeTime(scope.row.arrivalTime)}}
              </span>
          </template>
        </el-table-column>
        <el-table-column
          label="删除"
          align="center"
        >
          <template slot-scope="scope">
              <el-button @click="remove(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb/Breadcrumb'
  import Train from './train'
  import ChangeTinme from './changeTime'
  export default {
    name: 'Delete',
    components:{
      Breadcrumb
    },
    data(){
      return{
        tableData:Train
      }
    },
    methods:{
      remove(data){
        console.log(data)
       for (let i=0; i < this.tableData.length;i++){
          if(this.tableData[i].id === data.id){
              this.tableData.splice(i,1)
          }
        }
      },
      changeTime(data){
      return  ChangeTinme(data)
      }
    }
  }
</script>

<style scoped lang="scss">
    #Delete{
      width: 60%;
      margin:auto
    }
</style>
