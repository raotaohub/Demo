<template>
  <footer class id="footer">
    <nav class="container-fluid">
      <div class="footer_box justify-content-center text-left" style="padding-top: 35px">
        <div class="clearfix">
          <div class="d-inline-block align-middle">
            <span class="info_left">版权所有 © 华为软件技术有限公司 2020</span>
            <span class="info_left">保留一切权利</span>
            <a class="info_left text-decoration-none a_link" href="http://www.beian.miit.gov.cn" target="_blank" rel="nofollow">苏ICP备17040376号-32</a>
            <span class="info_left">苏B2-20130048号</span>
            <span class="info_left">代理域名注册服务机构：新网</span>
          </div>
          <div class="d-inline-block float-right">
            <a href="//www.huaweicloud.com/declaration/statement.html" target="_blank" rel="nofollow" class="a_link">法律声明</a>
            <a class="d-inline-block" style="margin: 0 8px">|</a>
            <a href="//www.huaweicloud.com/declaration/sa_prp.html" target="_blank" rel="nofollow" class="a_link">隐私政策</a>
          </div>
        </div>

        <div class="mt-2">
          <span class="goverment_logo_a"></span>
          <span class="goverment_logo_b"></span>
          <a href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010008" target="_blank" class="a_link">苏公网安备 32011402010008号</a>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  font-family: PingFang SC, PingFangSC-Regular, Helvetica Neue,
    Microsoft YaHei Regular, Microsoft YaHei, 宋体, "sans-serif";
}
a {
  color: rgba(37, 43, 58, 0.7);
  text-decoration: none !important;
  background-color: transparent;
}
a:hover {
  color: #007bff !important;
}
#footer {
  width: 100%;
  background: #f3f3f3;
  height: 100px;
}
.footer_box {
  color: rgba(37, 43, 58, 0.7);
  font-size: 14px;
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
}
.info_left {
  margin-right: 10px;
}
.goverment_logo_a {
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-right: 8px;
  vertical-align: middle;
  background: url("https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/a6.1cf5ba6e283d484abfa7.png")
    no-repeat;
}
.goverment_logo_b {
  display: inline-block;
  height: 19px;
  width: 19px;
  margin-right: 8px;
  vertical-align: middle;
  background: url("https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/a7.c2800a6578a54f86c8f8.png")
    no-repeat;
}
</style>>

