<template>
  <div id="HOME">
    <div
      id="carouselExampleIndicators "
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators w-auto">
        <li
          data-target="#carouselExampleIndicators "
          v-for="(item, index) in dataList"
          :key="index"
          :data-slide-to="index"
          :class="{ active: currentIndex === index }"
          @click="toggleClass(index)"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(item, index) in dataList"
          :class="{ active: currentIndex === index }"
          :key="index"
        >
          <a :href="dataList[index].url" target="_blank">
            <img :src="dataList[index].img" class="d-block w-100" />
          </a>
        </div>
      </div>
    </div>
    <!--  -->
    <section class="container-fluid" id="section_nav">
      <div class="text-wrap section_left">
        Classroom是基于华为云的云上软件教学服务，支持高校师生实现备课、上课、作业、考试、实验、实训等全教学流程的线上教学，提供多类习题自动判题、企业级DevOps实训、免费在线习题库等众多高级特性辅助进行数字化教学转型。
      </div>
      <a href>
        <button type="button" class="btn-primary" style>开始上课</button>
      </a>
    </section>
    <!--  -->
    <main id="main">
      <!--  -->
      <nav id="cloudclassroom" class>
        <!-- 标题 -->
        <section class="cl_title justify-content-center text-center">
          <h3 class>云课堂</h3>
          <span style="font-size: 16px; color: #575d6c"
            >免费精品公开课，覆盖丰富知识点、课件与在线习题</span
          >
        </section>
        <!-- 卡片 -->
        <section id="cl_card">
          <a
            :href="item.url"
            class="text-decoration-none"
            target="_blank"
            id="cl_card_item"
            v-for="(item, index) in cardItemList"
            :key="index"
          >
            <nav class="card_item_box">
              <div class="cit_box_top">
                <div
                  class="card_bg"
                  :style="{ backgroundPositionY: item.bpy + 'px' }"
                ></div>
              </div>
              <div class="cit_box_bottom">
                <span class="cit_title">{{ cardItemList[index].title }}</span>
                <div class="cit_info row-vertical-center align-text-bottom">
                  <i class="cit_info_userlogo mr-1"></i>
                  <span class="cit_info_user mr-2">{{ item.user }}</span>
                  <i class="cit_info_schlogo mr-1"></i>
                  <span class="cit_info_school">{{ item.school }}</span>
                  <div class="cit_info_time d-inline-block">
                    <span class v-show="item.time !== ''">{{ item.time }}</span>
                  </div>
                </div>
                <div class="cit_content">{{ item.content }}</div>
                <div class="cit_hr"></div>
                <div class="cit_state">
                  <span>{{ item.state }}</span>
                </div>
                <div class="clearfix"></div>
              </div>
            </nav>
          </a>
        </section>
        <!-- 按钮 -->
        <div class="text-center m-0 p-0">
          <button type="button" class="btn section_btn shadow-sm p-2 m-2" style>
            <a href class="text-secondary text-decoration-none">
              <span class="p-2">查看更多 ></span>
            </a>
          </button>
        </div>
      </nav>
      <!--  -->
      <!--  -->
      <nav id="teachingmarket" class="container-fluid" style="margin-top: 51px">
        <!-- 标题 -->
        <section class="cl_title justify-content-center text-center mt-5">
          <h3 class>教学市场</h3>
          <span style="font-size: 16px; color: #575d6c"
            >丰富教学资源辅助高效教学，免费习题库一键获取</span
          >
        </section>
        <!-- 卡片 -->
        <section id="cl_card">
          <a
            :href="item.url"
            class="text-decoration-none"
            target="_blank"
            id="cl_card_item"
            v-for="(item, index) in classRoomItemList"
            :key="index"
          >
            <nav class="card_item_box">
              <div class="cit_box_top">
                <div
                  class="card_bg"
                  :style="{ backgroundPositionY: item.bpy + 'px' }"
                ></div>
              </div>
              <div class="cit_box_bottom">
                <span class="cit_title">{{
                  classRoomItemList[index].title
                }}</span>
                <div class="cit_info row-vertical-center align-text-bottom">
                  <i class="cit_info_userlogo mr-1"></i>
                  <span class="cit_info_user mr-2">{{ item.user }}</span>
                  <i class="cit_info_schlogo mr-1"></i>
                  <span class="cit_info_school">{{ item.school }}</span>
                  <div class="cit_info_time d-inline-block">
                    <span class v-show="item.time !== ''">{{ item.time }}</span>
                  </div>
                </div>
                <div class="cit_content">{{ item.content }}</div>
                <div class="cit_hr"></div>
                <div class="cit_state">
                  <span>{{ item.state }}</span>
                </div>
                <div class="clearfix"></div>
              </div>
            </nav>
          </a>
        </section>
        <!-- 按钮 -->
        <div class="text-center m-0 p-0">
          <button type="button" class="btn section_btn shadow-sm p-2 m-2" style>
            <a href class="text-secondary text-decoration-none">
              <span class="p-2">查看更多 ></span>
            </a>
          </button>
        </div>
      </nav>
      <!-- 活动公告 -->
      <!-- 活动公告 -->
      <nav
        id="eventinfo"
        class="container-fluid"
        style="margin-top: 51px; margin-bottom: 70px"
      >
        <!-- 标题 -->
        <section
          class="cl_title eventinfo_title justify-content-center text-center"
          style="margin-bottom: 51px"
        >
          <h3 class>活动公告</h3>
        </section>
        <!-- 卡片 -->
        <section id>
          <div
            class="eventinfo_box"
            style="margin: 30px 0"
            v-for="(item, index) in eventInfoList"
            :key="index"
          >
            <a :href="item.url">
              <img
                class="ef_bg"
                alt
                :style="{ backgroundPositionY: item.bpy + 'px' }"
              />
            </a>
            <div class="ef_content d-inline-block" style="padding-bottom: 30px">
              <a class="text-decoration-none h5 text-body" href>{{
                item.title
              }}</a>
            </div>
            <ul class="text-muted ef_c_info">
              <li class="text-decoration-none d-inline-block">
                {{ item.user }}
              </li>
              <li class="d-inline-block" style="margin: 0 14px">|</li>
              <li class="text-decoration-none d-inline-block">
                {{ item.time }}
              </li>
            </ul>
            <div class="cit_hr d-block mt-5"></div>
          </div>
        </section>
      </nav>
    </main>
    <footer class id="footer">
      <nav class="container-fluid">
        <div
          class="footer_box justify-content-center text-left"
          style="padding-top: 35px"
        >
          <div class="clearfix">
            <div class="d-inline-block align-middle">
              <span class="info_left"
                >版权所有 © 华为软件技术有限公司 2020</span
              >
              <span class="info_left">保留一切权利</span>
              <a
                class="info_left text-decoration-none a_link"
                href="http://www.beian.miit.gov.cn"
                target="_blank"
                rel="nofollow"
                >苏ICP备17040376号-32</a
              >
              <span class="info_left">苏B2-20130048号</span>
              <span class="info_left">代理域名注册服务机构：新网</span>
            </div>
            <div class="d-inline-block float-right">
              <a
                href="//www.huaweicloud.com/declaration/statement.html"
                target="_blank"
                rel="nofollow"
                class="a_link"
                >法律声明</a
              >
              <a class="d-inline-block" style="margin: 0 8px">|</a>
              <a
                href="//www.huaweicloud.com/declaration/sa_prp.html"
                target="_blank"
                rel="nofollow"
                class="a_link"
                >隐私政策</a
              >
            </div>
          </div>

          <div class="mt-2">
            <span class="goverment_logo_a"></span>
            <span class="goverment_logo_b"></span>
            <a
              href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010008"
              target="_blank"
              class="a_link"
              >苏公网安备 32011402010008号</a
            >
          </div>
        </div>
      </nav>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      dataList: [
        {
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/banner-2.64b1407e7a8db89d6cf2.jpg",
          url: "https://bbs.huaweicloud.com/forum/thread-39737-1-1.html",
        },
        {
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/banner-8.d14241daf518717981c6.jpg",
          url: "https://auth.huaweicloud.com/authui/login.html",
        },
        {
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/banner-10.30eaaf519fa37bf97d36.jpg",
          url:
            "https://developer.huaweicloud.com/activity/full-stack/web-developer.html",
        },
        {
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/banner-4.4ac0f6534a11844638e4.jpg",
          url:
            "https://developer.huaweicloud.com/activity/full-stack/java-developer.html",
        },
      ],
      // 模拟数据
      currentIndex: 0, // 轮播图索引
      cardList:
        "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png",

      // 卡片logo小图
      cardLogo:
        "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/classroom.sprite.a8c4b583317a1934d9f5.png?1597026622102",
      // 卡片信息
      cardItemList: [
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/6bc98f2050e14b539dd46ea64b14b92f/4",
          title: "区块链精品课程",
          content:
            "本课程由浅入深的介绍区块链技术缘起、原理机制、演进和发展现状，分享区块链典型应用场景及特点。了解华为云区块链的方案及特点，参与动手实验。从入门到实践，循序渐进一站式学习。 ",
          state: "限时免费",
          time: "6小时",
          user: "Classroom",
          school: "华为云",
          bpy: 0,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d2784d62244346b79d7c94576d7cef7c/1",
          title: "技术大咖在线论道-华为云技术开放视频合集",
          content:
            "【技术大咖在线论道 百万+开发者精益成长】 汇聚多领域资深技术专家视频课程； 探讨国内外前沿技术领域发展趋势； 助力开发者专业技术能力精益成长； 分享可借鉴研发技术实践成功经验。 ",
          state: "限时免费",
          time: "90小时",
          user: "Classroom",
          school: "华为云",
          bpy: -200,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/51984f98b566492e8f5fb68671446c74/4",
          title: "HE2E DevOps实践 ",
          content:
            "【7天DevOps高效协同开发实战训练】研发团队如何真正构建端到端的持续交付流水线？本训练营从实战角度出发，剖析DevOps转型痛点，重点训练DevOps协同研发策略，覆盖Scrum、DevOps、分支策略等知识点，配套DevOps全流程样例实战项目，快速学习、快速演练、及时查漏补缺进行认知迭代和能力提升。带你从了解协同研发实施框架的落地策略开始，掌握敏捷项目管理、敏捷测试管理、编码和配置管理、代码质量自动化检查、持续交付之CI/CD及持续交付之流水线等核心技能。 本次训练营讲师为华为云MVP、中国最大的DevOps在线社区DevOpsHub创始人徐磊老师，徐磊老师从2005年至今已经为超过100家企业提供过软件工程方案的咨询和服务。 ",
          state: "限时免费",
          time: "16小时",
          user: "Classroom",
          school: "华为云",
          bpy: -400,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/94f94e38f80d4d5bb1da728b8982fc5b/3",
          title: "C语言程序设计（免费公开课）",
          content:
            " 本课程适合作为高等学校计算机专业及相关专业C语言程序设计课程的教材，也可作为计算机等级考试参考书，还可供从事计算机软件开发人员参考使用。主要包含，C语言概述，数据类型，基本语句与结构化程序设计，数组，函数和模块化程序设计，指针，预处理命令，复杂数据类型，文件。附有习题，习题覆盖知识重点，题型丰富。 ",
          state: "限时免费",
          time: "96小时",
          user: "Classroom",
          school: "华为云",
          bpy: -600,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/4cdd957181a64895a07853d458e28714/5",
          title: "Web实践(免费公开课) ",
          content:
            " 本门课程涵盖：WEB基础、CSS、JS、H5等教学内容组成，学生可以逐步提升前端开发能力。 ",
          state: "限时免费",
          time: "96小时",
          user: "Classroom",
          school: "华为云",
          bpy: -800,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/708f42f2ecad403bac894e38d776830c/6",
          title: "人工智能:算法与实践（免费公开课）",
          content:
            " 本课程讲述的是人工智能相关算法与实践的教学内容，介绍相关的数学基础、应用及工具，以及如何在实际环境中使用它们。课程不仅仅介绍了各种人工智能算法的理论知识，更是通过建立多个实际案例、习题测评，引导学生在实际项目中学到相关知识经验，同时老师可以灵活安排学生的学习任务，有效地对学生的知识吸收情况做针对性的解决。课程开发环境为python3.6及以上 + Anaconda3 。 ",
          state: "限时免费",
          time: "96小时",
          user: "Classroom",
          school: "华为云",
          bpy: -1000,
        },
      ],
      // 教学市场
      classRoomItemList: [
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/detail/excerlibdetail/b2d3bfd4934744ebb8570187c281809b/market?assembleType=-1",
          title: "JAVA-习题库",
          content:
            "本习题库覆盖JAVA的相关知识，习题涉及到基本数据类型、语句、类、封装继承、对象、接口、内部类、异常处理、字符串、实用类、多线程、输入输出流等相关知识。 习题类型包括单选题、编程题、单人项目题等，每个习题都与知识点相对于，通过这些习题，可以很好的检查学生对JAVA知识的掌握程度，提升学生的动手编码能力。",
          state: "限时免费",
          time: "",
          user: "Classroom",
          school: "华为云",
          bpy: -1200,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/detail/excerlibdetail/9f1c70f5d91c4e18be4f880b62328511/market?assembleType=-1",
          title: "C-习题库",
          content:
            "本习题库覆盖C语言的相关知识，习题涉及到C语言概述，数据类型，基本语句与结构化程序设计，数组，函数和模块化程序设计，指针，预处理命令，复杂数据类型，文件操作等。习题类型包括单选题、编程题，每个习题都与知识点相对应，所有习题支持自动判题，通过这些习题，可以很好的检查学生对C语言知识的掌握程度，提升学生的动手编码能力",
          state: "限时免费",
          time: "",
          user: "Classroom",
          school: "华为云",
          bpy: -1400,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/detail/excerlibdetail/aad8a52b7e6540bea1cb80f8d2cb1ec3/market?assembleType=-1",
          title: "Web-习题库",
          content:
            "本习题库覆盖web开发相关知识点，对HTML、CSS、JavaScript等内容，进行了习题覆盖。习题类型包括单选题、编程题，每个习题都与知识点相对于，通过这些习题，可以很好的检查学生对Web知识的掌握程度，提升学生的动手编码能力。",
          state: "限时免费",
          time: "",
          user: "Classroom",
          school: "华为云",
          bpy: -1600,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/coursedetail/1d9080a4a6074c3f942547945d867c0b/market?assembleType=-1",
          title: "系统分析与设计",
          content:
            "本课程通过DevOps与云服务相结合，基于“项目驱动”的工程实践进行能力训练，采取“基础知识-->核心应用-->综合案例-->企业实践”的结构和“由浅入深，由深到精”的学习模式进行讲解，掌握产品经理与项目经理应具备的技能知识点，具备云服务与开发的基本能力。系统分析设计是最复杂最棘手的人类活动之一，是软件成败的关键所在。目前软件行业经历巨大的变革，滞后的传统开发模式已经成为了传统软件行业发展的限制，“云软件”利用云计算和线上服务模式简化了用户操作，随时随地为客户解决需求，在软件行业转型中跨出了坚实的一步。系统规划、需求分析、敏捷管理、配置管理、代码检查、编译构建、自动测试、部署发布、流水线，这些技术都是本次课程重点讲解内容，并结合华为公司的实际生产环境，针对在线服装商城项目在DevCloud上进行全生命周期的讲解。在现代化系统中，软件开发安全也变得尤为重要，本课程将通过软件开发安全模型与软件开全漏洞和编码安全等讲解如何设计一个安全的软件。作为优秀的软件开发者，不仅要有高超的技术，还要有伦理之心，本课程将通过讲授人工智能伦理和大数据伦理，为开发者全面进行工程伦理的知识讲解。",
          state: "限时免费",
          time: "",
          user: "Classroom",
          school: "华为云",
          bpy: -1800,
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/coursedetail/dfb690d9c479426c8717831c31d969c5/market?assembleType=-1?assembleType=-1",
          title: "数据结构（C语言）实践教学精品课",
          content:
            "本课程对常用的数据结构做了系统的介绍，力求概念清晰，注重实际应用。课程依次介绍数据结构的基本概念、线性表、栈和队列、串和数组、树和二叉树、图结构，以及查找和排序等基本运算，用C语言作为算法描述语言，并附有典型例题与小结，便于读者总结与提高。",
          state: "限时免费",
          time: "",
          user: "Classroom",
          school: "华为云",
          bpy: -2000,
        },
        {
          url:
            "https://classroom.devcloud.cn-north-4.huaweicloud.com/coursedetail/850e066447f84d5f8ac70b23460be087/market?assembleType=-1",
          title: "Python程序设计精品课",
          content:
            "本课程主要介绍Python语言的语法及常用模块的使用，重点介绍面向对象设计，字符串操作，正则表达式等知识，同时通过游戏设计，展示Python语言的简易和强大。当前Python作为一门优秀的综合语言，在人工智能、云计算、金融分析、大数据开发、WEB开发、自动化运维、测试等方向有应用广泛，因此学好Python语言编程是非常有必要的。 本课程还结合相关的python习题，提升同学们的编程动手能力，加深对Python语言的理解，学习过程中对知识的理解程度进行及时检验。最后，通过企业实践，总结出一套行之有效的Python编程技巧，可以帮助同学们在今后的工作中少走弯路。",
          state: "限时免费",
          time: "",
          user: "Classroom",
          school: "华为云",
          bpy: -2200,
        },
      ],
      eventInfoList: [
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2806547cce804017884bfd0ac7847c0b/1",
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/notice.215e169ce5a0ddc20722.png",
          title: "大连理工大学与华为软件工程大师华山论剑，邀您参与。",
          state: "",
          time: "2020/03/31",
          user: "Classroom",
          school: "华为云",
          bpy: 0,
        },
        {
          url: "http://mudu.tv/app.php?a=channelList&id=25097",
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/notice.215e169ce5a0ddc20722.png",
          title: "大连理工、华为云、目睹有课三方携手直播JAVA线上教学。",
          state: "",
          time: "2020/02/07",
          user: "Classroom",
          school: "华为云",
          bpy: -96,
        },
        {
          url: "https://bbs.huaweicloud.com/forum/thread-40059-1-1.html",
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/notice.215e169ce5a0ddc20722.png",
          title: "【Part1】玩转华为云Classroom，在线教学so easy！",
          state: "",
          time: "2020/02/01",
          user: "Classroom",
          school: "华为云",
          bpy: -192,
        },
        {
          url: "https://bbs.huaweicloud.com/forum/thread-40061-1-1.html",
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/notice.215e169ce5a0ddc20722.png",
          title: "【Part2】玩转华为云Classroom，在线教学so easy！",
          state: "",
          time: "2020/02/01",
          user: "Classroom",
          school: "华为云",
          bpy: -288,
        },
        {
          url: "https://bbs.huaweicloud.com/forum/thread-39946-1-1.html",
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/notice.215e169ce5a0ddc20722.png",
          title: "Classroom开放免费高校自学课程，与您并肩战“疫”！",
          state: "",
          time: "2020/01/31",
          user: "Classroom",
          school: "华为云",
          bpy: -384,
        },
        {
          url: "https://bbs.huaweicloud.com/forum/thread-39737-1-1.html",
          img:
            "https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/notice.215e169ce5a0ddc20722.png",
          title: "Classroom线上教学免费开放，与您并肩战“疫”。",
          state: "",
          time: "2020/01/28",
          user: "Classroom",
          school: "华为云",
          bpy: -480,
        },
      ],
    };
  },
  methods: {
    toggleClass(index) {
      this.currentIndex = index;
    },
    tran() {
      this.show = !this.show;
    },
  },
};
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
.carousel-indicators .active {
  background-color: #007bff !important;
  margin-bottom: 24px;
  width: 30px !important;
  height: 9px;
  border-radius: 15px !important;
  transition: opacity 0.6s ease;
  transition: transform 1s ease, opacity 0.3s ease-out;
}
.carousel-indicators li {
  background-color: hsl(0, 0%, 0%);
  border-radius: 100%;
  width: 9px;
  height: 9px;
  display: inline-block;
  font-size: 12px;
  text-align: center;
  margin-right: 4px;
  opacity: 0.2;
  transition: transform 1s ease, opacity 0.3s ease-out;
}
.carousel-item {
  transition: transform 1s ease, opacity 0.3s ease-out;
}

