import * as apis from '@/api/home.js'
import * as Types from './mutation-types';
export default {
  // 获取轮播图的动作
  async [Types.GET_SLIDERS]({commit}){
    try{
      // async + await 获取数据
      let sliders = await apis.getSlider()
      commit(Types.GET_SLIDERS, sliders);
    }catch(e){
      console.log(e);
    }
  },
  async [Types.GET_LESSONS]({commit}){
    try{
      let lessons = await apis.getLesson();
      commit(Types.GET_LESSONS,lessons);
    }catch(e){
      console.log(e);
    }
  }
}
