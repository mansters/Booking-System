/**
* 选座页面
**/
<template>
  <div id="ChooseTheSeat">
    <el-dialog
      title="选座"
      width="600px"
      :visible.sync="setShow"
      center
      append-to-body
      :before-close="closeSet"
    >
      <div class="choseSetMain">
        <div class="origin">
          <span>天津西 - 廊坊</span>
        </div>
        <div class="TravelTime">
          <span>时间：10:20</span>
        </div>
        <div class="choseSetBox">
          <div class="choseCarriage">选择车厢</div>
          <div class="carriage">
            <div v-for="index in 16" :key="index" >
              {{index}}
            </div>
          </div>
          <div class="choseSet">
            <div class="trainWindow">车 窗</div>
            <div class="trainSeat">
              <div class="setNumber" v-for="(item,index) in 16" :key="index">
                <div>{{index+1}}</div>
              </div>
            </div>
            <div class="trainSeat">
              <div  class="set" v-for="(item,index) in 16" :key="index">
                <div :title="index">E</div>
                <div :title="index">D</div>
              </div>
            </div>
            <div class="aisle">走 道</div>
            <div class="trainSeat">
              <div class="set" v-for="(item,index) in 16" :key="index">
                <div :title="index">C</div>
                <div :title="index">B</div>
                <div :title="index">A</div>
              </div>
            </div>
            <div class="trainWindow">车 窗</div>
          </div>
        </div>
      </div>
      <div class="choseSetFooter">
        <div class="pay">
          <span class="payNumber">需支付：<label class="payMoney">{{payMoney}}</label></span>
        </div>
        <div class="buy">
          <el-button>购 票</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import  {mapState,mapActions} from 'vuex'
  let sets = document.getElementsByClassName('set')
  let seats = []
  setTimeout( function () {
    seats = [...sets]
    let cc = []
    seats.forEach( item=>{
      cc = [...item.children]
      cc.forEach( res =>{
        res.onclick =function (e) {
          console.log(res.readOnly)
          if (res.className === undefined || res.className === null || res.className === ''){
            res.classList.add('test')
          }else {
            res.classList.remove('test')
          }

        }
      })
    })
  })

  export default {
    name: 'ChooseTheSeat',
    computed:{
      ...mapState('ticket',{
        setShow: state=>state.seats
      })
    },
    data(){
      return{
        payMoney: 99,
        testAdd:[ //测试已选车座
          {
            carriageNumber:'1', // 车厢号
            activedSeats:{ //已选座位
              activeNumber: '1', //已选的牌号
              acctivedWord:'A,B,D'//已选的座位
            }
          },
          {
            carriageNumber:'0', // 车厢号
            activedSeats:{ //已选座位
              activeNumber: '2', //已选的牌号
              acctivedWord:'A,D,E'//已选的座位
            }
          }
        ]
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeSeats'
      ]),
      closeSet(){
        this.closeSeats()
      },
      showChose(data){
        let _this = this
        if( Array.isArray(data)){
          data.forEach( item => {
            _this.columnActived(item.activedSeats.activeNumber,item.activedSeats.acctivedWord)
          })
        }
      },
      columnActived(data,activedWord){
        let cc = []
        seats.forEach( item =>{
          cc = [...item.children]
          cc.forEach( res =>{
            if (res.title === data && activedWord.includes(res.innerHTML)){
              res.classList.add('test')
              res.onclick = 'false'
            }else{

            }

          })
        })
      }
    },
    mounted(){
      let _this = this
      setTimeout( function () {
        _this.showChose(_this.testAdd)
      })
    }
  }
</script>

<style scoped lang="scss">

  .el-button{
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #fc9c3b 0%, #ffc95d 100%);
    line-height: 0px;
    color: #fff;
  }
  .choseSetMain{
    width: 100%;
    max-height: 400px;
    overflow-y: scroll;

    .choseSetBox{
      width: 90%;
      height: 300px;
      margin:auto;
      .choseCarriage{
        width: 100%;
        text-align: center;
        line-height: 40px;
      }
      .carriage{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-around;
        div{
          width: 20px;
          height: 20px;
          text-align: center;
          background-color: #0086b3;
          color: #ffffff;
          cursor: pointer;
        }
      }
      .choseSet{
        width: 100%;
        border:1px solid #545c64;
        .trainWindow,.aisle{
          width: 100%;
          text-align: center;
        }
        .trainSeat{
          width: 100%;
          display: flex;
          justify-content: space-around;
          .setNumber{
            width: 20px;
            height: 20px;
            background-color: #55a532;
            color: #ffffff;
            text-align: center;
          }
          .set{
            .test{
              background: #545c64;
            }
            div{
              width: 20px;
              height: 20px;
              background-color: #0077aa;
              font-size: 16px;
              text-align: center;
              margin-top: 4px;
              color: #ffffff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .choseSetFooter{
    width: 100%;
    height: 30px;
    border:1px solid #545c64;
    .pay{
      width: 79.6%;
      height: 30px;
      float: left;
      border-right: 1px solid #969896;
      .payNumber{
        font-weight: 600;
        line-height: 30px;
        margin-left: 20px;
        .payMoney{
          color:#ff0000;
        }
      }
    }
    .buy{
      width: 20%;
      height: 30px;
      float: left;
    }
  }
</style>
