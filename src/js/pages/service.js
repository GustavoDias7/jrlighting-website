import * as vue from "vue/dist/vue.esm-bundler.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { mainMixin } from "../utils/mixins";
const { createApp } = vue;

const app = createApp({
  mixins: [mainMixin],
  delimiters: ["[[", "]]"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
  data() {
    return {
      product: service,
      other_services: other_services,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
    };
  },
  methods: {},
});

app.mount("#app");
