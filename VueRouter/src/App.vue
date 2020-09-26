<template>
  <div id="app">
    <header class="container-fluid" id="header">
      <div class="row">
        <div class="header_log"></div>
        <!--  -->
        <!--  -->
        <div class="header_center row-vertical-center">
          <div class="header_center_box router-link-active">
            <router-link
              class="text-center hover text-decoration-none"
              to="/home"
              >首页</router-link
            >
            <router-link
              class="text-center hover text-decoration-none"
              to="/kunpeng"
              >鲲鹏教育中心</router-link
            >
            <router-link
              class="text-center hover text-decoration-none"
              to="/cloudclassroom"
              >MOOC课程</router-link
            >
            <router-link
              class="text-center hover text-decoration-none"
              to="/experimentalclass"
              >培训认证</router-link
            >
            <router-link
              class="text-center hover text-decoration-none"
              to="/cloudlab"
              >在线实验</router-link
            >
            <router-link
              class="text-center hover text-decoration-none"
              to="/microauthentication"
              >教学市场</router-link
            >
            <router-link
              class="text-center hover text-decoration-none"
              to="/teachingmarket"
              >新工科实验班</router-link
            >
            <a
              class="text-center hover text-decoration-none"
              href="https://bbs.huaweicloud.com/forum/forumdisplay-fid-708-orderby-lastpost.html"
              >学习交流</a
            >
          </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="header_login row-vertical-center">
          <div>
            <button type="button" class="btn header_btn">
              <span class="hover text-decoration-none">教学平台</span>
            </button>
          </div>
          <div style="font-size: 14px">
            <span>
              <a href class="hover text-body text-decoration-none">登录</a>
            </span>
            <span style="margin: 0 14px">|</span>
            <span>
              <a href class="hover text-body text-decoration-none">注册</a>
            </span>
          </div>
        </div>

        <div class="clear"></div>
      </div>
    </header>
    <div class="main container-fluid pl-0 pr-0" id="routerview">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
};
</script>

<style scope>
body {
  font-family: PingFang SC, PingFangSC-Regular, Helvetica Neue,
    Microsoft YaHei Regular, Microsoft YaHei, 宋体, "sans-serif";
}
a {
  text-decoration: none !important;
  background-color: transparent;
}
a:hover {
  color: #007bff;
}
::-webkit-scrollbar {
  width: 9px;
}
::-webkit-scrollbar-thumb {
  background: #959eb2;
  border-radius: 9px;
}
.router-link-active {
  color: #007bff !important;
}
.container {
  position: fixed;
  top: 0px;
}
#header {
  position: fixed;
  display: flex;
  top: 0px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  z-index: 999;
  background-color: #fff;
  align-items: center;
  height: 60px;
  width: 100%;
}
.header_log {
  width: 120px;
  height: 40px;
  background-size: 100% 100%;
  margin: 10px 40px;
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/logo.451780fa3b1dcc60e811.svg);
}

.header_login {
  position: fixed;
  right: 30px;
  line-height: 60px;
}
.row-vertical-center {
  display: flex;
  align-items: center;
  margin: 0;
}
.text-center {
  font-size: 1vw;
  color: #293040;
  margin: 0;
  padding: 0;
  margin-right: 48px;
}
.clear {
  content: "";
  clear: both;
  display: block;
  height: 0px;
  font-size: 0px;
  visibility: hidden;
}
.btn {
  align-items: flex-start;
  background-color: hsl(0, 0%, 98%);
  border-radius: 16px;
  border-width: 0.997596px;
  box-shadow: sla(0, 0%, 0%, 0.05) 0px 2px 4px -1px;
  color: hsl(222, 22%, 21%);
  font-size: 14px;
  margin: 0px 12px 0px 0px;
  padding: 4px 20px;
}
.header_btn {
  margin-right: 42px;
}
.main {
  margin-top: 60px;
}
@media screen and (max-width: 576px) {
  .header_log {
    width: 120px;
    height: 40px;
    background-size: 100% 100%;
    margin: 10px 0 0 10px;
  }
  .header_login {
    position: fixed;
    right: 10px;
    line-height: 60px;
  }
  .header_btn {
    margin-right: 16px;
  }
  .text-center {
    margin-right: 20px;
  }
  .header_center_box {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
}
@media screen and (max-width: 673px) {
  .main {
    margin-top: 120px;
  }
}
@media screen and (max-width: 887px) {
  .main {
    margin-top: 80px;
  }
  #header {
    height: 95px;
  }
  .header_center {
    margin: 0 auto;
  }
}
@media screen and (max-width: 1170px) {
  .text-center {
    margin-right: 24px;
  }
}
@media screen and (max-width: 1280px) {
  .text-center {
    margin-right: 32px;
  }
}
</style>
