<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal"
               @select="onSelectMenu"
               background-color="#3B99FC"
               text-color="rgb(230, 230, 230)"
      >
        <li class="nav-menu-icon">
          <img :src="imgLogo" alt="">
        </li>
        <el-menu-item index="index">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">车票</template>
          <el-submenu index="2-1">
            <template slot="title">购票</template>
            <el-menu-item index="2-1-1">单程</el-menu-item>
            <el-menu-item index="2-1-2">往返</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-2">退票</el-menu-item>
          <el-menu-item index="2-3">改签</el-menu-item>
          <el-menu-item index="2-3">信息查询</el-menu-item>
        </el-submenu>

        <UserDropdown  v-if="loginUser" class="nav-menu-right"/>
        <el-menu-item v-else
                      index="login"
                      class="nav-menu-right"
        >
          登录
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <SideBar></SideBar>
      <router-view></router-view>
    </el-main>

    <template v-if="!loginUser">
      <LoginFormDialog :visible.sync="loginDialogVisible" @open-sign-up-dialog="signUpDialogVisible = true" />
      <SignUpFormDialog :visible.sync="signUpDialogVisible" />
    </template>
  </el-container>
</template>

<script>
  import {mapMutations, mapState}                  from 'vuex'
  import UserTypes, {namespace as UserNamespace} from '@/store/User/types';
  import imgLogo from '@/assets/logo.png';

  import LoginFormDialog from './LoginFormDialog';
  import SignUpFormDialog from './SignUpFormDialog'
  import UserDropdown from './UserDropdown';
  import SideBar from '@/components/SideBar/SideBar'


  export default {
    name    : "ViewContainer",
    data() {
      return {
        loginDialogVisible: false,
        signUpDialogVisible: false,
        imgLogo
      }
    },
    computed: {
      ...mapState(UserNamespace, [
        'loginUser'
      ])
    },
    methods : {
      onSelectMenu(index) {
        switch (index) {
          case 'login': {
            this.loginDialogVisible = true;
            break;
          }
        }
      }
    },
    components: {
      LoginFormDialog,
      SignUpFormDialog,
      UserDropdown,
      SideBar
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .nav-menu-icon {
    width: 150px;
    text-align: center;
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;

    img {
      height: 100%;
      padding: 5px;
      box-sizing: border-box;
    }
  }
  .nav-menu-right {
    float: right !important;

    &:hover {
      color: #000;
    }
  }

  .el-main {
    padding: 0;
  }

  .view-container-main {
    width: 70vw;
    margin: 0 auto;
    padding: 30px 0;
  }
</style>
