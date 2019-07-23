<template>
  <div class="ydw-login">
    <!-- 头部 -->
    <div class="ydw-login-head">
      <a href="##" class="back-l">
        <i class="back" @click="backHistory"></i>
      </a>
      <p class="ydw-login-title">登录</p>
      <p class="ydw-login-title-r">
        <router-link to="/register">注册</router-link>
      </p>
    </div>
    <!-- 主体 -->
    <div class="ydw-login-main">
      <form action class="ydw-login-main-form">
        <p class="ydw-login-p b-b">
          手机号:
          <input type="text" class="txt" v-model.number="phone" />
        </p>
        <p class="ydw-login-p b-b">
          密&nbsp;&nbsp;&nbsp;码:
          <input type="password" class="txt" v-model="password" />
        </p>

        <p class="ydw-login-p login-btn">
          <input type="submit" class="next" value="登录" @click.prevent="login" />
        </p>
        <a href="##" class="forget-psw">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import sUrl from "../urlConfig";
import { Toast } from "mint-ui";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    login() {
      var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      var reg2 = /^\d{6}$/;
      if (reg.test(this.phone) || reg2.test(this.password)) {
        this.axios
          .get(sUrl.sUrl + "/login", {
            params: {
              phone: this.phone,
              password: this.password
            },
            timeout: 1000
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 1) {
              Toast({
                message: "登录成功",
                duration: 3000
              });
              setTimeout(() => {
                this.$router.push({
                  path: "/"
                });
              }, 4000);
            } else {
              Toast({
                message: "输入的账号未注册或者密码输入错误",
                duration: 2000
              });
              this.phone = "";
              this.password = "";
            }
          })
          .catch(err => {
            Toast({
              message: "很抱歉，老师服务器不行",
              duration: 2000
            });
          });
      } else {
        Toast({
          message: "请输入11位手机号码和6位纯数字",
          duration: 2000
        });
      }
    },
    backHistory() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/less/login.less");
</style>

