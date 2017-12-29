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
            <!-- <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu> -->
            <el-menu-item index="/expiration">
                <i class="el-icon-time"></i>
                <span slot="title">商品保质期</span>
            </el-menu-item>
            <el-menu-item index="/percent">
                <i class="el-icon-sold-out"></i>
                <span slot="title">商品销售数据   </span>
            </el-menu-item>
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

