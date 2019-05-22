import {
  OPEN_DATABASE,
  CLOSE_DATABASE
}from './type'
const state = {
    deleteDatabase:false
}
const actions ={
  openDeleteDatabase:({commit})=>{
    commit(OPEN_DATABASE)
  },
  closeDeleteDatabase:({commit})=>{
    commit(CLOSE_DATABASE)
  }
}
const mutations = {
  [OPEN_DATABASE](state){
    state.deleteDatabase = true
  },
  [CLOSE_DATABASE](state){
    state.deleteDatabase = false
  }
}

export default {
  namespaced: true,
  mutations,
  state,
  actions
}
