<template>
    <div class="header">
        <div class="left-logo">
            <span class="sLogo"><img src="/static/img/logo.png" alt=""></span><span class="sName">后台管理系统</span>
        </div>
        <el-dropdown class="user-info"  placement="bottom" @command="handleCommand">
            <span class="el-dropdown-link">
                <span class="user-avator"><img src="/static/img/avator.png" alt=""></span>
                <span class="wel-word">Carlton，欢迎使用</span>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command='a'>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-select v-model="name" placeholder="请选择您要操作得系统" class="system-sel">
            <el-option v-for="item in systems" :key="item.id" :label="item.label"
            :value="item.value"></el-option>
        </el-select>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      systems: [
        { value: "保质期预警系统", label: "保质期预警系统", id: "exp_system" },
        { value: "拼团系统", label: "拼团系统", id: "pt_system" }
      ],
      name: ""
    };
  },
  methods: {
    handleCommand(command) {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
}
.left-logo {
  height: 100%;
  float: left;
}
.sLogo {
  display: block;
  float: left;
  width: 60px;
  height: 40px;
  padding-top: 5px;
  padding-left: 30px;
}
.sLogo img {
  width: 100%;
  height: 100%;
}
.sName {
  display: block;
  float: left;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding-left: 15px;
  font-weight: 600;
  color: #fff;
}
.user-info {
  float: left;
}
.user-avator,
.wel-word {
  display: block;
  float: left;
  color: #fff;
}
.user-avator {
  margin-left: 50px;
  width: 30px;
  height: 30px;
  padding: 10px;
}
.user-avator img {
  width: 100%;
  height: 100%;
}
.wel-word {
  height: 50px;
  line-height: 50px;
  font-size: 13px;
}
.system-sel {
  float: right;
  padding: 5px;
  padding-right: 30px;
}
.el-drop-item {
  width: 80px;
}
</style>
