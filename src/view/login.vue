<template>
    <div class="login">
        <el-form ref="form" label-width="80px" class="login-form">
            <div class="login-logo">
                <img src="/static/img/logo.png" alt="">
            </div>
            <el-form-item label="账号">
                <el-input v-model="form.username" type="text" size="small"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password" size="small"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button style="padding-left:145px;padding-right:145px;" type="primary" @keyup.enter.native="onSubmit" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "Carlton",
        password: "5201314"
      }
    };
  },
  created() {
    document.onkeyup = e => {
      if (window.event.keyCode == 13) {
        this.onSubmit();
      }
    };
  },
  methods: {
    onSubmit() {
      let username = this.form.username;
      let password = this.form.password;
      if (username && password) {
        const data = { username: username, password: password };
        this.loginIn(data);
      } else {
        this.$message("请完善您得账号和密码！");
      }
    },
    loginIn(data) {
      console.log(data.username, this.form.username);
      if (
        data.username == this.form.username &&
        data.password == this.form.password
      ) {
        this.$message("登录成功");
        this.$router.push("/home");
      }
    }
  }
};
</script>


<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: #e1e1e1;
}
.login-logo {
  width: 120px;
  height: 76px;
  padding-left: 170px;
  padding-bottom: 30px;
}
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -225px;
  margin-top: -200px;
  width: 400px;
  height: 400px;
  padding-top: 25px;
  padding-right: 50px;
}
</style>


