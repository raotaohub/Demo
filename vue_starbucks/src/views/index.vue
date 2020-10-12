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
          <div class="account-components">
            <router-link to="/account">
              <img src="@/assets/icons/icon-account.svg" alt="" />
              <button type="button" class="sign-smile btn text-success mr-4">
                登录
              </button>
            </router-link>
            <router-link to="/account/register">
              <button type="button" class="logon-smile btn btn-outline-success">
                注册
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <section id="content">
      
    </section>
  </div>
</template>

<script>
import "../css/init.css";
import "../css/common-font.css";
export default {
  name: "index",
  data() {
    return {};
  },
};
</script>

<style>
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
}
</style>