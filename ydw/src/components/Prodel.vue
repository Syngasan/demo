<template>
  <div class="ydw-proDel">
    <!-- 轮播图 -->
    <div class="ydw-proDel-banner">
      <div class="ydw-proDel-icon">
        <div class="ydw-proDel-icon-l" @click="backHistory">
          <a href="##">
            <i class="icon back"></i>
          </a>
        </div>
        <div class="ydw-proDel-icon-r">
          <router-link to="/shopcar">
            <i class="icon shopCar"></i>
          </router-link>
          <a href="##">
            <i class="icon more"></i>
          </a>
        </div>
      </div>
      <div class="ydw-proDel-banner-img">
        <swiper :options="swiperOption" class="ydw-proDel-banner-swiper">
          <swiper-slide v-for="(item,index) in detialsData.swiperImgArr" :key="index">
            <img :src="item" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 商品介绍 -->
    <div class="ydw-proDel-introduction">
      <div class="row1 clearFix">
        <p class="row1-l">{{detialsData.name}}</p>
        <div class="row1-r">
          <i></i>
          <p>收藏</p>
        </div>
      </div>
      <div class="row2 clearFix">
        <div class="row2-l">
          <p class="curr-price">￥{{parseFloat(detialsData.reduct_price).toFixed(2)}}</p>
          <p class="ori-price">￥{{parseFloat(detialsData.original_price).toFixed(2)}}</p>
        </div>
        <div class="row2-r">
          <div class="row2-r-t">
            <span>{{parseFloat(detialsData.allowance*10).toFixed(1)}}折</span>
            <span v-if="detialsData.isFreeShip">包邮</span>
          </div>
          <div class="row2-r-b clearFix">
            <span v-for="(item,index) in detialsData.describe" :key="index">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="ydw-proDel-main">
      <div class="ydw-proDel-main-title">
        <!-- 商品详情 -->
        <div
          :class="list==0?'ydw-proDel-main-title-txt current':'ydw-proDel-main-title-txt'"
          @click="list=0"
        >商家详情</div>
        <!-- 买家口碑 -->
        <div
          :class="list==1?'ydw-proDel-main-title-txt current':'ydw-proDel-main-title-txt'"
          @click="list=1"
        >买家口碑</div>
      </div>
      <!-- 商品详情内容 -->
      <div class="product-details" v-show="list==0">
        <!-- <img src="./img/ydwProDel/xiangqing.png" alt=""> -->
        <img :src="item" alt v-for="(item,index) in detialsData.shopDes" :key="index" />
      </div>
      <!-- 买家口碑内容 -->
      <div class="appraise" v-show="list==1">
        <div class="appraise-title">
          <ul class="clearFix">
            <li
              :class="num==i?'current':''"
              v-for="(item,key,i) in detialsData.buyerReviews"
              :key="i"
              @click="num=i"
            >{{txtVal[i]}}</li>
          </ul>
        </div>
        <div v-for="(key,val,i) in detialsData.buyerReviews" :key="i">
          <div class="appraise-con" v-if="num==i">
            <div class="appraise-con-list" v-for="(item,index) in key" :key="index">
              <div class="appraise-con-list-row1 clearFix">
                <div class="username">{{item.buyerName}}</div>
                <div class="appraise-time">{{ item.createTime | formdate}}</div>
              </div>
              <div class="appraise-con-list-row2">
                <img :src="item" alt v-for="(item,index) in item.postImg" :key="index" />
              </div>
              <p class="appraise-user">{{item.postDescribe}}</p>
              <p class="appraise-seller">{{item.adminReviews}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="ydw-proDel-footer">
      <div class="ydw-proDel-footer-l">
        总价：
        <span>￥{{allPrice}}</span>
      </div>
      <div class="ydw-proDel-footer-r">
        <span @click="addShopCar()">加入购物车</span>
        <span @click="jumpShopCar()">立即购买</span>
      </div>
    </div>
    <!-- 购物选项 -->
    <div class="ydw-proDel-shopping-options" v-if="isTrue">
      <div class="shopping-options-con">
        <div class="shopping-options-attr">
          <div class="shopping-options-attr-img" v-if="detialsData.pid">
            <img :src="detialsData.swiperImgArr[0]" alt="加载失败" />
          </div>
          <div class="shopping-options-attr-des">
            <p class="price">￥{{parseFloat(detialsData.reduct_price).toFixed(2)}}</p>
            <p class="stock">库存{{detialsData.total}}件</p>
            <p class="attr">请选择商品属性</p>
          </div>
          <div class="shopping-options-attr-close" @click="isTrue=false"></div>
        </div>
        <div class="shopping-options-count clearFix">
          <div class="shopping-options-count-l">购物数量</div>
          <div class="shopping-options-count-r">
            <span @click="calcDown">-</span>
            <input type="text" class="goods-num" v-model.number="comNum" @keyup="changeNum" />
            <span @click="calcUp">+</span>
          </div>
        </div>
        <div class="shopping-options-choose">
          <div
            class="shopping-options-choose-list"
            v-for="(item,index) in detialsData.buySelect"
            :key="index"
          >
            <p>{{item.name}}</p>
            <ul class="clearFix">
              <li
                v-for="(e,i) in item.list"
                :key="i"
                @click="tabClick(index,i,e,item)"
                :class="buyArr[index]==i?'current':''"
              >{{e}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Indicator, Toast } from "mint-ui";
import sUrl from "../urlConfig";
import { mapMutations } from "vuex";
export default {
  name: "Prodel",
  data() {
    return {
      detialsData: [],
      txtVal: ["全部评价", "好评", "差评", "晒单"],
      num: 0,
      list: 0,
      comNum: 1,
      isTrue: false,
      buyArr: [],

      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
        loop: true,
        pagination: ".swiper-pagination",
        autoplayDisableOnInteraction: false,
        paginationClickable: true
      }
    };
  },
  methods: {
    ...mapMutations({
      setShopCart: "setShopCart"
    }),
    getDetailsData() {
      var pid = this.$route.params.id;
      this.axios
        .get(sUrl.sUrl + "/getDetails", {
          params: {
            pid: pid
          }
        })
        .then(res => {
          this.detialsData = res.data.data;
          for (
            let index = 0;
            index < this.detialsData.buySelect.length;
            index++
          ) {
            this.buyArr.push(0);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    tabClick(index, i, e) {
      this.$set(this.buyArr, index, i);
    },
    backHistory() {
      this.$router.go(-1); //返回上一层
    },
    calcDown() {
      this.comNum == 1 ? 1 : this.comNum--;
      this.changeNum();
    },
    calcUp() {
      this.comNum++;
      this.changeNum();
    },
    changeNum() {
      var num = this.comNum;
      num = isNaN(num) ? 1 : Math.ceil(num);
      num = num <= 0 ? 1 : num;
      num = num >= this.detialsData.total ? this.detialsData.total : num;
      this.comNum = num;
    },
    addShopCar() {
      if (this.isTrue) {
        var buySelect = [];
        for (let i = 0; i < this.buyArr.length; i++) {
          buySelect.push(this.detialsData.buySelect[i].list[this.buyArr[i]]);
        }
        this.setShopCart({
          pid: this.detialsData.pid,
          name: this.detialsData.name,
          price: this.detialsData.reduct_price,
          num: this.comNum,
          img: this.detialsData.swiperImgArr[0],
          buySelect: buySelect,
          isChecked: false
        });
        Toast({
          message: "添加成功",
          duration: 1000
        });
      }
      this.isTrue = true;
    },
    jumpShopCar() {
      if (this.isTrue) {
        this.$router.push({
          path: "/shopcar"
        });
      }
      this.isTrue = true;
    }
  },
  computed: {
    allPrice() {
      return parseFloat(this.comNum * this.detialsData.reduct_price).toFixed(2);
    }
  },
  filters: {
    formdate(val) {
      var oDate = new Date(parseInt(val));
      var y = oDate.getFullYear();
      var MM = oDate.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      var d = oDate.getDate();
      d = d < 10 ? "0" + d : d;
      var h = oDate.getHours();
      h = h < 10 ? "0" + h : h;
      var m = oDate.getMinutes();
      m = m < 10 ? "0" + m : m;
      var s = oDate.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  mounted() {
    this.getDetailsData();
  }
};
</script>
<style lang="less" scoped>
.swiper-pagination {
  bottom: 0.46rem;
  left: 50%;
  transform: translateX(-50%);
}
@import url("../assets/less/proDel.less");
</style>
<style lang="less">
.swiper-pagination-bullet {
  margin-right: 0.14rem;
  width: 0.2rem;
  height: 0.2rem;
  border: 1px solid transparent;
  border-radius: 50%;
  // background-color: #fff;
}

.swiper-pagination-bullet-active {
  background-color: #ff9900;
}

.ydw-proDel-banner-swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  line-height: 100%;
  text-align: center;
  img {
    width: 5.74rem;
    height: 5rem;
  }
}
</style>


