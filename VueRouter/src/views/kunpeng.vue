<template>
  <div>
    <div id="kunpeng" class="kunpeng container-fluid m-0 p-0" v-show="isShow">
      <div id="banner_box" class="container-fluid mb-5">
        <div class="banner_list">
          <a
            class="banner_list_card col-4-mr-10"
            :href="item.url"
            v-for="(item, index) in banner_list"
            :key="index"
          >
            <div class="banner_item_box d-inline-block">
              <div class="banner_item">
                <div
                  class="banner_left"
                  :style="{ backgroundImage: 'url(' + item.img + ')' }"
                ></div>
                <div class="banner_right">
                  <div class="banner_title d-block">{{ item.title }}</div>
                  <div class="banner_content d-block">{{ item.content }}</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="main-layout free-course">
        <section class="cl_title justify-content-center mb-4">
          <span style="font-size: 28px">免费课程 </span>
          <router-link
            style="font-size: 16px; color: #575d6c"
            to="/kunpeng/list"
            ><span @click="isList">查看更多</span></router-link
          >
        </section>
        <section class="cl_card mb-2">
          <div id="cl_card">
            <a
              :href="item.url"
              class="text-decoration-none"
              target="_blank"
              id="cl_card_item"
              v-for="(item, index) in freeCourseList"
              :key="index"
            >
              <nav class="card_item_box">
                <div class="cit_box_top">
                  <div
                    class="card_bg"
                    :style="{ backgroundImage: 'url(' + item.img + ')' }"
                  ></div>
                </div>
                <div class="cit_box_bottom">
                  <span class="cit_title">{{ item.title }}</span>

                  <div class="cit_state">
                    <span class="float-right bg-white text-body">{{
                      item.state
                    }}</span>
                    <span class="float-left bg-white text-body">HOT</span>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </nav>
            </a>
          </div>
        </section>
        <section class="cl_title justify-content-center mb-4">
          <span style="font-size: 28px">专业课程 </span>
          <router-link
            style="font-size: 16px; color: #575d6c"
            to="/kunpeng/list"
            ><span @click="isList">查看更多</span></router-link
          >
        </section>
        <section class="cl_card mb-2">
          <div id="cl_card">
            <a
              :href="item.url"
              class="text-decoration-none"
              target="_blank"
              id="cl_card_item2"
              v-for="(item, index) in courseList"
              :key="index"
            >
              <nav class="card_item_box">
                <div class="cit_box_top">
                  <div
                    class="card_bg"
                    :style="{ backgroundImage: 'url(' + item.img + ')' }"
                    style="height: 158px"
                  ></div>
                </div>
                <div class="cit_box_bottom">
                  <div class="clearfix"></div>
                  <span class="cit_title d-block">{{ item.title }}</span>
                  <div class="cit_state">
                    <span class="float-right bg-white text-body">{{
                      item.state
                    }}</span>
                    <span class="float-left bg-white text-body">HOT</span>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </nav>
            </a>
          </div>
        </section>
        <section class="cl_title justify-content-center mb-4">
          <span style="font-size: 28px">实训课程 </span>
          <router-link
            style="font-size: 16px; color: #575d6c"
            to="/kunpeng/list"
            ><span @click="isList">查看更多</span></router-link
          >
        </section>
        <section class="cl_card mb-3">
          <div id="cl_card">
            <a
              :href="item.url"
              class="text-decoration-none"
              target="_blank"
              id="cl_card_item"
              v-for="(item, index) in practice_course"
              :key="index"
            >
              <nav class="card_item_box">
                <div class="cit_box_top">
                  <div
                    class="card_bg"
                    :style="{ backgroundImage: 'url(' + item.img + ')' }"
                    style="height: 60px"
                  ></div>
                </div>
                <div class="cit_box_bottom">
                  <span class="cit_title">{{ item.title }}</span>
                  <div style="height: 80px">
                    <ul
                      class="m-0"
                      v-for="(i, key) in practice_course[index].content"
                      :key="key"
                    >
                      <li>{{ i }}</li>
                    </ul>
                  </div>
                  <div class="cit_hr"></div>
                  <div class="cit_state">
                    <span class="float-right bg-white text-body">{{
                      item.state
                    }}</span>
                    <span class="float-left bg-white text-body"
                      >所属分类：{{ item.type }}</span
                    >
                  </div>
                </div>
                <div class="clearfix"></div>
              </nav>
            </a>
          </div>
        </section>
      </div>
      <footer class="footer_partner" style="height: 220px">
        <div class="main-layout">
          <section class="cl_title justify-content-center mb-4 text-center">
            <h3 class="partner_title text-align-center">合作伙伴</h3>
            <div v-for="(item, index) in partnerList" :key="index" class="">
              <a class="footer_box float-left col-3 mr-n1 p-0" :href="item.url">
                <div
                  class="partner_bg"
                  :style="{ backgroundImage: 'url(' + item.img + ')' }"
                  style="background-size: 93px 24px"
                ></div>
                <div class="partner_name text-left text-muted pr-3 mb-1 mt-1">
                  {{ item.name }}
                </div>
                <div class="partner_content text-left text-muted pr-3">
                  {{ item.content }}
                </div>
                <div class="clearfix"></div>
              </a>
            </div>
          </section>
        </div>
      </footer>
      <Footer></Footer>
    </div>
    <router-view class="main-layout"></router-view>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer },
  methods: {
    bpyStyle(index) {
      return (index *= -200);
    },
    isList() {
      this.isShow = !this.isShow;
    },
  },
  data() {
    return {
      isShow: true,
      partnerList: [
        {
          url: "https://yun.ictedu.com/",
          name: "北京博海迪信息科技有限公司",
          img: require("../assets/taike.010bb6dd1ea56b4db5b0.png"),
          content:
            "泰克聚焦于ICT领域产教融合平台开发与应用、人才培养、产教融合基地和院校专业共建等",
        },
        {
          url: "http://zhyx.zhiqiantong.cn/",
          name: "深圳市讯方技术股份有限公司",
          img: require("../assets/xunfang.4efc2a9f94fdd770dda2.png"),
          content:
            "讯方致力于软件与信息技术服务和ICT技术人才培养，为高校提供专业建设及校企合作解决方案",
        },
        {
          url: "https://zhjxy.kp.futurelab.tv/",
          name: "北京中软国际教育科技股份有限公司",
          img: require("../assets/zhongruan.84a9e9a27ee7ba3326b6.png"),
          content:
            "中软国际人才战略的核心组成部分之一，承担集团发展过程中人才储备及培养任务",
        },
        {
          url: "https://kphcia.gaoxiaobang.com/#/courses",
          name: "慧科教育科技集团有限公司",
          img: require("../assets/huike.77763a77b209226d0f1e.png"),
          content:
            "慧科教育科技集团有限公司是中国高等教育和新职业教育领域领军企业",
        },
      ],
      banner_list: [
        {
          url: "/kunpeng/list",
          img: require("../assets/banner-icon1.88b81a3227353700239e.png"),
          title: "华为出品课程",
          content: "鲲鹏云知识权威解读",
        },
        {
          url: "/kunpeng/list",
          img: require("../assets/banner-icon2.351f69b53489ac674844.png"),
          title: "合作方精品课程",
          content: "海量干货资源云集",
        },
        {
          url: "https://bbs.huaweicloud.com/forum/forum-923-1.html",
          img: require("../assets/banner-icon3.62011ed2047f06097991.png"),
          title: "鲲鹏论坛",
          content: "百位华为技术大牛入驻",
        },
        {
          url: "https://www.huaweicloud.com/service/kunpeng_kpt.html",
          img: require("../assets/banner-icon4.f96e51053f2441c8eab1.png"),
          title: "人才培养专家",
          content: "为产业培养专家服务",
        },
      ],
      freeCourseList: [
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXI016+Self-paced/about",
          title: "华为云鲲鹏云服务与解决方案",
          content:
            "本课程主要介绍华为云鲲鹏服务与解决方案全貌，从基础设施、云服务能力、开放生态和专业服务等几个维度阐述华为云鲲鹏服务与解决方案的优势，尤其针对企业应用系统的鲲鹏云改造给出一套完整的方法工具体系，为发展鲲鹏开放生态，提升业务系统自主创新竞争力，给出明确的发展思路。",
          state: "华为认证",
          img: require("../assets/free-course1.07596a5039c41e6fa1f9.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/5fbf9a44ff0249fbb29e739e0bfe002b/1",
          title: "鲲鹏计算产业与生态",
          content:
            "本课程以典型的鲲鹏云服务知识点为主线，介绍鲲鹏云服务的基础知识，在对鲲鹏的技术体系和生态有一定了解的基础上，介绍典型的鲲鹏云服务，以理论和实操结合的方式，对鲲鹏云服务的概念、场景、功能以及使用等方面进行全方位介绍，通过学习可以对公有云常用服务有全面的理解，并掌握包括计算，安全，网络，存储等相关云服务的操作和维护。",
          state: "华为认证",
          img: require("../assets/free-course2.5e3d00063ad6f30c7f88.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d9b8e5d399344911a746a4fd7b5b4553/1",
          title: "基于鲲鹏云服务的客户案例&解决方案",
          content:
            "本课程以典型的鲲鹏云服务知识点为主线，介绍鲲鹏云服务的基础知识，在对鲲鹏的技术体系和生态有一定了解的基础上，介绍典型的鲲鹏云服务，以理论和实操结合的方式，对鲲鹏云服务的概念、场景、功能以及使用等方面进行全方位介绍，通过学习可以对公有云常用服务有全面的理解，并掌握包括计算，安全，网络，存储等相关云服务的操作和维护。",
          state: "华为认证",
          img: require("../assets/free-course3.0958062d63c1adb42995.png"),
        },
      ],
      courseList: [
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/38eadbd1a37c46408ee2d68ec88b0746/1",
          title: "鲲鹏公有云服务技术与应用",
          content:
            "本课程以典型的鲲鹏云服务知识点为主线，介绍鲲鹏云服务的基础知识，在对鲲鹏的技术体系和生态有一定了解的基础上，介绍典型的鲲鹏云服务，以理论和实操结合的方式，对鲲鹏云服务的概念、场景、功能以及使用等方面进行全方位介绍，通过学习可以对公有云常用服务有全面的理解，并掌握包括计算，安全，网络，存储等相关云服务的操作和维护。",
          state: "华为认证",
          img: require("../assets/course3.61476bce0ba192ceeae0.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/3d0f50eb66284b1db77fb1a1e2d64eeb/1",
          title: "鲲鹏云容器技术与应用",
          content:
            "本课程定位为鲲鹏云容器技术与应用的入门和进阶课程，本课程系统梳理介绍容器、Kubernetes、鲲鹏CCI（云容器实例）、鲲鹏CCE（云容器引擎）、鲲鹏SWR（容器镜像服务）和鲲鹏AOS（应用编排服务）的基本原理和鲲鹏云容器技术的主要应用，通过学习对鲲鹏云容器知识体系及其应用领域的轮廓性认识，并掌握鲲鹏云容器的基本操作和配置。",
          state: "华为认证",
          img: require("../assets/course9.6859b0071ff8bef67d85.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/aa7124c297174bbabf2a801d8e6cad18/1",
          title: "运维自动化管理技术与应用",
          content:
            "本课程主要介绍运维自动化管理技术。主要知识点包含DevOps介绍与运维自动化的发展，自动化部署工具ansible的介绍及实战，DevOps中的自动化部署，容器的自动化运维，微服务治理的理念，服务网格istio的操作与实战，华为云DevCloud的介绍，云日志监控服务的介绍及运维可视化等。通过该门课程的学习，掌握运维自动化的概念，并熟悉其中ansible，istio，日志监控等工具的使用。",
          state: "华为认证",
          img: require("../assets/course12.2cf9ad8525e6514a6b85.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/369c2c1a252a48a19e3f0ebbdddcc0be/1",
          title: "鲲鹏云安全技术与应用",
          content:
            "本课程主要介绍基于鲲鹏云安全服务，介绍不同安全服务的主要功能与防护方式，从云管理安全，业务安全，数据安全几个方面介绍安全的应对措施。通过学习，掌握安全攻击的实现方法和云安全服务防护的能力。",
          state: "华为认证",
          img: require("../assets/course4.d844f7955ff526889a38.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d34dc13f10d24fadb17b4080c21e5eed/1",
          title: "云服务运用技术与实践",
          content: "",
          state: "华为认证",
          img: require("../assets/course11.b0fc9f635ca289a69043.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/cf0ad7de3f6b435d84513168aac3854d/1",
          title: "基于鲲鹏云服务的应用上云部署工程实践-文件存储管理 ",
          content: "",
          state: "华为认证",
          img: require("../assets/course2.56384f9b1c2e1e48f2be.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/24c34eac224744b4a05142b0f028f23e/1",
          title: "云服务迁移与灾备技术",
          content: "",
          state: "华为认证",
          img: require("../assets/course10.219dad8045576c5ccc01.png"),
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/4a77566b5f0b4881886ba4fe2cd602a3/1",
          title: "基于鲲鹏云服务的迁移与灾备工程实践",
          content: "",
          state: "华为认证",
          img: require("../assets/course1.8cf5a1f9f181fd9968ae.png"),
        },
      ],
      practice_course: [
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/adb98a9e044f45babb90e70e092c19f8/1",
          title: "大中型企业OA系统搭建与运维实践",
          content: ["OA系统搭建", "OA系统的业务流程", "OA系统运维实践"],
          state: "华为认证",
          img: require("../assets/shixun1.21fa96c7eba975a20d8a.png"),
          type: "实施部署",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/93ccf610963a42fdaaf1390f8179f860/1",
          title: "海量存储文件管理系统搭建与运维实践",
          content: ["文件管理系统相关云服务", "百万级文件管理系统"],
          state: "华为认证",
          img: require("../assets/shixun2.ff3648b132f133de0fe1.png"),
          type: "实施部署",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/e198ed432c8f4e05b290c6cbe2efa852/1",
          title: "百万级日志分析系统搭建与运维实践",
          content: [
            "日志及日志系统",
            "OA系统的业务流程",
            "百万级ELK日志系统验证",
          ],
          state: "华为认证",
          img: require("../assets/shixun3.d773b20c7da5d28ba48d.png"),
          type: "系统运维",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("../style/big_card.css");
/* @import url("../style/cl_card.css"); */
a {
  text-decoration: none !important;
  background-color: transparent;
}

.title_list_btn:hover,
a:hover {
  color: #007bff !important;
}
#banner_box {
  position: relative;
  height: 470px;
  background-image: url(../assets/banner.f8f7de2abb03812c4b99.png);
  background-repeat: no-repeat;
  background-position: 50%;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
}
.banner_list {
  display: flex;
  position: absolute;
  bottom: -63px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  margin: 0 auto;
  /* flex-wrap: wrap; */
  box-sizing: border-box;
}
.banner_list_card {
  width: calc((100%) / 4);
}
.banner_item:hover {
  border-radius: 4px;
  transform: translateY(-6px);
  box-shadow: 0 16px 20px 0 rgba(124, 142, 227, 0.24);
}
.banner_item {
  display: flex;
  padding: 25px 10px 25px 24px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(74, 78, 92, 0.1);
  width: 258px;
  transition: all 0.35s;
  box-sizing: border-box;
}
.banner_item_box {
  margin-right: 24px;
}
.banner_left {
  width: 56px;
  height: 56px;
  margin-right: 20px;
  background-size: 100%;
}
.banner_title {
  font-size: 18px;
  color: #262b39;
  line-height: 28px;
  font-weight: 700;
}
.banner_content {
  font-size: 14px;
  color: #262b39;
  line-height: 22px;
}

/* main-layout */
.main-layout {
  width: 1200px;
  margin: 0 auto;
  margin-top: 83px;
}
.card_bg {
  background-size: 100%;
}
.cit_title {
  overflow: hidden;
  /* 多行文本溢出显示省略号 */
  text-overflow: ellipsis;
  /* 居中对齐*/
  text-align: justify;
  /* 一种很规范的对齐方式，了解不少先用着 */
  text-justify: newspaper;
  /* 在恰当的断点字进行换行 */
  word-break: break-all;
  height: 25px;
}
#cl_card_item2 {
  width: 280px;
  -webkit-box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
  box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
  border-radius: 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  z-index: 996;
  margin-right: 30px;
  text-overflow: ellipsis;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s;
  transition: all 0.35s;
}
#cl_card_item2:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 16px 0 rgba(150, 142, 227, 0.3);
}

.footer_partner {
  padding-bottom: 15px;
  background-color: #f3f3f3;
  box-sizing: border-box;
}
.partner_title {
  padding: 40px 0 20px;
  color: #222325;
}
.footer_box {
  margin-right: 2s6px;
}
.partner_bg {
  height: 42px;
  background-repeat: no-repeat;
  background-position: 0 100%;
}
.partner_name {
  font-size: 0.875rem;
}
.partner_content {
  font-size: 0.75rem;
}
</style>