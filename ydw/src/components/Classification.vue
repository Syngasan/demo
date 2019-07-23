<template>
  <div class="ydw-classif">
    <!-- 头部 -->
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
    <!-- 主体 -->
    <div class="ydw-classif-main">
      <div class="ydw-classif-main-left">
        <ul>
          <li
            v-for="(item,index) in classData"
            :key="index"
            :class="num==index?'ydw-classif-list current':'ydw-classif-list'"
            @click="num=index"
          >{{item.name}}</li>
        </ul>
      </div>
      <div v-for="(item,index) in classData" :key="item.name">
        <div class="ydw-classif-main-right" v-if="num==index">
          <ul class="clearFix">
            <li class="ydw-classif-pro" v-for="(item,index) in item.list" :key="index">
              <router-link :to="'/prodel/'+item.id">
                <div class="ydw-classif-pro-top">
                  <img :src="item.thumbnail" alt />
                </div>
                <div class="ydw-classif-pro-bottom">{{item.name}}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Tab type="1"></Tab>
  </div>
</template>

<script>
import { Indicator,Toast } from "mint-ui";
import Tab from "./Tab";
import sUrl from "../urlConfig";
export default {
  name: "Classification",
  data() {
    return {
      num: 0,
      classData: []
    };
  },
  components: {
    Tab
  },
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle"
    });
    this.axios
      .get(sUrl.sUrl + "/getClassify", { timeout: 2000 })
      .then(res => {
        if (res.data.code == 200 && res.data.success) {
          this.classData = res.data.data;
          Indicator.close();
        }
      })
      .catch(err => {
        Indicator.close();
        let instance = Toast("网络似乎不行啊..");
      });
  }
};
</script>

<style lang="less" scoped>
@import url("../assets/less/public.less");
@import url("../assets/less/classification.less");
</style>
