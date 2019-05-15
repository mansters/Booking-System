/**
* 往返
**/
<template>
  <div id="BackAndForth">
    <el-dialog
      title="往返车票"
      :visible.sncy="backAndForth"
      width="400px"
      append-to-body
      center
      :before-close="twoWayClose"
    >
      <el-form :model="form">
        <el-form-item label="出发城市" >
          <el-select v-model="form.departure" placeholder="请选择出发城市">
            <el-option
              v-for="city in chineseCities"
              :key="city.name"
              :label="city.name"
              :value="city.pinyin">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="到达城市" >
          <el-select v-model="form.arrival" placeholder="请选择到达城市">
            <el-option
              v-for="city in chineseCities"
              :key="city.name"
              :label="city.name"
              :value="city.pinyin">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出发日期">
          <el-date-picker
            v-model="form.data"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="返回日期">
          <el-date-picker
            v-model="form.data"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div class="changeCity">
        <div class="changeIcon" @click="changeCity">
          <i class="el-icon-sort"></i>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="twoWayClose">取 消</el-button>
        <el-button type="primary" @click="openit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ChineseCities  from '@/router/Home/ChineseCities';
  import {mapActions,mapState} from 'vuex'
  export default {
    name: "BackAndForth",
    computed:{ //vuex获取定义的参数
      ...mapState('ticket',{
        backAndForth:state =>state.backAndForth
      })
    },
    data(){
      return{
        chineseCities: ChineseCities,
        form:{
          departure:'',
          arrival:'',
          date:''
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() < Date.now() ;
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '明天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          },
            {
              text: '30天后',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
                picker.$emit('pick', date);
              },
            }
          ]
        },
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeTwoWay',
        'openSeats'
      ]),
      twoWayClose(){
        this.closeTwoWay()
      },
      openit(){
        this.closeTwoWay()
        this.openSeats()
      },
      changeCity(){
        let _this = this
        let city = _this.form.departure
        _this.form.departure = _this.form.arrival
        _this.form.arrival = city
      }
    }
  }
</script>

<style scoped lang="scss">
  .changeCity{
    position: absolute;
    top: 90px;
    right: 60px;
    width: 20px;
    height: 70px;
    border: 1px solid #969896;
    border-left: none;
    .changeIcon{
      position: absolute;
      left: 10px;
      top: 27px;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: #ffd04b;
      text-align: center;
      cursor:pointer;
      i{
        color:#ffffff;
        font-size: 18px;
        line-height: 20px;
      }
    }
  }
  .changeIcon :hover {
    top: 30px;
  }
  #BackAndForth{

  }
</style>
