<template>
  <div id="Login">
    <el-row>
      <ElCol :span="8" :offset="8">
        <h3>测评基地测控管理中心</h3>
      </ElCol>
    </el-row>
    <el-row>
      <ElCol :span="8" :offset="8">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号：">
            <el-input v-model="form.name" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="form.pwd" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>忘记密码</el-button>
          </el-form-item>
        </el-form>
      </ElCol>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("Home");
    }
  }
};
</script>

<style>
  h3 {
    text-align: center;
  }
</style>
