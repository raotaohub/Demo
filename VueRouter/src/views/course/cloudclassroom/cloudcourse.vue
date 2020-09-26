<template>
  <div id="hotcourse">
    <!-- 卡片 -->
    <section>
      <nav id="cloudclassroom" class>
        <div class="title_list">
          <div class="d-inline-block" v-for="(item,index) in classIfy" :key="index">
            <button
              @click="filterList(`${item}`)"
              class="title_list_btn text-secondary btn section_btn"
            >{{item}}</button>
          </div>
        </div>
        <section id="cl_card">
          <a
            :href="item.url"
            class="text-decoration-none"
            target="_blank"
            id="cl_card_item"
            v-for="(item,index) in newList"
            :key="index"
          >
            <nav class="card_item_box">
              <div class="cit_box_top">
                <div class="card_bg" :style="{backgroundPositionY: `${bpyStyle(index)}` + 'px'}"></div>
              </div>
              <div class="cit_box_bottom">
                <span class="cit_title">{{item.title}}</span>
                <div class="cit_info row-vertical-center align-text-bottom">
                  <i class="cit_info_userlogo mr-1"></i>
                  <span class="cit_info_user mr-2">{{item.user}}</span>
                  <i class="cit_info_schlogo mr-1"></i>
                  <span class="cit_info_school">{{item.school}}</span>
                  <div class="cit_info_time d-inline-block">
                    <span class v-show="item.time!==''">{{item.time}}</span>
                  </div>
                </div>
                <div class="cit_hr"></div>
                <div class="cit_state">
                  <span>{{item.state}}</span>
                </div>
                <div class="clearfix"></div>
              </div>
            </nav>
          </a>
        </section>
        <!-- 按钮 -->
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    bpyStyle: Function,
  },
  computed: {
    newList() {
      const { hotcourseList, filtrate } = this;
      var reg = new RegExp(filtrate, "ig");
      if (filtrate !== "全部") {
        
        return hotcourseList.filter((item) => item.tag.match(reg) !== null);
      } else {
        return hotcourseList;
      }
    },
  },
  methods: {
    filterList(value) {
      this.filtrate = value;
    },
  },
  data() {
    return {
      filtrate: "全部",
      classIfy: [
        "全部",
        "软件开发",
        "云计算",
        "人工智能",
        "区块链",
        "大数据",
        "物联网",
        "架构设计",
        "鲲鹏",
        "昇腾AI",
      ],
      hotcourseList: [
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP015+Self-paced/about",
          title: "7天玩转容器之基础入门课",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX024+Self-paced/about",
          title: "OpenStack原理及在华为云中的应用",
          user: "Classroom",
          school: "华为云",
          tag: "云计算",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXT004+Self-paced/about",
          title: "人人学IoT",
          user: "Classroom",
          school: "华为云",
          tag: "物联网",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE035+Self-paced/about",
          title: "7天玩转数据仓库（DWS）",
          user: "Classroom",
          school: "华为云",
          tag: "大数据",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE007+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "大数据入门与应用",
          user: "Classroom",
          school: "华为云",
          tag: "大数据",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX005+Self-paced/about",
          title: "数据中心：全面云化的新一代互联网基础",
          user: "Classroom",
          school: "华为云",
          tag: "大数据",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX032+self-paced/about",
          title: "Python语言基础",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX002+2018.5/about",
          title: "架构设计基础",
          user: "Classroom",
          school: "华为云",
          tag: "架构设计",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXD001+2018.5/about?isAuth=0&cfrom=hwc",
          title: "数据库入门与应用",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXI003+2018.5/about",
          title: "弹性云服务器ECS：轻松上云第一步",
          user: "Classroom",
          school: "华为云",
          tag: "云计算",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP016+Self-paced/about",
          title: "云享读书会《区块链技术及应用》",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXV014+Self-paced/about",
          title: "云享读书会《敏捷转型：打造VUCA时代的高效能组织》",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE093+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "云享读书会《数据仓库工具箱》",
          user: "Classroom",
          school: "华为云",
          tag: "大数据",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP010+Self-paced/about",
          title: "7天转型运维实战营",
          user: "Classroom",
          school: "华为云",
          tag: "人工智能",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE038+Self-paced/about",
          title: "实战篇：神经网络赋予机器识图的能力",
          user: "Classroom",
          school: "华为云",
          tag: "人工智能",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXT006+Self-paced/about",
          title: "HCIA-华为认证IoT工程师课程",
          user: "Classroom",
          school: "华为云",
          tag: "物联网",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX055+Self-paced/about",
          title: "云原生应用架构",
          user: "Classroom",
          school: "华为云",
          tag: "架构设计",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE011+Self-paced/about",
          title: "21天转型AI实战营",
          user: "Classroom",
          school: "华为云",
          tag: "云计算",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE041+Self-paced/about",
          title: "实战篇：让机器理解人类语言和语音",
          user: "Classroom",
          school: "华为云",
          tag: "人工智能",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXA008+Self-paced/about",
          title: "TBE认证培训课程（高级）",
          user: "Classroom",
          school: "华为云",
          tag: "鲲鹏",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX033+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "PYTHON语言进阶",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXV001+2018.5/about?isAuth=0&cfrom=hwc",
          title: "华为DevOps实践",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXV016+Self-paced/about",
          title: "云享读书会《敏捷无敌之DevOps时代》",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE097+Self-paced/about",
          title: "DWS中级工程师课程",
          user: "Classroom",
          school: "华为云",
          tag: "大数据",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXI010+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "21天转型容器实战营",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXV010+Self-paced/about",
          title: "7天玩转性能&接口测试实战营",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXK009+Self-paced/about",
          title: "（已下线）HCIA-Kunpeng Application Developer课程",
          user: "Classroom",
          school: "华为云",
          tag: "鲲鹏",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXI018+Self-paced/about",
          title: "人人学云网络",
          user: "Classroom",
          school: "华为云",
          tag: "云计算",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX069+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "NUMA架构下的软件性能挑战",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX053+Self-paced/about",
          title: "企业IT系统演进",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP017+Self-paced/about",
          title: "Kafka全景实践课",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXU002+Self-paced/about",
          title: "云时代下的网络安全",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP020+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "区块链全景实践课",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE037+Self-paced/about",
          title: "实战篇：刷脸时代已经到来，你准备好了吗？",
          user: "Classroom",
          school: "华为云",
          tag: "人工智能",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE036+Self-paced/about",
          title: "入门篇：人工智能开启新纪元",
          user: "Classroom",
          school: "华为云",
          tag: "人工智能",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE096+Self-paced/about",
          title: "7天玩转网络AI模型开发",
          user: "Classroom",
          school: "华为云",
          tag: "人工智能",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP013+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "微服务全景体验实践小课",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX054+Self-paced/about",
          title: "传统应用云上架构",
          user: "Classroom",
          school: "华为云",
          tag: "架构设计",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXA007+Self-paced/about",
          title: "TBE认证培训课程（初级）",
          user: "Classroom",
          school: "华为云",
          tag: "昇腾AI",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXD004+Self-paced/about",
          title: "7天Redis超速入门",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXD002+2018.5/about?isAuth=0&cfrom=hwc",
          title: "数据库进阶学习",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP018+Self-paced/about",
          title: "Redis全景实践课",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE039+Self-paced/about",
          title: "实战篇：给机器一双“慧眼”，看懂文字、图像和视频",
          user: "Classroom",
          school: "华为云",
          tag: "人工智能",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE040+Self-paced/about",
          title: "实战篇：不用写代码也可以自建AI模型",
          user: "Classroom",
          school: "华为云",
          tag: "人工智能",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX047+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "（已下线）HCIE-Cloud Service Solutions Architect课程",
          user: "Classroom",
          school: "华为云",
          tag: "架构设计",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP012+Self-paced/about",
          title: "21天转型微服务实战营",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXX046+Self-paced/about",
          title: "HCIP-Cloud Service Developer V1.0课程",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXE101+Self-paced/about",
          title: "DWS高级工程师课程",
          user: "Classroom",
          school: "华为云",
          tag: "大数据",
        },
        {
          url:
            "https://education.huaweicloud.com/courses/course-v1:HuaweiX+CBUCNXP014+Self-paced/about?isAuth=0&cfrom=hwc",
          title: "7天玩转电商应用性能调优",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/563f0b8bee1447ec88951d9681fe2324/1",
          title: "JAVA应用程序设计（免费公开课）",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/6bc98f2050e14b539dd46ea64b14b92f/4",
          title: "区块链精品实践课",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/0c2573da0bf4414a828db8879ba21c74/3",
          title: "数据结构（C++）实践（免费公开课）",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d2784d62244346b79d7c94576d7cef7c/1",
          title: "技术大咖在线论道-华为云技术开放视频合集",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
      ],
    };
  },
};
</script>
<style scoped>
@import url("../../../style/cl_card");
.card_bg {
  width: 100%;
  height: 200px;
  /* width: 280px; */
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/index-cloud.07a57744ef9e998461a5.png);
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
}
</style>