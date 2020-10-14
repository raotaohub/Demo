<template>
  <div id="wrapper">
    <!-- Navigation panel -->
    <nav id="nav">
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
        <div class="hamburger">
          <img src="@/assets/icons/icon-hamburger.svg" />
        </div>
        <div class="clearfix"></div>
      </header>
      <div class="body">
        <div class="account-entry">
          <div class="display-happy">
            <span>心情惬意，来杯咖啡吧 ☕</span>
          </div>
          <account-component></account-component>
        </div>
      </div>
    </nav>
    <section id="content">
      <div class="tag_ad">广告</div>
      <carousel-index></carousel-index>
      <promotion></promotion>
      <programClub></programClub>
      <tmall></tmall>
      <section>星巴克精选</section>
      <section>1912派克街</section>
      <footer id="footer">
        <div class=""></div>
      </footer>
    </section>
  </div>
</template>

<script>
import accountComponent from "../components/commons/account-component";
import carouselIndex from "../components/commons/carouselIndex.vue";
import promotion from "../components/commons/promotion.vue";
import programClub from "../components/commons/programClub.vue";
import tmall from "../components/commons/tmall.vue";

export default {
  components: {
    accountComponent,
    carouselIndex,
    promotion,
    programClub,
    tmall,
  },
};
</script>

<style >
@import "../css/init.css";
@import "../css/common-font.css";

.container {
  margin: 0;
  padding: 0;
}
@media (min-width: 1025px) {
  #nav {
    background: #fff;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 30%;
    /* height: 100%; */
  }
}

/* 头部的字体 */
.header {
  height: 48px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  display: block;
  padding: 24px;
  position: relative;
}
.logo,
.account,
.stores,
.menu {
  float: left;
  font-size: 1.6rem;
  font-size: 16px;
}

.logo {
  margin-right: 12px;
  width: 36px;
}

.hamburger {
  float: right;
  line-height: 34px;
}

/* 账号登入 */
.body {
  height: calc(100% - 98px);
  display: table;
  width: 100%;
}

.account-entry {
  display: table-cell;
  vertical-align: middle;
  padding: 0 24px 0 84px;
}
.footer {
  vertical-align: middle;
}

/* 按钮 */

.sign-smile,
.logon-smile {
  padding: 2px 12px;
  background: none;
  border: 1px solid #00a862;
  border-radius: 48px;
  box-sizing: border-box;
  color: #00a862;
  display: inline-block;
  font-weight: 500;
  outline: none;
  overflow: hidden;
  padding: 6px 18px;
  position: relative;
  transition-duration: 0.1s;
  transition-property: background, border-color, color;
}

/* 右边的 */
#content {
  left: auto;
  margin-left: 30%;
  padding-bottom: 24px;
  padding-top: 24px;
  width: 70%;
  position: relative;
}

/* swipe轮播图 */

/* 广告字样 */
.tag_ad {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0px 6px;
  color: #fff;
  background-color: #000;
  font-size: 12px;
  line-height: 180%;
  opacity: 0.6;
  border-radius: 2px;
  z-index: 200;
}
</style>