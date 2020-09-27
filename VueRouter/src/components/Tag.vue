<template>
  <div>
    <div class="d-inline-block" v-for="(item, index) in classIfy" :key="index">
      <button @click="filterList(`${item}`)" class="title_list_btn text-secondary btn section_btn" >
        {{ item }}
      </button>
      <slot></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    classIfy:{type:Array,required: true},
    filterList:{type:Function,required: true}
  }
};
</script>

<style>
@import url("../style/cl_card");
</style>