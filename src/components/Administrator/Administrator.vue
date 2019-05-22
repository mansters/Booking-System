<template>
    <div id="Administrator">
      <el-container>
        <el-header class="AdministratorHeader">
          <el-row type="flex" justify="center">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#3B99FC"
              text-color="rgb(230, 230, 230)"
            >

              <el-menu-item index="1">
                <li class="nav-menu-icon">
                  <img :src="imgLogo" alt="">
                </li>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">车次管理</template>
                <el-menu-item index="2-1">新建车次</el-menu-item>
                <el-menu-item index="2-2">公开车次</el-menu-item>
                <el-menu-item index="2-3">删除车次</el-menu-item>
                <el-menu-item index="2-4">修改车次</el-menu-item>
              </el-submenu>
              <el-menu-item index="3">删库跑路</el-menu-item>
              <el-menu-item index="4">修改管理员权限</el-menu-item>
            </el-menu>
          </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <DeleteDatabase/>
    </div>
</template>

<script>
  import DeleteDatabase from './DeleteDatabase/DeleteDatabase'
  import imgLogo     from '@/assets/logo.png';
  import {mapActions,mapState} from 'vuex'
  export default {
    name: 'Administrator',
    components:{
      DeleteDatabase
    },
    data(){
      return{
        activeIndex2:"2",
        imgLogo:imgLogo
      }
    },
    methods:{
      ...mapActions('administrator',[
            'openDeleteDatabase'
      ]),
      handleSelect(index, indexPath){
            switch (index) {
              case '2-1':
                this.$router.push({path:'/Add'})
                break
              case '2-2':
                this.$router.push({path:'/Release'})
                break
              case '2-3':
                this.$router.push({path:'/Delete'})
                break
              case '2-4':
                this.$router.push({path:'/Edit'})
                break
              case '3':
                this.openDeleteDatabase()
                break
              case '4':
                this.$router.push({path:'/Administrator'})
                break
              default:
                break
            }
      }
    }
  }
</script>

<style scoped lang="scss">
.el-menu-demo{
  background-color:#3B99FC;
    margin:0;
  .nav-menu-icon{
    width: 150px;
    text-align: center;
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;
    img{
      height: 100%;
      padding: 5px;
      box-sizing: border-box;
    }
  }
}
#Administrator{
  width: 100%;
  margin:0;
  padding: 0;
  .AdministratorHeader{
    background-color: #3B99FC;
  }
}
</style>
