<template ref="Card">
  <div id="hotcourse">
    <!-- 卡片 -->
    <section>
      <nav id="cloudclassroom" class>
        <div class="title_list">
          <!-- tag组件 -->
          <tag :classIfy="classIfy" :filterList="filterList"></tag>
        </div>
        <section id="cl_card">
          <!-- card-4组件 -->
          <card :newList="newList" :bpyStyle="bpyStyle"></card>
        </section>
      </nav>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Tag from "@/components/Tag.vue";

export default {
  props: {
    bpyStyle: Function,
  },
  components: { Card, Tag },

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
        "算法与数据结构",
        "应用开发",
        "Android",
        "区块链",
        "java",
        "软件测试",
        "Python",
        "前端",
        "影视制作",
        "ui",
        "产品经理",
        "运营",
      ],
      hotcourseList: [
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/60dc8bb733e24d548fe84bf398ebf630/1",
          title: "三天玩转最优路径算法",
          user: "Classroom",
          school: "华为云",
          tag: "算法与数据结构",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2df188c031f24caa8b44e5566cf98e44/4",
          title: "基于ROMA及AppEngine告警消息分离应用",
          user: "Classroom",
          school: "华为云",
          tag: "应用开发",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d76f55db9c624a9aaf8cefea0cf85043/4",
          title: "基于AppEngine出差电子流应用开发",
          user: "Classroom",
          school: "华为云",
          tag: "应用开发",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d98a394eafc14905af8c4f9027b72a55/4",
          title: "基于ROMA及AppEngine智慧气象局应用开发",
          user: "Classroom",
          school: "华为云",
          tag: "应用开发",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/9475e3f73380450ca5fe4866c0ff0976/1",
          title: "Android核心技术系列之一-初识Android",
          user: "Classroom",
          school: "华为云",
          tag: "Android",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/293c04ae16574874955f96ac8c8dbe26/1",
          title: "Android核心技术系列之二-Android基础入门",
          user: "Classroom",
          school: "华为云",
          tag: "Android",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/e52842381d94405caa6301dc8db70259/1",
          title: "Android核心技术系列之三-初级Android开发",
          user: "Classroom",
          school: "华为云",
          tag: "Android",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2e966e3cf9ac423c86ae2b8563f627cd/1",
          title: "Android核心技术系列之四-Android进阶",
          user: "Classroom",
          school: "华为云",
          tag: "Android",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/8fb1cee9243c4acf836aeecd8943b410/1",
          title: "Android核心技术系列之五-Android精通",
          user: "Classroom",
          school: "华为云",
          tag: "Android",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/53ec51302dea452eb2f2c34e45470dc4/5",
          title: "区块链入门",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/94e90dac22984b388c500d4409fbad22/1",
          title: "Spring定时任务2步轻松搞定",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/30ade322372b4a78b3793870209b61c8/1",
          title: "千万级流量架构优化策略",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/fa3a7915dcba45bbb3d935d451cbe5ad/1",
          title: "Lombok安装及使用教程",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/91cb539c75a5453194c6d034ef4932f9/1",
          title: "Zookeeper入门与实践",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/6d76ed3e79514316b2fddec905864b97/1",
          title: "软件测试入门-黑马头条项目实战",
          user: "Classroom",
          school: "华为云",
          tag: "软件测试",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/229b93b64a4e4df0a9511ac7f4c45831/1",
          title: "从0开始学Python",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2cc39b7084f64887926bf674a176355c/1",
          title: "掌握Java常用API提高编程效率",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/4452dc438dda40b89fe4034a88b29534/1",
          title: "使用Java+POI读写Excel文档",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/a3440710361c4f11a719b109ebe85868/1",
          title: "jQuery瀑布流插件封装",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/e8138bcb39d0464b895db5a79326a89d/1",
          title: "轻松学好多线程，JAVA并发不头疼",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/ed0174074d874eacba19c7c8a2e6d523/1",
          title: "Java“方法”学的好，程序代码复用高",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/25bb32901063496383385ef384ff0abf/1",
          title: "2小时搞懂区块链",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/204a6c3958894c0cbdbcce8094c40fe7/1",
          title: "1小时精通Redis哨兵模式",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/6bc98f2050e14b539dd46ea64b14b92f/4",
          title: "区块链精品实践课",
          user: "Classroom",
          school: "华为云",
          tag: "区块链",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/c8fa8506f99e4515ab911fedc548fe05/1",
          title: "快乐的Java网络编程",
          user: "Classroom",
          school: "华为云",
          tag: "java",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/6f5800c66c4742cca7e122a1df566971/1",
          title: "剪辑大神50招",
          user: "Classroom",
          school: "华为云",
          tag: "影视制作",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d6f68af283f14393a4b04234bc674aac/1",
          title: "UI入门-商业广告设计实战视频",
          user: "Classroom",
          school: "华为云",
          tag: "ui",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/bf5cd9db69ca4cd195ecfde07dc51954/1",
          title: "前端基础技能HTML入门到进阶",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2df42ab1303b46b48431225f4e5844ba/1",
          title: "Axure基础课",
          user: "Classroom",
          school: "华为云",
          tag: "产品经理",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/454697e279fc4f5ab060fe2564823923/1",
          title: "自媒体运营套路大揭底，带你轻松做爆文上线",
          user: "Classroom",
          school: "华为云",
          tag: "运营",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/9a23cc47a63e4c16880c340cbf7850a3/1",
          title: "Vue.js基础入门开发",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/8800abed3cd14a928b18db33374b97d7/1",
          title: "揭秘Ajax",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/c492e951c4994cfe87b49f08d9345fdf/1",
          title: "Python核心系列之前置知识",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/d8eafd91dbd247fa9a1f2b9fcb0b4d1a/1",
          title: "Python核心系列之入门",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/7efd3e16b3d3487080c7f377c025a411/1",
          title: "Python核心系列之运算",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/9dcadd8d21ba4032944d793fd6dce2f4/1",
          title: "Python核心系列之控制语句",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/05a8d0bbf52a49aa9cdbf6505dcc5f09/1",
          title: "Python核心系列之模板介绍",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/812eb25cf4c14fac80cb9f7ad308884d/1",
          title: "Python核心系列之函数和装饰器",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/3a3ff5cd6de942f189bc806c0f2a564d/1",
          title: "Python核心系列之面向对象",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/1f5ee0ac2f184b21833983ff1b221c19/1",
          title: "Python核心系列之模块化与异常",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/b3e9f1510bf64177bb2a92adf32724bb/1",
          title: "Python核心系列之文件操作",
          user: "Classroom",
          school: "华为云",
          tag: "Python",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/2ee75c1ed3464df4aaf5d61251d5253c/1",
          title: "Vue.js全接触系列之Vue基础",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/platform?classroomId=f24d21d4096d4b5f9bce8d114a516dd5",
          title: "Vue.js全接触系列之Vue项目与案例",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/18eb1ad55cf646ecadde3889766f1a01/1",
          title: "Vue.js全接触系列之Vue路由及源码分析",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        //
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/cc453ff943ef4b90aca35c709595ea20/1",
          title: "Vue.js全接触系列之Vue_vuex详解",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/124240b5b2d0494ca4ab8657ade88bae/1",
          title: "Node.js指南系列之Node简介",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/bddb29a7e8e24138bb0acac9d2262d37/1",
          title: "Node.js指南系列之Node NPM",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
        },
        {
          url:
            "https://classroom.devcloud.huaweicloud.com/joinclass/e1065b38b0f545e1b4015721a672b40b/1",
          title: "Node.js指南系列之Node文件操作",
          user: "Classroom",
          school: "华为云",
          tag: "前端",
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
