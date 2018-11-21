// home文件存放所有和首页相关的请求
import axios from 'axios'
// 1.获取轮播图数据的接口
export function getSlider(){
  return axios.get('http://localhost:3000/home/slider')
}