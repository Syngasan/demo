import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopCart: [],
    allChecked: false
  },
  mutations: {
    setShopCart(state, obj) {
      var index = state.shopCart.findIndex((item) => {
        return item.pid === obj.pid
      })
      var index1 = state.shopCart.findIndex((item)=>{
        return item.buySelect.toString()===obj.buySelect.toString()
      })
      if (index == -1){
        state.shopCart.push(obj);
      }else if(index1==-1){
        state.shopCart.push(obj);      
      }else{
        state.shopCart[index].num +=obj.num       
      }
      
    },
    calUp(state, index) {
      state.shopCart[index].num++;


    },
    calDown(state, index) {
      state.shopCart[index].num == 1 ? 1 : state.shopCart[index].num--;
    },
    changeNum(state, index) {
      var num = state.shopCart[index].num;
      num = isNaN(num) ? 1 : Math.ceil(num);
      num = num <= 0 ? 1 : num;
      state.shopCart[index].num = num;
    },
    updateAllChecked(state, value) {
      for (var i = 0; i < state.shopCart.length; i++) {
        state.shopCart[i].isChecked = value
      }
    },

    del(state, index) {
      state.shopCart.splice(index, 1)
    },

    sinChecked(state) {
      var checked = true;
      for (var i = 0; i < state.shopCart.length; i++) {
        if (!state.shopCart[i].isChecked) {
          checked = false
          break;
        }
      }
      state.allChecked = checked;

    },
  },
  actions: {
    calUp(context, index) {
      context.commit('calUp', index)
    },
    calDown(context, index) {
      context.commit('calDown', index)
    },
    changeNum(context, index) {
      context.commit('changeNum', index)
    },
    updateAllChecked(context, value) {
      context.commit("updateAllChecked", value)
    },

  },
  getters: {
    allPrice(state) {
      var totalPrices = 0;
      for (var i = 0; i < state.shopCart.length; i++) {
        if (state.shopCart[i].isChecked) {
          totalPrices += state.shopCart[i].num * state.shopCart[i].price
        }
      }
      return totalPrices;
    }
  }
})
