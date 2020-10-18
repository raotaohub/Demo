<template>
  <!-- 本卡片组件一行显示4列 -->
  <div id="cl_card">
    <a :href="item.url" class="text-decoration-none" target="_blank" id="cl_card_item" v-for="(item, index) in newList" :key="index">
      <nav class="card_item_box">
        <div class="cit_box_top">
          <div class="card_bg" :style="{ backgroundPositionY: `${bpyStyle(index)}` + 'px' }"></div>
        </div>
        <div class="cit_box_bottom">
          <span class="cit_title">{{ item.title }}</span>
          <div class="cit_info row-vertical-center align-text-bottom">
            <i class="cit_info_userlogo mr-1"></i>
            <span class="cit_info_user mr-2">{{ item.user }}</span>
            <i class="cit_info_schlogo mr-1"></i>
            <span class="cit_info_school">{{ item.school }}</span>
            <div class="cit_info_time d-inline-block">
              <span class v-show="item.time !== ''">{{ item.time }}</span>
            </div>
          </div>
          <!-- <div class="cit_hr"></div>
          <div class="cit_state">
            <span>{{ item.state }}</span>
          </div> -->
          <div class="clearfix"></div>
        </div>
      </nav>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    newList: { type: Array, required: true },
    bpyStyle: { type: Function, required: false },
    backgroundPositionY: { type: Object, required: false },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
@import url("../style/cl_card");
.card_bg {
  width: 100%;
  height: 200px;
  background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/index-cloud.07a57744ef9e998461a5.png);
  border-radius: 12px 12px 0 0;
  box-sizing: border-box;
}
</style>