#section_nav {
  display: flex;
  flex-wrap: nowrap;
  padding: 30px;
  position: relative;
  top: -25px;
  z-index: 998;
  width: 1200px;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(41, 48, 64, 0.1);
  border-radius: 5px;
  align-items: center;
  max-width: 100vw;
}

.section_left {
  flex: 1;
  padding-right: 40px;
  font-size: 16px;
  color: #5e6678;
  line-height: 32px;
}
.btn-primary {
  height: 32px;
  line-height: 20px;
  border-radius: 20px;
  padding: 4px 20px;
  margin-right: 12px;
  font-size: 14px !important;
  border: none !important;
}

/* main部分 */
#main {
  margin: 0 auto;
  padding: 0;
  max-width: 1229px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
#cloudclassroom {
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  box-sizing: border-box;
}
/* 标题 */
.cl_title {
  margin: 30px 0 40px 0;
}
.cl_title > h3 {
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 700;
}
/* 卡片 */
#cl_card {
  flex-flow: row wrap;
  display: flex;
  /* margin-right: -30px; 比起这个flex更赞👇*/
  justify-content: space-around;
  align-items: center;
}
#cl_card_item {
  width: 380px;
  box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
  border-radius: 12px;
  box-sizing: border-box;
  display: inline-block;
  z-index: 996;
  margin-bottom: 30px;
}
.card_item_box {
  box-sizing: border-box;
}
.cit_box_top {
  overflow: hidden;
}
.card_bg {
  width: 100%;
  height: 200px;
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png);
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
}

