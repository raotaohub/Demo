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
      console.log(reg);
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
        "微认证",
        "Git",
        "devcloud",
        "区块链",
        "敏捷",
        "DevOps",
        "Java",
        "前端",
        "应用开发",
        "微服务架构",
        "软件工程",
      ],
      hotcourseList: [
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/3d735a0a8cfc4457bcfe79bcb24b3ef3/1",
          title: "北京信息职业技术学院暑期夏令营",
          user: "Classroom",
          school: "华为云",
          tag: "微认证 Git devcloud",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/4b8ac73aa05742bcb113557c8079c7c2/1",
          title: "湖南省区块链大赛-《区块链技术及应用》",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2c36c4f36b7f4b14a5627fadc9b1e123/5",
          title: "湖南省区块链大赛-精品实践课",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/9c3d69e70d0143929af92678b9177743/1",
          title: "华为云高校开发者青年班第四期",
          user: "Classroom",
          school: "华为云",
          tag: "微认证 Git 敏捷 DevOps",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/286b22ee211e423d953322a05cbf909b/1",
          title: "四川师范大学面试培训会",
          user: "Classroom",
          school: "华为云",
          tag: "求职 Java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/be3e0e8882044f1999119e7dea906d3d/1",
          title: "7天玩转前端研发实战营",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/e53852bc325a454abeaa3b1f7d49d66b/1",
          title: "啤酒供需数字化管理系统Demo及操作指导",
          user: "Classroom",
          school: "华为云",
          tag: "应用开发",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/1acad48b45384ec3a32517744ecfb539/1",
          title: "湖南区块链大赛-21天区块链实战",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/1ee5acc932134b63866b89c790428b77/1",
          title: "市政口罩管理系统Demo与操作手册",
          user: "Classroom",
          school: "华为云",
          tag: "应用开发",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d2784d62244346b79d7c94576d7cef7c/1",
          title: "技术大咖在线论道-华为云技术开放视频合集",
          user: "Classroom",
          school: "华为云",
          tag: "微服务架构",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/5c50439ef144456185d0aeff7e099071/1",
          title: "云享读书会《敏捷无敌之DevOps时代》",
          user: "Classroom",
          school: "华为云",
          tag: "敏捷 DevOps",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/51f29987ab234b3993f54e834a247faf/1",
          title: "<互联网+创新创业>弯道超车自学课程",
          user: "Classroom",
          school: "华为云",
          tag: "敏捷 DevOps",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2769fd5d78d14f2f98e80ff3d460c925/1",
          title: "华为DevCloud.云帆计划毕业季暑期成长计划",
          user: "Classroom",
          school: "华为云",
          tag: "求职 Java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2746cf34d8bc45fb82e9fb0b0b4ab5d5/1",
          title: "云享读书会《程序员修炼之道》",
          user: "Classroom",
          school: "华为云",
          tag: "软件工程",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/51984f98b566492e8f5fb68671446c74/4",
          title: "HE2E DevOps实践",
          user: "Classroom",
          school: "华为云",
          tag: "敏捷 DevOps",
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