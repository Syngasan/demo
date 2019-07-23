<template>
      <div class="ydw-perCenter">
        <!-- 头部 -->
        <div class="ydw-perCenter-head">
            <a href="##" class="set-l">
                <i class="set"></i>
            </a>
            <p class="ydw-perCenter-title">个人中心</p>
            <a href="##" class="ydw-perCenter-msg-r">
                <i class="msg"></i>
                <span class="news" v-if="false">9+</span>
            </a>
        </div>
        <!-- 主体 -->
        <div class="ydw-perCenter-main">
            <div class="ydw-perCenter-main-perInfo">
                <div class="yellDiv"></div>
                <p class="per-name">
                    <router-link to="/login">未登录</router-link>
                </p>
                <div class="collection">
                    <i class="coll-icon"></i>
                    <span class="coll-title">我的收藏</span>
                    <span class="coll-num" v-if="false">(5)</span>
                </div>
                <div class="head-img">
                    <img src="../assets/img/ydwDel/图层3.png" alt="" v-if="false">
                </div>
            </div>
            <div class="ydw-perCenter-main-order">
                <div class="ydw-perCenter-main-order-t clearFix">
                    <span class="order-title">我的订单</span>
                    <a href="##" class="order-all">查看全部订单</a>
                </div>
                <div class="ydw-perCenter-main-order-b">
                    <div class="order-del">
                        <a href="##">
                            <i class="order-del-icon pay"></i>
                            <span class="order-del-title">待付款</span>
                        </a>

                    </div>
                    <div class="order-del">
                        <a href="##">
                            <i class="order-del-icon pay1"></i>
                            <span class="order-del-title">待发货</span>
                        </a>
                        <span class="circle" v-if="false">1</span>
                    </div>
                    <div class="order-del">
                        <a href="##">
                            <i class="order-del-icon pay2"></i>
                            <span class="order-del-title">待收货</span>
                        </a>
                        <span class="circle" v-if="false">1</span>
                    </div>
                    <div class="order-del">
                        <a href="##">
                            <i class="order-del-icon pay3"></i>
                            <span class="order-del-title">待评价</span>
                        </a>
                    </div>
                    <div class="order-del">
                        <a href="##">
                            <i class="order-del-icon pay4"></i>
                            <span class="order-del-title">退款/售后</span>
                        </a>
                    </div>

                </div>
            </div>
            <a class="ydw-perCenter-main-address">收货地址管理</a>
        </div>
        <Tab type="3"></Tab>
    </div>
            
</template>
<script>
import Tab from './Tab';
export default {
    name:'PerCenter',
    data() {
        return {
            
        }
    },
    components:{
      Tab
  }
}
</script>

<style lang="less" scoped>
body{
  background-color: #fafafa;
}
@import url("../assets/less/perCenter.less");
</style>
