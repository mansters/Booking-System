<template>
    <div id="Release">
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
            <el-button @click="release(scope.row)">发布</el-button>
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
    name: 'Release',
    components:{
      Breadcrumb
    },
    data(){
      return{
        tableData:Train
      }
    },
    methods:{
      changeTime(data){
        return ChangeTinme(data)
      },
      release(data){
          this.$message.success(data.origin+'到'+data.destination+'的车票信息已发布')
      }
    }
  }
</script>

<style scoped lang="scss">
  #Release{
    width:60%;
    margin:auto;
  }
</style>
