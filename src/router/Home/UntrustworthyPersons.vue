<template>
  <div class="untrustworthy-persons">
    <h1>失信人员名单</h1>
    <el-row>
      <el-col :span="8" v-for="item in 12" :key="item">
        <div class="untrustworthy-persons-item">
          <img :src="person.pic" alt="">
          <div class="info">
            <div class="info-item">姓名: {{person.name}}</div>
            <div class="info-item">证件类型: {{person.idType}}</div>
            <div class="info-item">证件号码: {{person.idNumber}}</div>
            <div class="info-item">失信原因: {{person.reason}}</div>
          </div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import Icon_Person from '@/assets/Person.png';


  export default {
    name: "UntrustworthyPersons",
    data() {
      return {
        person: {
          name    : '王小虎',
          pic     : Icon_Person,
          idType  : '身份证',
          idNumber: '110120XXXXXXXX1239',
          reason  : '动车组卫生间内吸烟'
        }
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .untrustworthy-persons {
    h1 {
      text-align: center;
      font-size: 2em;
      margin-bottom: 30px;
    }

    .untrustworthy-persons-item {
      display: flex;
      width: 400px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid lightgrey;
      cursor: pointer;
      background-color: #fff;
      margin: 15px 0;
      transition: all .3s;

      img {
        width: 120px;
        height: 140px;
        margin-right: 20px;
      }

      .info {
        display: flex;
        flex-direction: column;

        .info-item {
          flex: 1;
          display: flex;
          align-items: center;
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.45);
        color: #fff;
        transform: scale(1.05, 1.05);
      }
    }
  }
</style>
