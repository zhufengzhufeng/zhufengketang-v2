import axios from 'axios';
import MintUi from 'mint-ui'
// 扩展axios
// 配置默认路径
axios.defaults.baseURL = 'http://localhost:3000';

// 什么都没做  在发请求前 可以显示一个loading
axios.interceptors.request.use(function(config){
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
});

export default axios;