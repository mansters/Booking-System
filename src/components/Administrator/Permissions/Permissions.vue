<template>
    <div id="Permissions">
        <el-row>
          <Breadcrumb/>
          <div class="PermissionsTitle">
              人员管理表
          </div>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="id"
              label="id"
              align="center"
              >
            </el-table-column>
            <el-table-column
              prop="name"
              label="权限"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="变更权限"
              align="center"
            >
              <template slot-scope="scope">
                  <el-button>变更</el-button><span>升级为管理员</span>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
    </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb/Breadcrumb'
  export default {
    name: 'Permissions',
    components:{
      Breadcrumb
    },
    data(){
      return{
        tableData:[
          {id:'1',name:'普通'}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  #Permissions /deep/ .el-table th{
    height: 60px;
    font-size:24px;
    line-height: 60px;
    padding: 0;
  }
  #Permissions /deep/ .el-table .cell{
    line-height: 60px;
  }
    #Permissions{
      width: 60%;
      margin:auto;
      .PermissionsTitle{
        width: 100%;
        height: 60px;
        text-align: center;
        font-size: 24px;
        line-height: 60px;
        font-weight: bold;
        color:#ffffff;
        background-color: #0077aa;
      }
    }
</style>
