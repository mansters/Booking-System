<template>
  <div class="untrustworthy-persons">
    <h1>失信人员名单</h1>
    <AnimateList :list="persons" />
  </div>
</template>

<script>
  import Icon_Person from '@/assets/Person.png';
  import AnimateList from '@/components/AnimateList/AnimateList';


  export default {
    name: "UntrustworthyPersons",
    data() {
      return {
        persons: [
          {
            name    : '王小虎',
            pic     : Icon_Person,
            idType  : '身份证',
            idNumber: '110120XXXXXXXX1239',
            reason  : '动车组卫生间内吸烟'
          },
          {
            name    : '王小虎',
            pic     : Icon_Person,
            idType  : '身份证',
            idNumber: '110120XXXXXXXX1239',
            reason  : '动车组卫生间内吸烟'
          },
          {
            name    : '王小虎',
            pic     : Icon_Person,
            idType  : '身份证',
            idNumber: '110120XXXXXXXX1239',
            reason  : '动车组卫生间内吸烟'
          },
          {
            name    : '王小虎',
            pic     : Icon_Person,
            idType  : '身份证',
            idNumber: '110120XXXXXXXX1239',
            reason  : '动车组卫生间内吸烟'
          },
          {
            name    : '王小虎',
            pic     : Icon_Person,
            idType  : '身份证',
            idNumber: '110120XXXXXXXX1239',
            reason  : '动车组卫生间内吸烟'
          },
          {
            name    : '王小虎',
            pic     : Icon_Person,
            idType  : '身份证',
            idNumber: '110120XXXXXXXX1239',
            reason  : '动车组卫生间内吸烟'
          }
        ]
      }
    },
    components: {
      AnimateList
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .untrustworthy-persons {
    color: #fff;
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
