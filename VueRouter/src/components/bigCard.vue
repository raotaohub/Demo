<template>
  <div id="#cl_card">
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
          <div class="cit_content">{{ item.content }}</div>
          <div class="cit_hr"></div>
          <div class="cit_state">
            <span>{{ item.state }}</span>
          </div>
          <div class="clearfix"></div>
        </div>
      </nav>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cardItemList: { type: Array, required: true },

    backgroundPositionY: { type: Object, required: false },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import url(../style/big_card.css);

</style>