<template>
  <div class="ydw-shopCar">
    <!-- 头部 -->
    <div class="ydw-shopCar-head">
      <a href="##">
        <i class="back" @click="backHistory"></i>
      </a>
      <p class="ydw-shopCar-title">购物车</p>
    </div>
    <!-- 主体 -->
    <div class="ydw-shopCar-main">
      <!-- 提示 -->
      <div class="ydw-shopCar-main-blank" v-if="this.$store.state.shopCart==''">
        <div class="ydw-shopCar-tips">
          <i class="tips-icon"></i>
          <p class="tips-title">购物车还是空的</p>
          <p class="tips-title">快去逛逛吧~</p>
        </div>
      </div>
      <!-- 商品列表 -->
      <form class="ydw-shopCar-main-list">
        <div class="ydw-shopCar-pro">
          <ul>
            <li
              class="ydw-shopCar-pro-list"
              v-for="(item,index) in this.$store.state.shopCart"
              :key="index"
            >
              <p class="pro-list-title">
                <i class="pro-list-title-icon"></i>
                <span class="pro-list-title-txt">杭州保税区仓</span>
              </p>
              <div class="pro-list-con">
                <ul class="clearFix">
                  <li class="col1" v-show="editDel==false">
                   
                    <label for="Checkbox1" style="display:none;"></label>
                    <input
                      type="checkbox"
                      id="Checkbox1"
                      class="input_check"
                      v-model="item.isChecked"
                      @change="sinChecked"
                    />
                  </li>
                  <li class="col2">
                    <a href="##">
                      <img :src="item.img" alt />
                    </a>
                  </li>
                  <li class="col3">
                    <span class="spe" >
                        <span v-for="(e,i) in item.buySelect" :key="i">{{e}} </span>
                    </span>
                    <p class="col3-t">{{item.name.slice(0,15)}}...</p>
                    <div class="col3-b">
                      <div class="calDown" @click="calDown(index)">-</div>
                      <input
                        type="text"
                        v-model.number="item.num"
                        class="calNum"
                        @keyup="changeNum(index)"
                        maxlength="5"
                      />
                      <div class="calUp" @click="calUp(index)">+</div>
                    </div>
                  </li>
                  <li class="col4">&yen;{{item.price}}</li>
                </ul>
                <div class="del" v-show="editDel==true" @click="del(index)">删除</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="ydw-shopCar-edit">
          <div class="ydw-shopCar-edit-l">
            <div class="edit">
              <label for="Checkbox2" style="display:none;"></label>
              <input type="checkbox" id="Checkbox2" class="input_check" v-model="allChecked" />
              <p>全选</p>
            </div>
            <div class="edit">
              <label for="Checkbox3" style="display:none;"></label>
              <input type="checkbox" id="Checkbox3" class="input_check" v-model="editDel"/>
              <p>编辑</p>
            </div>
          </div>
          <div class="ydw-shopCar-coun-price">
            <p>
              合计：
              <span class="price-num">&yen;{{totalPrice.toFixed(2)}}</span>
            </p>
            <p>(不含运费)</p>
          </div>
          <input type="submit" value="去结算" class="set-acc" />
        </div>
      </form>
    </div>

    <Tab type="2"></Tab>
  </div>
</template>
<script>
import Tab from "./Tab";
export default {
  name: "ShopCar",
  data() {
    return {
      editDel:false
    };
  },
  methods: {
    backHistory() {
      this.$router.go(-1); //返回上一层
    },
    calUp(index) {
      this.$store.dispatch("calUp", index);
    },
    calDown(index) {
      this.$store.dispatch("calDown", index);
    },
    changeNum(index) {
      this.$store.dispatch("changeNum", index);
    },
    sinChecked() {
      this.$store.commit("sinChecked");
    },
    del(index){
      this.$store.commit('del',index);
    }
  },
  computed: {
    allChecked: {
      get() {
        return this.$store.state.allChecked;
      },
      set(value) {
        this.$store.dispatch("updateAllChecked", value);
        this.sinChecked();
      }
    },
    totalPrice(){
        return this.$store.getters.allPrice
    }
  },
  components: {
    Tab
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
@import url("../assets/less/shopCar.less");
</style>
<style scoped>
/* 复选框checkbox */
.input_check {
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  display: none;
}
/* 未选 */
.input_check {
  display: inline-block;
  background-image: url("../assets/img/ydwShop/radio_nor.png");
  background-repeat: no-repeat;
  background-position: 0px 0px;
  border: none;
  width: 0.42rem;
  height: 0.42rem;
  background-size: 0.42rem 0.42rem;
}
#Checkbox3 {
  background-image: url("../assets/img/ydwShop/editor_nor.png");
}
input[type="file"]:focus,
input[type="checkbox"]:focus,
input[type="radio"]:focus {
  outline: none; /* outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。outline 属性设置元素周围的轮廓线。*/
}

/* 已选 */
.input_check:checked {
  display: inline-block;
  background-image: url("../assets/img/ydwShop/radio_hig.png");
  background-repeat: no-repeat;
  background-position: 0px 0px;
  width: 0.42rem;
  height: 0.42rem;
  border: none;
  background-size: 0.42rem 0.42rem;
}
#Checkbox3:checked {
  background-image: url("../assets/img/ydwShop/editor_hig.png");
}
</style>

