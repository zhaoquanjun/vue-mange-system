<template>
<div class="back-to-top" @click="backToTop" v-show="showReturnToTop" @mouseenter="show" @mouseleave="hide">
    <i class="el-icon-caret-top"></i>
    <span class="tips" :class="[bttOption.iPos]" :style="{color:bttOption.textColor}" v-show="showTooltips">{{bttOption.text}}</span>
</div>
</template>
 
<script>
import Bus from "../../bus";
export default {
  name: "back-to-top",
  props: {
    text: {
      // 文本提示
      type: String,
      default: "返回顶部"
    },
    textColor: {
      // 文本颜色
      type: String,
      default: "deepskyblue"
    },
    iPos: {
      // 文本位置
      type: String,
      default: "right"
    },
    pageY: {
      // 默认在哪个视图显示返回按钮
      type: Number,
      default: 300
    },
    transitionName: {
      // 过渡动画名称
      type: String,
      default: "linear"
    },
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      showTooltips: false,
      showReturnToTop: false,
      scrollDistance: 0
    };
  },
  computed: {
    bttOption() {
      return {
        text: this.text,
        textColor: this.textColor,
        iPos: this.iPos
      };
    }
  },
  methods: {
    // 显示隐藏提示文字
    show() {
      return (this.showTooltips = true);
    },
    // 隐藏显示的文字
    hide() {
      return (this.showTooltips = false);
    },
    // 回到顶部操作
    backToTop() {
      let clientDis =
        document.documentElement.clientHeight || document.body.clientHei;
      if (this.scrollDistance > clientDis) {
        Bus.$emit("toTop", 0);
      }
    },
    // 回到顶部按钮现隐
    handleShow(data) {
      data > this.pageY
        ? (this.showReturnToTop = true)
        : (this.showReturnToTop = false);
    }
  },
  watch: {
    // 监听scroll距离
    distance: function(newDistance) {
      this.handleShow(newDistance);
      this.scrollDistance = newDistance;
      return false;
    }
  }
};
</script>
 
<style scoped>
.back-to-top {
  background-color: #fff;
  position: fixed;
  right: 80px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
  transition: all 0.3s linear;
}
.back-to-top .el-icon-caret-top {
  color: #409eff;
  display: block;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
.tips {
  display: inline-block;
  position: absolute;
  word-break: normal;
  white-space: nowrap;
  width: auto;
  font-size: 12px;
  color: #fff;
  z-index: -1;
}
.left {
  right: 0;
  top: 50%;
  margin-right: 50px;
  transform: translateY(-50%);
}
.right {
  left: 0;
  top: 50%;
  margin-left: 50px;
  transform: translateY(-50%);
}
.bottom {
  bottom: 0;
  margin-top: 50px;
}
.top {
  top: 0;
  margin-bottom: 50px;
}
</style>

