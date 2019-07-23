<template>

  <div class="ydw-footer">
    <ul class="ydw-footer-nav">
      <li v-for="(item,index) in arr" :key="index" class="ydw-footer-nav-list">
          <router-link :to="item.path">
           <i :class="type==index?'ydw-footer-nav-ico '+item.bcImg:'ydw-footer-nav-ico'"></i>
          <p :class="type==index?'ydw-footer-nav-title current':'ydw-footer-nav-title '">{{item.txt}}</p>
          </router-link>
      </li>
    </ul>
  </div>
  
</template>
<script>
export default {
    name:'Tab',
    data() {
        return {
            arr:[
                {path:'/',txt:'首页',bcImg:'index_icon'},
                {path:'/classification',txt:'分类',bcImg:'class_icon'},
                {path:'/shopcar',txt:'购物车',bcImg:'shop_icon'},
                {path:'/percenter',txt:'我',bcImg:'my_icon'},
            ]
        }
    },
    props:['type']
};
</script>

<style lang="less" scoped>
@import url('../assets/less/public.less');
</style>

