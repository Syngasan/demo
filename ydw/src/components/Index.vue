<template>
  <div class="ydw" v-if="indexData.length>0">
    <!-- ysd-head start -->
    <div class="ydw-head">
      <div class="ydw-head-top">
        <div class="ydw-head-top-search">
          <form action>
            <input
              type="text"
              name="search"
              class="ydw-head-top-search-inp"
              placeholder="Montagne jeunesse"
            />
          </form>
          <i class="search-ico"></i>
        </div>
      </div>
    </div>
    <!-- ysd-head end -->
    <!-- ydw-main start -->
    <div class="ydw-main">
      <!-- 今日热门 -->
      <div class="ydw-main-hot">
        <div class="ydw-main-hot-top w">
          <i class="ydw-main-icon hot-icon"></i>
          <h3 class="ydw-main-title">{{indexData[0].name}}</h3>
        </div>
        <div class="ydw-main-bottom ydw-main-hot-bottom">
          <ul class="clearFix">
            <li
              class="ydw-main-bottom-con ydw-main-hot-bottom-con"
              v-for="(item,index) in indexData[0].list"
              :key="index"
            >
              <router-link :to="'/prodel/'+item.id">
                <img :src="item.thumbnail" />
                <p class="hot-price clearFix">
                  <span>&yen;{{parseFloat(item.reduct_price).toFixed(2)}}</span>
                  <span>&yen;{{parseFloat(item.original_price).toFixed(2)}}</span>
                </p>
                <p class="hot-title">{{item.name}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- 产品专区 -->
      <div class="ydw-main-pro">
        <div class="ydw-main-pro-list" v-for="(item,index) in newArr" :key="index">
          <div class="ydw-main-pro-list-top w">
            <i class="ydw-main-icon pro-icon"></i>
            <h3 class="ydw-main-title">{{item.name}}</h3>
          </div>
          <div class="ydw-main-bottom ydw-main-pro-list-bottom">
            <ul class="clearFix">
              <li class="ydw-main-bottom-con" v-for="(item,index) in item.list" :key="index">
                <router-link :to="'/prodel/'+item.id">
                  <img :src="item.thumbnail" alt />

                  <p class="pro-title">{{item.name}}</p>
                  <p class="pro-price clearFix">
                    <span>&yen;{{parseFloat(item.reduct_price).toFixed(2)}}</span>
                    <span>&yen;{{parseFloat(item.original_price).toFixed(2)}}</span>
                  </p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- ydw-main end -->
    <Tab type="0"></Tab>
  </div>
</template>

<script>
import { Indicator,Toast } from "mint-ui";
import Tab from "./Tab";
import sUrl from "../urlConfig";

export default {
  name: "Index",
  data() {
    return {
      indexData: [],
      newArr: []
    };
  },
  methods: {},
  components: {
    Tab
  },
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
    this.axios
      .get(sUrl.sUrl + "/getIndexData", { timeout: 2000 })
      .then(res => {
        if (res.data.code == 200 && res.data.success) {
          this.indexData = res.data.data;
          for (var i = 0; i < this.indexData.length; i++) {
            if (i != 0) {
              this.newArr.push(this.indexData[i]);
            }
          }
          Indicator.close();
        }
      })
      .catch(err => {
         Indicator.close();
        let instance = Toast('网络似乎不行啊..');
      });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("../assets/less/index.less");
</style>
