<template>
  <div id="CLOUDCLASSROOM" class="container-fluid p-0 w-auto">
    <div id class="p-0" data-ride="carousel">
      <div id="header_current" class="carousel-inner d-block header_current_bg">
        <div class="section_nav">
          <div class="justify-content-center">
            <span class="d-block pb-3" style="font-size: 30px">{{
              headerCurrent.title
            }}</span>
            <span>{{ headerCurrent.content }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 主题内容 -->
    <main id="main">
      <!--  -->
      <nav id="cloudclassroom">
        <!-- 标题 -->
        <section class="cl_title">
          <div class="cl_title_list d-flex justify-content-start">
            <ul class="title_list list-group d-block">
              <router-link class="router d-inline-block mr-4 mb-1" to="/cloudclassroom/hotcourse">
                <li class="list-unstyled">热门课程</li>
              </router-link>
              <router-link class="router d-inline-block mr-4 mb-1" to="/cloudclassroom/hotactivity">
                <li class="list-unstyled">热门活动</li>
              </router-link>
              <router-link class="router d-inline-block mr-4 mb-1" to="/cloudclassroom/cloudcourse">
                <li class="list-unstyled">云课程</li>
              </router-link>
              <router-link class="router d-inline-block mr-4 mb-1" to="/cloudclassroom/character">
                <li class="list-unstyled">角色系列课程</li>
              </router-link>
            </ul>
          </div>
        </section>
        <!-- 卡片 -->
        <router-view :bpyStyle="bpyStyle" style="max-width: 100vw"></router-view>
      </nav>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerCurrent: {
        url: "",
        img:
          "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/course-bg.c21684352de65d13ddec.png",
        title: "MOOC课程",
        content: "面向师生提供丰富的自学开放课程，轻松实现自我提升。",
        state: "",
      },
    };
  },
  methods: {
    bpyStyle(index) {
      return (index *= -200);
    },
  },
};
</script>

<style scoped>
#header_current {
  max-width: 100vw;
  display: flex;
  justify-content: center;
}
.header_current_bg {
  height: 180px;
  background-image: url("https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/course-bg.c21684352de65d13ddec.png");
  background-position-y: -180px;
}
.section_nav {
  display: flex;
  flex-wrap: row wrap;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  color: aliceblue;
  padding: 40px 0;
}

/* title */
.router {
  cursor: pointer;
  border: none;
  line-height: 30px;
  background-color: transparent;
  padding: 0;
  color: #252b3a;
}
.router-link-active {
  color: #007bff !important;
  border-bottom: 3px solid #007bff;
  transition: transform 3s ease, opacity 0.9s ease-out;
}
.cl_title {
  display: flex;
  flex-wrap: row wrap;
  width: 1200px;
  margin: 25px auto 15px auto;
  border-bottom: 1px rgba(124, 142, 227, 0.12) solid;
}
.cl_title_list {
  line-height: 30px;
}
.title_list {
  font-size: 0.875rem;
  background: 0 0;
  font-weight: 700;
}
.title_info_btn {
  font-size: 0.875rem;
  text-align: center;
  line-height: 24px;
  height: 24px;
  padding: 0 10px;
  background: #f6f7fa;
  border-radius: 12px;
  margin-right: 10px;
  margin-bottom: 5px;
  color: #5e6678;
  letter-spacing: 0;
  float: left;
}
/* 卡片 */
#card_item {
  width: 280px;
  box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
  border-radius: 12px;
  box-sizing: border-box;
  display: inline-block;
  z-index: 996;
  margin-bottom: 30px;
}
</style>