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
                <div class="card_bg" :style="{backgroundPositionY: `${bpyStyle(index)}` +'px'}"></div>
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
        "云计算",
        "软件开发",
        "大数据",
        "架构设计",
        "物联网",
        "鲲鹏",
      ],
      hotcourseList: [
        {
          url:
            "https://education.huaweicloud.com/programs/16cfbeb8-40dd-48b3-a490-e884f8bd2814/about?isAuth=0&cfrom=hwc",
          title: "物联网开发者系列课程",
          user: "Classroom",
          school: "华为云",
          tag: "物联网",
        },
        {
          url:
            "https://education.huaweicloud.com/programs/fcdaaec3-bd7a-41a1-8532-f3a9a5bd22ff/about?isAuth=0&cfrom=hwc",
          title: "鲲鹏开发者系列课程",
          user: "Classroom",
          school: "华为云",
          tag: "鲲鹏",
        },
        {
          url:
            "https://education.huaweicloud.com/programs/d1e194ae-1ea6-4390-8cc6-b57fd85e4f4c/about",
          title: "开发者系列课程",
          user: "Classroom",
          school: "华为云",
          tag: "软件开发",
        },
        {
          url:
            "https://education.huaweicloud.com/programs/cbfcfb5a-327a-45ed-a2be-c81856ea98a3/about",
          title: "EI智能数据湖系列课程",
          user: "Classroom",
          school: "华为云",
          tag: "大数据",
        },
        {
          url:
            "https://education.huaweicloud.com/programs/b32c57cb-3b77-413e-a4be-7baca88cdeab/about",
          title: "云计算初学者系列课程",
          user: "Classroom",
          school: "华为云",
          tag: "云计算",
        },
        {
          url:
            "https://education.huaweicloud.com/programs/ea15590b-277a-4358-bd64-e27131dfb378/about",
          title: "架构师系列课程",
          user: "Classroom",
          school: "华为云",
          tag: "架构设计",
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
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/index-base.8219f4736a92c4a4f526.png);
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
}
</style>