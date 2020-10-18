<template>
  <nav class="nav nav-left">
    <article class="homeactive" v-show="!$store.state.isActive">
      <header class="header">
        <router-link to="/" class="logo">
          <img src="@/assets/image/logo.svg" />
        </router-link>
        <router-link to="/stores" class="stores"><span class="primary">门店</span></router-link>
        <router-link to="/account" class="account"><span class="primary">我的账户</span></router-link>
        <router-link to="/menu" class="menu"><span class="primary">菜单</span></router-link>
        <!-- 下拉霸 -->
        <button class="hamburger hamburgertoogle btn btn-outline-white" @click="menuShow"></button>
        <div class="clearfix"></div>
      </header>
      <div class="body" v-show="this.$route.path === '/'">
        <div class="account-entry">
          <div class="display-happy">
            <span>心情惬意，来杯咖啡吧 ☕</span>
          </div>
          <account-component></account-component>
        </div>
      </div>
      <!-- 菜单 /menu-->
      <div class="body" v-show="this.$route.path === '/menu'">
        <div class="account-entry">
          <div class="display-happy">
            <span class="display-happy">菜单</span>
          </div>
          <ul class="tabs-wrapper" v-for="(item, index) in menuList" :key="index">
            <li>
              <router-link :to="item.path" append>{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="body" v-show="this.$route.path !== '/menu'">
        <div class="account-entry">
          <div class="display-happy">
            <span class="display-happy">饮料</span>
          </div>
          <ul class="tabs-wrapper" v-for="(item, index) in menuList" :key="index">
            <li>
              <router-link :to="item.path" append>{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </article>
    <article class="homeclose" v-show="$store.state.isActive">
      <header class="header">
        <router-link to="/" class="logo">
          <img src="@/assets/image/logo.svg" />
        </router-link>

        <!-- 下拉霸 -->
        <button class="hamburger hamburgerclose btn btn-outline-white" @click="menuShow"></button>
        <div class="clearfix"></div>
      </header>
      <div class="account-entry">
        <ul v-for="(item, index) in homeList" :key="index">
          <li class="pt-1">
            <router-link class="h5 font-weight-bold" :to="item.path">{{
              item.title
            }}</router-link>
          </li>
        </ul>
        <hr />
        <account-component></account-component>
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
</template>

<script>
import "../assets/css/init.css";
import "../assets/css/index.css";
import "../assets/css/common-font.css";
import accountComponent from "./commons/accountComponent.vue";
export default {
  components: {
    accountComponent,
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
      menuList: [
        {
          title: "季度精选",
          path: "",
        },
        {
          title: "饮料",
          path: "beverages",
          data: [
            {
              title: "全部",
            },
            {
              title: "星巴克玩味冰调™",
            },
            {
              title: "手工调制浓缩咖啡",
            },
            {
              title: "星冰乐®",
            },
            {
              title: "茶瓦纳™",
            },
            {
              title: "经典巧克力饮品",
            },
            {
              title: "咖啡融合冰淇淋",
            },
            {
              title: "星巴克冷萃咖啡系列",
            },
            {
              title: "气致™冷萃咖啡",
            },
          ],
        },
        {
          title: "美食",
          path: "food",
        },
        {
          title: "咖啡产品",
          path: "coffee",
        },
        {
          title: "商品",
          path: "merchandise",
        },
      ],
    };
  },
  methods: {
    menuShow() {
      // 通知 vuex
      this.$store.dispatch("menuShow");
    },
  },
};
</script>


<style>
</style>