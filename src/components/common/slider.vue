<template>
    <el-col :span="12" class="slider">
        <h1>MENU</h1>
        <el-menu
        default-active="/expiration"
        mode="vertical"
        router
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item index="/expiration">
                <i class="el-icon-time"></i>
                <span slot="title">商品保质期</span>
            </el-menu-item>
            <el-menu-item index="/percent">
                <i class="el-icon-sold-out"></i>
                <span slot="title">商品销售数据</span>
            </el-menu-item>
            <el-menu-item index="/news">
                <i class="el-icon-news"></i>
                <span slot="title">公司新事件</span>
            </el-menu-item>
            <el-submenu index="noInfo">
                <template slot="title">
                <i class="el-icon-more"></i>
                <span>我的MORE</span>
                </template>
                <el-menu-item-group>
                <template slot="title">个人信息</template>
                <el-menu-item index="/myOwn">基本资料</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="公司信息">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>     
  </el-col>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.slider {
  width: 250px;
  height: 100%;
  /* border-right: solid 1px #e6e6e6;*/
  background: #545c64;
}
h1 {
  color: #fff;
  padding: 10%;
  border-bottom: 1px solid #ccc;
}
.el-menu-vertical-demo {
  width: 250px;
}
</style>

