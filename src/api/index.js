import axios from 'axios';
import MintUi from 'mint-ui'
// 扩展axios
// 配置默认路径
axios.defaults.baseURL = 'http://localhost:3000';
import router from '@/router.js'
// 什么都没做  在发请求前 可以显示一个loading
axios.interceptors.request.use(function(config) {
  // 在发送请求的时候增加一个头
  config.headers = {
    'Authorization':'Bearer '+localStorage.getItem('token')
  }
  MintUi.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});
// 对响应的拦截, 提前处理一下  回来后可以隐藏loading
axios.interceptors.response.use(function(res){
  MintUi.Indicator.close();
  if(res.data.code === 1){ // 成功状态
    return res.data.data;
  }
  // 返回一个失败的promise
  return Promise.reject(res);
},function(err){ // 当前失败了
  MintUi.Indicator.close();
  if(err.response.status == 401){
    router.push('/login'); // 只要没权限 去login页面
  }
});
// 默认情况下 前端登录后服务端会增加一个token给前端，前端需要把token保存起来
// 每次发送请求都增加一个请求头'Authorization':'Bearer token'
// 服务器会校验token的正确性 
// 如果发生401 跳转到登录页面

export default axios;