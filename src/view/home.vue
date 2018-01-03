<template>
    <div class="home">
        <s-header></s-header>
        <s-slider></s-slider>
        <div class="content" @scroll="handleScrollDis" ref="scrollContent">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <s-back-top :distance="scrollDis"></s-back-top>
    </div>
</template>


<script>
import sHeader from "../components/common/header.vue";
import sSlider from "../components/common/slider.vue";
import sBackTop from "../components/common/backTop";
import Bus from "../bus";

export default {
  data() {
    return {
      scrollDis: 0
    };
  },
  components: {
    sHeader,
    sSlider,
    sBackTop
  },
  mounted() {
    Bus.$on("toTop", msg => {
      this.$refs.scrollContent.scrollTop = 0;
    });
  },
  methods: {
    // 计算页面滚动距离
    handleScrollDis() {
      let content = this.$refs.scrollContent;
      this.scrollDis = content.scrollTop;
    }
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
.content {
  top: 50px;
  min-width: 1250px;
}
</style>


