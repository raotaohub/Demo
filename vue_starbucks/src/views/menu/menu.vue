<template>
  <div id="wrapper">
    <!-- Navigation panel -->
    <nav id="nav">
      <article class="homeactive" v-show="!isActive">
        <header class="header">
          <router-link to="/" class="logo"
            ><img src="@/assets/image/logo.svg"
          /></router-link>
          <router-link to="/stores" class="stores"
            ><span class="primary">门店</span></router-link
          >
          <router-link to="/account" class="account"
            ><span class="primary">我的账户</span></router-link
          >
          <router-link to="/menu" class="menu"
            ><span class="primary">菜单</span></router-link
          >
          <!-- 下拉霸 -->
          <button
            class="hamburger toogle btn btn-outline-white"
            @click="menuShow"
          ></button>
          <div class="clearfix"></div>
        </header>
        <!-- <div class="body">
          <div class="account-entry">
            <div class="display-happy">
              <span>心情惬意，来杯咖啡吧 ☕</span>
            </div>
          </div>
        </div> -->
        <div class="body">
          <div class="account-entry">
            <div class="display-happy">
              <span>菜单</span>
            </div>
            <ul>
              <li>季度精选</li>
              <li>饮料</li>
              <li>咖啡产品</li>
              <li>美食</li>
              <li>商品</li>
            </ul>
          </div>
        </div>
      </article>
      <article class="homeclose" v-show="isActive">
        <header class="header">
          <router-link to="/" class="logo"
            ><img src="@/assets/image/logo.svg"
          /></router-link>

          <!-- 下拉霸 -->
          <button
            class="hamburger close btn btn-outline-white"
            @click="menuShow"
          ></button>
          <div class="clearfix"></div>
        </header>
        <div class="account-entry">
          <ul v-for="(item, index) in homeList" :key="index">
            <li class="pt-2 pb-1">
              <router-link class="h5 font-weight-bold" :to="item.path">{{
                item.title
              }}</router-link>
            </li>
          </ul>
          <hr />
          <footer class="d-block mt-3">
            <ul class="d-block text-secondary">
              <li class="d-inline-block">English |</li>
              <li class="d-inline-block">隐私政策 |</li>
              <li class="d-inline-block">使用条款</li>
            </ul>
          </footer>
        </div>
      </article>
    </nav>
    <section id="content">
      <div class="tag_ad">广告</div>
      <carousel-index></carousel-index>
      <promotion></promotion>
      <programClub></programClub>
      <tmall></tmall>
      <coffee-house></coffee-house>
      <license></license>
    </section>
  </div>
</template>

<script>
import carouselIndex from "@/components/commons/carouselIndex.vue";
import promotion from "@/components/commons/promotion.vue";
import programClub from "@/components/commons/programClub.vue";
import tmall from "@/components/commons/tmall.vue";
import coffeeHouse from "@/components/commons/coffeehouse.vue";
import license from "@/components/commons/license.vue";

export default {
  components: {
    carouselIndex,
    promotion,
    programClub,
    tmall,
    coffeeHouse,
    license,
  },
  data() {
    return {
      homeList: [
        {
          title: "门店",
          path: "/stores",
        },
        {
          title: "星享俱乐部",
          path: "",
        },
        {
          title: "菜单",
          path: "/menu",
        },
        {
          title: "星巴克移动应用",
          path: "",
        },
        {
          title: "星礼卡",
          path: "",
        },
        {
          title: "星巴克甄选™",
          path: "",
        },
        {
          title: "咖快™ - 在线点 到店取",
          path: "",
        },
        {
          title: "专星送™",
          path: "",
        },
        {
          title: "咖啡星讲堂",
          path: "",
        },
        {
          title: "上海烘焙工坊",
          path: "",
        },
        {
          title: "关于星巴克",
          path: "",
        },
        {
          title: "帮助中心",
          path: "",
        },
      ],
      isActive: false,
      menuList: [
        {
          path: "/menu",
          title: "季度精选",
        },
        {
          path: "/menu/food",
          title: "饮料",
        },
        {
          path: "/menu/coffee",
          title: "美食",
        },
        {
          path: "/menu/merchandise",
          title: "咖啡产品",
        },
        {
          path: "/menu/beverages",
          title: "商品",
        },
      ],
    };
  },
  methods: {
    menuShow() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style >
@import "../../css/init.css";
@import "../../css/index.css";
@import "../../css/common-font.css";
.promotion {
  padding: 24px;
}
</style>