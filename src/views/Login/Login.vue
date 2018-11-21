<template>
  <div class="box">
     <mt-header title="登录" class="header">
          <div slot="left">
            <mt-button  icon="back" @click="back">返回</mt-button>
          </div>
      </mt-header>
      <div class="login-box">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"  v-model="password"></mt-field>
        <mt-button size="large" type="primary" @click="login">登录</mt-button>
        <mt-button size="large" type="default" @click="reg">
           注册
        </mt-button>
    </div>
  </div>
</template>
<script>
import * as apis from '@/api/user'
export default {
  data(){
    return {username:'',password:''}
  },
  methods:{
    async login(){
      // 登录 通过cookie ， jwt json web token
      let res = await apis.login({username:this.username,password:this.password});
      // 访问登录接口时 服务器会给你一个令牌，后期判断是否登录过就可以通过这个令牌发请求
      localStorage.setItem('token',res.token); // 需要在发请求的时候增加一个验证的头，服务器会根据这个头判断你是否有权限  200 202 301 302 304 400 401 403 404 415 500 502
      this.$router.push('/home');
    },
    back(){
      this.$router.history.go(-1);
    },
    reg(){
      this.$router.push('/reg');
    }
  }
};
</script>
<style>
.box {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 100;
}
</style>
