<template>
    <div class="backTop" @click="handleBackTop">
        <i class="el-icon-caret-top"></i>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleBackTop() {}
  }
};
</script>

<style scoped>
.backTop {
  background-color: #fff;
  position: fixed;
  right: 80px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
}
.backTop .el-icon-caret-top {
  color: #409eff;
  display: block;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
</style>
