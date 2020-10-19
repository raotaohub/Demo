<template>
  <nav class="nav nav-left">
    <article class="homeactive" v-show="!$store.state.isActive">
      <header class="header">
        <!-- 这里为了避免 router-link-active 选中路由后 自动添加类 所以改用a标签了;
        当然也可以自己定义一个类都可以；***此条废除，还是改回router 因为可以避免页面刷新提高性能。详见官网第一句话~~***-->
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
      <!-- home 起始页面 -->
      <div class="body">
        <div class="body" v-show="this.$route.path == '/'">
          <div class="account-entry">
            <div class="display-happy">
              <span>心情惬意，来杯咖啡吧 ☕</span>
            </div>
            <account-component></account-component>
          </div>
        </div>
        <!-- stores -->
        <div class="body" v-show="this.$route.path == '/stores'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">好无语</span>
            </div>
            <ul class="tabs-wrapper">
              <li>

              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单 /menu-->
        <div class="body" v-show="this.$route.path == '/menu'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">菜单</span>
            </div>
            <ul class="tabs-wrapper" v-for="(item, index) in newMenuList.fitst_menu" :key="index">
              <li>
                <!-- append 可以自动嵌套上一级路由地址，这样我模拟数据的path就不用写一长串了  -->
                <router-link @click="addMenuClass(index)" :class="{'menuactive':index == menuClass}" :to="item.path" append>{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单>>饮料-->
        <div class="body" v-show="this.$route.path == '/menu/beverages'">
          <div class="account-entry">
            <div class="mb-3">
              <router-link to="/menu"><span class="h4"> 👈 菜单</span></router-link>
            </div>
            <div class="display-happy">
              <span class="display-happy">饮料</span>
            </div>
            <ul class="tabs-wrapper" v-for="(item, index) in second_meun.beverages" :key="index">
              <li @click="addMenuClass(index)">
                <a :class="{'menuactive':index == menuClass}">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单>>美食-->
        <div class="body" v-show="this.$route.path == '/menu/food'">
          <div class="account-entry">
            <div class="mb-3">
              <router-link to="/menu"><span class="h4"> 👈 菜单</span></router-link>
            </div>
            <div class="display-happy">
              <span class="display-happy">饮料</span>
            </div>
            <ul class="tabs-wrapper" v-for="(item, index) in second_meun.food" :key="index">
              <li @click="addMenuClass(index)">
                <a :class="{'menuactive':index == menuClass}">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单>>咖啡产品-->
        <div class="body" v-show="this.$route.path == '/menu/coffee'">
          <div class="account-entry">
            <div class="mb-3">
              <router-link to="/menu"><span class="h4"> 👈 菜单</span></router-link>
            </div>
            <div class="display-happy">
              <span class="display-happy">饮料</span>
            </div>
            <ul class="tabs-wrapper" v-for="(item, index) in second_meun.coffee" :key="index">
              <li @click="addMenuClass(index)">
                <a :class="{'menuactive':index == menuClass}">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单>>商品-->
        <div class="body" v-show="this.$route.path == '/menu/merchandise'">
          <div class="account-entry">
            <div class="mb-3">
              <router-link to="/menu"><span class="h4"> 👈 菜单</span></router-link>
            </div>
            <div class="display-happy">
              <span class="display-happy">饮料</span>
            </div>
            <ul class="tabs-wrapper" v-for="(item, index) in second_meun.merchandise" :key="index">
              <li @click="addMenuClass(index)">
                <a :class="{'menuactive':index == menuClass}">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- account -->
        <div class="body" v-show="this.$route.path === '/account'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">登录或创建一个新账户🌟</span>
            </div>
            <ul class="tabs-wrapper" v-for="(item,index) in accountList" :key="index">
              <li @click="addMenuClass(index)">
                <router-link :class="{'menuactive':index == menuClass}" :to="item.path">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="body" v-show="this.$route.path === '/account/register'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">登录或创建一个新账户🌟</span>
            </div>
            <ul class="tabs-wrapper" v-for="(item,index) in accountList" :key="index">
              <li @click="addMenuClass(index)">
                <router-link :class="{'menuactive':index == menuClass}" :to="item.path">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="body" v-show="this.$route.path === '/account/starbucks-rewards'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">登录或创建一个新账户🌟</span>
            </div>
            <ul class="tabs-wrapper" v-for="(item,index) in accountList" :key="index">
              <li @click="addMenuClass(index)">
                <router-link :class="{'menuactive':index == menuClass}" :to="item.path">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </article>
    <article class="homeclose" v-show="$store.state.isActive">
      <header class="header">
        <!-- 这里为了避免 router-link-active 选中路由后 自动添加类 所以改用a标签了-->
        <router-link to="/" class="logo">
          <img @click="menuShow" src="@/assets/image/logo.svg" />
        </router-link>
        <!-- 下拉霸 -->
        <button class="hamburger hamburgerclose btn btn-outline-white" @click="menuShow"></button>
        <div class="clearfix"></div>
      </header>
      <div class="account-entry">
        <ul v-for="(item, index) in hamburgerList" :key="index">
          <li class="pt-1" @click="menuShow">
            <router-link class="h5 font-weight-bold" :to="item.path">{{item.title}}</router-link>
          </li>
        </ul>
        <hr />
        <div class="account-components">
          <router-link to="/account">
            <!-- <img src="@/assets/icons/icon-account.svg" /> -->
            <button type="button" class="sign-smile btn text-success mr-4" @click="menuShow"> 登录 </button>
          </router-link>
          <router-link to="/account/register">
            <button type="button" class="logon-smile btn btn-outline-success" @click="menuShow"> 注册 </button>
          </router-link>
        </div>
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
      hamburgerList: [
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
      // 菜单的数据
      newMenuList: {
        // 一级菜单
        fitst_menu: [
          { title: "季度精选", path: "" },
          { title: "饮料", path: "beverages" },
          { title: "美食", path: "food" },
          { title: "咖啡产品", path: "coffee" },
          { title: "商品", path: "merchandise" },
        ],
      },
      second_meun: {
        beverages: [
          { path: "/menu/beverages", id: "1", title: "全部" },
          { path: "/menu/beverages", id: "2", title: "星巴克玩味冰调™" },
          { path: "/menu/beverages", id: "3", title: "手工调制浓缩咖啡" },
          { path: "/menu/beverages", id: "4", title: "星冰乐®" },
          { path: "/menu/beverages", id: "5", title: "茶瓦纳™" },
          { path: "/menu/beverages", id: "6", title: "经典巧克力饮品" },
          { path: "/menu/beverages", id: "7", title: "咖啡融合冰淇淋" },
          { path: "/menu/beverages", id: "8", title: "星巴克冷萃咖啡系列" },
          { path: "/menu/beverages", id: "9", title: "气致™冷萃咖啡" },
        ],
        food: [
          { path: "/menu/food", id: "1", title: "全部" },
          { path: "/menu/food", id: "2", title: "烘焙" },
          { path: "/menu/food", id: "3", title: "蛋糕&甜品" },
          { path: "/menu/food", id: "4", title: "三明治、帕尼尼、卷" },
          { path: "/menu/food", id: "5", title: "酸奶" },
          { path: "/menu/food", id: "6", title: "其他美食" },
          { path: "/menu/food", id: "7", title: "早安新一天" },
        ],
        coffee: [
          { path: "/menu/coffee", id: "1", title: "全部" },
          { path: "/menu/coffee", id: "2", title: "咖啡豆" },
          { path: "/menu/coffee", id: "3", title: "星巴克VIA® 免煮咖啡" },
          { path: "/menu/coffee", id: "4", title: "星巴克臻选™咖啡" },
          { path: "/menu/coffee", id: "5", title: "Origami™" },
        ],
        merchandise: [
          { path: "/menu/merchandise", id: "1", title: "全部" },
          { path: "/menu/merchandise", id: "2", title: "常规产品" },
          { path: "/menu/merchandise", id: "3", title: "甄选产品" },
        ],
      },
      accountList: [
        {
          path: "/account",
          title: "登录",
        },
        {
          path: "/account/register",
          title: "注册",
        },
        {
          path: "/account/starbucks-rewards",
          title: "关于星巴克俱乐部",
        },
      ],

      // 状态
      loading: false,
      menuClass: 0,
    };
  },
  created() {
    // 导航完成后获取数据
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route.path": "fetchData",
  },
  methods: {
    fetchData() {
      // 路由地址一旦变动 menuClass归零
      this.menuClass = 0;
      // 这里可以执行axios
      this.loading = true;
      console.log("路由已变更", this.$route.path);
    },
    /* */
    addMenuClass(index) {
      this.menuClass = index;
    },
    menuShow() {
      // 通知 vuex
      this.$store.dispatch("menuShow");
    },
  },
};
</script>


<style>
</style>