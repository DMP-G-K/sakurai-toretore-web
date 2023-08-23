<template>
  <div class="md:hidden">
    <carousel :items-to-show="1">
      <slide v-for="slide in 3" :key="slide">
        <img src="/svgs/test.jpg" />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
  <div class="hidden md:block">
    <div class="flex justify-between">
      <img class="parking-image rounded-xl" src="/images/toretore3.jpg" />
      <img class="parking-image rounded-xl" src="/images/toretore5.jpg" />
      <img class="parking-image rounded-xl" src="/images/toretore4.jpg" />
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  width: 100%;
}

.parking-image {
  width: 30%;
}
</style>
