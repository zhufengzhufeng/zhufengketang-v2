export default {
  'GET_SLIDERS'(state,payload){
    // 状态中的属性更新 最好是一个新的地址
    state.sliders = payload
  }
}