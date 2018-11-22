import * as apis from '@/api/home.js'
export default {
  // 获取轮播图的动作
  async GET_SLIDERS({commit}){
    try{
      // async + await 获取数据
      let sliders = await apis.getSlider()
      commit('GET_SLIDERS', sliders);
    }catch(e){
      console.log(e);
    }
  }
}
