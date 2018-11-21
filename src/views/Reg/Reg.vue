<template>
  <div class="box">
     <mt-header title="注册" class="header">
          <div slot="left">
            <mt-button  icon="back" @click="back">返回</mt-button>
          </div>
      </mt-header>
      <div class="login-box">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"  v-model="password"></mt-field>
        <mt-button size="large" type="primary" @click="reg">注册</mt-button>
    </div>
  </div>
</template>
<script>
import * as apis from '@/api/user.js'
export default {
  data(){
    return {username:'',password:''}
  },
  methods:{
    back(){
      this.$router.history.go(-1);
    },
    async reg(){ // async + await 可以解决部分异步问题 好处就是异步代码更像同步的，会阻塞代码执行
      try{
        // 等待注册成功后 会进入到登录页面
        await apis.reg({username:this.username,password:this.password});
        this.$toast({
          duration:500,
          message:'恭喜ok了'
        });
        setTimeout(() => {
          this.$router.push('/login')
        }, 500);
      }catch(e){
        console.log(e);
      }
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
