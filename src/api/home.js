// home文件存放所有和首页相关的请求
import axios from './index.js'
// 1.获取轮播图数据的接口
export function getSlider(){
  return axios.get('/home/slider')
}