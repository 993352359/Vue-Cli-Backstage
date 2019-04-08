<template>
  <div id="main">
    <el-row style="margin:20px;">
      <ElCol :span="24">
        <!-- 轮播图 -->
        <Cards></Cards>
      </ElCol>
    </el-row>
    <el-row>
      <ElCol v-for="(value,key) in menuData" :key="key" :span="6">
        <div style="text-align:center">
          <img :src="value">
          <br/>
          <label>{{key}}</label>
        </div>
      </ElCol>
    </el-row>
    <el-row id="tab" >
      <ElCol :span="8" class="tab">
        <img src="./../../static/img/选项卡图片/1.png" >
      </ElCol>
      <ElCol :span="8"  class="tab">
        <img src="./../../static/img/选项卡图片/2.png" >
      </ElCol>
      <ElCol :span="8">
        <ElRow>
          <ElCol :span="24">
            <img src="./../../static/img/选项卡图片/3.png" >
          </ElCol>
        </ElRow>
        <ElRow>
          <ElCol :span="24">
            <img src="./../../static/img/选项卡图片/4.png" >
          </ElCol>
        </ElRow>
      </ElCol>
    </el-row>
  </div>
</template>

<script>
import Cards from '@/components/SlideCards.vue'

export default {
  name: "Home",
  components:{
    Cards
  },
  data() {
    return {
      menuData:{
        机构介绍:"./../../static/img/菜单选项图/1.png",
        机构动态:"./../../static/img/菜单选项图/2.png",
        名师风采:"./../../static/img/菜单选项图/3.png",
        明星学员:"./../../static/img/菜单选项图/4.png"
      }
    };
  },
  methods: {
    onSubmit() {
      this.$axios.post("Token", this.form).then(response => {
        console.log(response);
      });
      // this.$router.push("Home");
    }
  }
};
</script>
<style>

  #tab{
    height: 500px;
    text-align:center;
    margin:5px 10px;
  }

  #tab div img {
    width:100%;
    height:100px;
  }

  #tab div div div img{
    width:100%;
    height:50px;
  }

</style>
