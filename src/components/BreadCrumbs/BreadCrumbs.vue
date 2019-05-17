<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in breadCrumbs" :key="index" :to="{path:item.path}">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
  export default {
    name: 'BreadCrumbs',
    data(){
      return{
        breadCrumbs:[
          {
            name:'',
            path:''
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
