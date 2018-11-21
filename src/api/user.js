import axios from './index.js';

export let reg = (opts) =>{ // opts={username:xxx,password:xxx}
  return axios.post('/user/reg',opts);
}
export let login = (opts) =>{
  return axios.post('/user/login',opts);
};