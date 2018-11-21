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
        <mt-button size="large" type="primary" >登录</mt-button>
        <mt-button size="large" type="default" @click="reg">
           注册
        </mt-button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
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
