<template>
<!-- 本卡片组件一行显示4列 -->
    <section>
      <nav id="cloudclassroom">
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
</template>

<script>
export default {
  classIfy:[],
  newList:[],
  data() {
    return {

    };
  },
  methods: {},
};
</script>

<style>
</style>