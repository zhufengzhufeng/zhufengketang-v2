import axios from './index.js';

// 引入ajax 
// 获取我的课程列表数据
export let getMyLesson = () =>{
  return axios.get('/lesson/list');
}
