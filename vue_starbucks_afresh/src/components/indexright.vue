<template>
  <section class="content-right">
    <div class="tag_ad">广告</div>
    <!-- 利用keep-alive使加载过的路由不注销 子路由的出口 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 此处利用一个v-show 只要有路由被渲染，就使这里的视图隐藏 -->
    <div v-show="this.$route.path === '/'">
      <carousel-index></carousel-index>
      <promotion></promotion>
      <programClub></programClub>
      <tmall></tmall>
      <coffee-house></coffee-house>
      <license></license>
    </div>
  </section>
</template>

<script>
import accountComponent from "./commons/accountComponent.vue";
import carouselIndex from "./commons/carouselIndex.vue";
import promotion from "./commons/promotion.vue";
import programClub from "./commons/programClub.vue";
import tmall from "./commons/tmall.vue";
import coffeeHouse from "./commons/coffeehouse.vue";
import license from "./commons/license.vue";

import { mapGetters } from "vuex";
export default {
  components: {
    accountComponent,
    carouselIndex,
    promotion,
    programClub,
    tmall,
    coffeeHouse,
    license,
  },
  computed: {},
  data() {
    return {};
  },
};
</script>

<style>
</style>