import {
  OPEN_ONE_WAY,
  CLOSE_ONE_WAY,
  OPEN_TWO_WAY,
  CLOSE_TWO_WAY,
  OPEN_REFUND,
  CLOSE_REFUND,
  OPEN_SEATS,
  CLOSE_SEATS,
  OPEN_EXCLUSIVE,
  CLOSE_EXCLUSIVE,
  OPEN_EDORSE,
  CLOSE_EDORSE,
  OPEN_QUERY,
  CLOSE_QUERY
} from './type'

const state = {
  oneWayShow: false,
  backAndForth: false,
  refund:false,
  seats:false,
  exclusiveShow:false,
  edorseShow:false,
  showQuery:false
}
const actions ={
    //打开单程
    openOneWay:({commit})=>{
    commit(OPEN_ONE_WAY)
  },
  // 关闭单程
  closeOneWay:({commit})=>{
  commit(CLOSE_ONE_WAY)
  },
  openTwoWay:({commit})=>{
    commit(OPEN_TWO_WAY)
  },
  closeTwoWay:({commit})=>{
    commit(CLOSE_TWO_WAY)
  },
  openRefund:({commit})=>{
    commit(OPEN_REFUND)
  },
  closeRefund:({commit})=>{
    commit(CLOSE_REFUND)
  },
  openSeats:({commit})=>{
    commit(OPEN_SEATS)
  },
  closeSeats:({commit})=>{
    commit(CLOSE_SEATS)
  },
  openExclusive:({commit})=>{
      commit(OPEN_EXCLUSIVE)
  },
  clooseExclusive:({commit})=>{
      commit(CLOSE_EXCLUSIVE)
  },
  openEdorse:({commit})=>{
    commit(OPEN_EDORSE)
  },
  closeEdorse:({commit})=>{
    commit(CLOSE_EDORSE)
  },
  openQuery:({commit})=>{
      commit(OPEN_QUERY)
  },
  closeQuery:({commit})=>{
      commit(CLOSE_QUERY)
  }
}
const mutations = {
  [OPEN_ONE_WAY](state){
    state.oneWayShow = true
  },
  [CLOSE_ONE_WAY](state){
    state.oneWayShow = false
  },
  [OPEN_TWO_WAY](state){
    state.backAndForth = true
  },
  [CLOSE_TWO_WAY](state){
    state.backAndForth =false
  },
  [OPEN_REFUND](state){
    state.refund = true
  },
  [CLOSE_REFUND](state){
    state.refund = false
  },
  [OPEN_SEATS](state){
    state.seats =true
  },
  [CLOSE_SEATS](state){
    state.seats = false
  },
  [OPEN_EXCLUSIVE](state){
    state.exclusiveShow = true
  },
  [CLOSE_EXCLUSIVE](state){
    state.exclusiveShow = false
  },
  [OPEN_EDORSE](state){
    state.edorseShow =true
  },
  [CLOSE_EDORSE](state){
    state.edorseShow =false
  },
  [OPEN_QUERY](state){
    state.showQuery =true
  },
  [CLOSE_QUERY](state){
    state.showQuery = false
  }
}

export default {
  namespaced: true,
  mutations,
  state,
  actions
}
