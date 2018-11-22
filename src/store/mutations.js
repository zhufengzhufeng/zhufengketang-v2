import * as Types from './mutation-types';
export default {
  [Types.GET_SLIDERS](state,payload){
    // 状态中的属性更新 最好是一个新的地址
    state.sliders = payload;
    localStorage.setItem('sliders', JSON.stringify(payload));
  },
  [Types.GET_LESSONS](state,payload){
    state.lessons = payload
  }
}
