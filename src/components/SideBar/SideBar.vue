<template>
  <CollapseMenu>
    <div class="view-container-side-bar">

      <div class="side-bar-item"
           v-for="functional in functionalList"
           :key="functional.icon"
           @click="openDialog(functional.icon)"
      >
        <div>
          <span :class="['iconfont', functional.icon]"></span>
          {{functional.title}}
        </div>
      </div>
    </div>

    <SongDialog :visible.sync="songDialogVisible" />
  </CollapseMenu>
</template>

<script>
  import CollapseMenu from './CollapseMenu'
  import SongDialog from '@/components/Song/SongDialog'


  export default {
    name      : "SideBar",
    data() {
      return {
        functionalList: [
          {icon: 'icon-diancan', title: '点餐'},
          {icon: 'icon-maikefeng', title: '点歌'},
          {icon: 'icon-nianling', title: '年龄'},
          {icon: 'icon-nv', title: '女团'}
        ],
        songDialogVisible: true
      }
    },
    methods: {
      openDialog(icon) {
        switch (icon) {
          case 'icon-maikefeng': {
            this.songDialogVisible = true;
            break;
          }
        }
      }
    },
    components: {
      CollapseMenu,
      SongDialog
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .view-container-side-bar {
    background: rgba(0, 0, 0, 0.75);
    color: #b3b3b3;
    height: 100%;
    width: 100%;
    border-radius: 6px 0 0 6px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);


    .side-bar-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:first-child {
        border-radius: 6px 0 0 0;
      }

      &:last-child {
        border-radius: 0 0 0 6px;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.35);
        color: #fff;
      }

      .iconfont {
        font-size: 1em;
      }
    }
  }
</style>
