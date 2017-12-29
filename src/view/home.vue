<template>
    <div class="home">
        <s-header></s-header>
        <s-slider></s-slider>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>


<script>
import sHeader from "../components/common/header.vue";
import sSlider from "../components/common/slider.vue";

export default {
  data() {
    return {};
  },
  components: {
    sHeader,
    sSlider
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.content {
  top: 50px;
  min-width: 1250px;
}
</style>


