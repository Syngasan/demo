<template>
  <div class="ydw-register">
    <!-- 头部 -->
    <div class="ydw-register-head">
      <a href="##" class="back-l">
        <i class="back" @click="backHistory"></i>
      </a>
      <p class="ydw-register-title">个人中心</p>
      <p class="ydw-register-title-r">
        <router-link to="/login">登录</router-link>
      </p>
    </div>
    <!-- 主体 -->
    <div class="ydw-register-main">
      <form action class="ydw-register-main-form">
        <p class="ydw-register-p b-b">
          手机号:
          <input type="text" class="txt" v-model.number="phone" maxlength="11"/>
        </p>
        <p class="ydw-register-p b-b">
          密&nbsp;&nbsp;&nbsp;码:
          <input type="password" class="txt" v-model="password" />
        </p>
        <p class="ydw-register-p b-b">
          验证码:
          <input type="text" class="txt code" />
          <a href="##" class="getMsg">点击获取</a>
        </p>
        <p class="ydw-register-p next-btn">
          <input type="submit" class="next" value="下一步" @click.prevent="register" />
        </p>
        <p class="ydw-register-p agree-txt">
          <span class="agree"></span>我已阅读并同意使用条款和隐私政策
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import sUrl from "../urlConfig";
import { Toast } from "mint-ui";
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    register() {
      var reg1 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      var reg2 = /^\d{6}$/;
      if (reg1.test(this.phone) && reg2.test(this.password)) {
        this.axios
          .post(sUrl.sUrl + "/register", {
            phone: this.phone,
            password: this.password,
            timeout:1000
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 1) {
              Toast({
                message: "注册成功",
                duration: 3000
              });
              setTimeout(() => {
                this.$router.push({
                  path: "/login"
                });
              }, 4000);
            } else {
              console.log(res)
              Toast({
                message: "该账号已注册",
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
          message: "请输入11位手机号码和6位纯数字密码",
          duration: 2000
        });
        this.phone = "";
        this.password = "";
      }
    },
     backHistory() {
      this.$router.go(-1); //返回上一层
    },
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/less/register.less");
</style>

<style>
</style>


