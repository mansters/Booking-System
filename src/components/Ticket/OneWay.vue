/**
*   单程
**/
<template>
  <div id="OneWay">
    <el-dialog title="单程票预订"
               :visible.sync="oneWayShow"
               width="400px"
               center
               append-to-body
               :before-close="oneWayClose"
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="oneWayClose">取 消</el-button>
        <el-button type="primary" @click="openSet">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ChineseCities  from '@/router/Home/ChineseCities';
  import {mapState,mapActions} from 'vuex'
  import Ticket from './Ticket'
  export default {
    name: "OneWay",

    computed: {
      ...mapState('ticket',{
        oneWayShow :state=>state.oneWayShow
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
        dialogVisible: false
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeOneWay',
        'openSeats'
      ]),
      oneWayClose(){
        this.closeOneWay()
      },
      openSet(){
        this.closeOneWay()
        this.openSeats()
      },
      endDate(){
        let date = new Date()
        return date+ (30*3600*1000*24)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
