<template>
  <section class="carousel-index">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <router-link :to="item.path">
          <img :src="item.img" />
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

SwiperCore.use([Autoplay, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "carrouselIndex",
  data() {
    return {
      banners: [
        {
          path: "/menu",
          img: require("@/assets/jpg/main_02_big.jpg"),
        },
        {
          path: "/account",
          img: require("@/assets/jpg/main_01_big.jpg"),
        },
      ],
      swiperOptions: {
        Navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        Directive: "horizontal",
        loop: true,
        speed: 800,
        autoplay: {
          delay: 3600,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // Some Swiper option/callback...
      },
    };
  },
};
</script>

<style>
@import "swiper/swiper-bundle.css";
.carousel-index {
  width: 100%;
  height: 100%;
  margin-top: -48px;
}
</style>