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
    <OrderDialog :visible.sync="orderDialogVisible" @show-qr-code="showQrCode"/>
    <QrCodeDialog :visible.sync="qrCodeDialogVisible" />
  </CollapseMenu>
</template>

<script>
  import CollapseMenu from './CollapseMenu'
  import SongDialog from '@/components/Song/SongDialog'
  import OrderDialog from '@/components/Order/OrderDialog';
  import QrCodeDialog from '@/components/QrCodeDialog';


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
        songDialogVisible: false,
        orderDialogVisible: false,
        qrCodeDialogVisible: false,
      }
    },
    methods: {
      openDialog(icon) {
        switch (icon) {
          case 'icon-diancan': {
            this.orderDialogVisible = true;
            break;
          }
          case 'icon-maikefeng': {
            this.songDialogVisible = true;
            break;
          }
        }
      },
      showQrCode() {
        this.qrCodeDialogVisible = true;
      }
    },
    components: {
      CollapseMenu,
      SongDialog,
      OrderDialog,
      QrCodeDialog
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
