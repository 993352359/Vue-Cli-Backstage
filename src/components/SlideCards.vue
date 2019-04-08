<template>
    <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="item in coverImg" :key="item">
        <img style="width:100%;height:100%;border-radius:8px;" :src="item">
        </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
  name: "Cards",
  data() {
    return {
      coverImg: [
        "./../../static/img/封面轮播图/1.jpg",
        "./../../static/img/封面轮播图/2.jpg",
        "./../../static/img/封面轮播图/3.jpg"
      ]
    };
  }
};
</script>