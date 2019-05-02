<template>
  <el-submenu index="mine">
    <template slot="title">我的</template>
    <el-menu-item index="2-1">尊敬的, {{loginUser.username}}</el-menu-item>
    <el-menu-item index="2-2">我的会员</el-menu-item>
    <el-menu-item index="2-3">我的订单</el-menu-item>
    <el-menu-item index="2-4">个人信息</el-menu-item>
    <el-menu-item index="2-5" @click="logout">退出</el-menu-item>
  </el-submenu>
</template>

<script>
  import {mapState, mapActions}                  from 'vuex';
  import UserTypes, {namespace as UserNamespace} from '@/store/User/types';


  export default {
    name    : "UserDropdown",
    computed: {
      ...mapState(UserNamespace, [
        'loginUser'
      ])
    },
    methods : {
      ...mapActions(UserNamespace, {
        logout: UserTypes.ACTION.LOGOUT
      })
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">

</style>