.cit_box_bottom {
  padding: 0 20px;
  width: 100%;
  font-size: 16px;
  color: #293040;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 16px;
  border-radius: 12px;
}
.cit_title {
  font-weight: 700;
}
.cit_info {
  margin-top: 8px;
  margin-bottom: 16px;
  color: #959eb2;
  font-size: 12px;
  align-items: center;
}
.cit_info_userlogo {
  background-position: -508px -192px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/classroom.sprite.a8c4b583317a1934d9f5.png?);
}
.cit_info_schlogo {
  background-position: -240px -468px;
  width: 16px;
  height: 16px;
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/classroom.sprite.a8c4b583317a1934d9f5.png?);
}
.cit_info_time {
  display: block;
}
.cit_info_time > span {
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 2px 8px;
  position: relative;
  left: 150px;
  float: right;
}
.cit_content {
  height: 48px;
  line-height: 24px;
  width: 100%;
  font-size: 14px;
  color: #5e6678;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.5px;
  word-break: break-all;
  margin-top: 8px;
}
.cit_hr {
  margin-top: 5px;
  width: 100%;
  height: 1px;
  opacity: 0.05;
  background: #000;
}
.cit_state {
  overflow: hidden;
  padding: 14px 0;
}
.cit_state > span {
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  color: #e41f2b;
  padding: 2px 4px;
  border-radius: 2px;
  background-color: rgba(228, 31, 43, 0.1);
  float: right;
}
.card_item_box:hover {
  border-radius: 12px;
  transform: translateY(-15px);
  overflow: hidden;
  box-shadow: 0 14px 16px 0 rgba(150, 142, 227, 0.3);
}
/* 活动公告 */
.ef_bg {
  float: left;
  width: 160px;
  height: 96px;
  margin-right: 30px;
  background: url("https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/notice.215e169ce5a0ddc20722.png");
}
.ef_c_info {
  font-size: 14px;
}
/* footer */
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
@media screen and (max-width: 1194px) {
  #main {
    margin: 0;
  }
}
</style>