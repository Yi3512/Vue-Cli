<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="./assets/01.jpg"
        alt=""
        @click="clickFn(1, $event)"
        @mouseenter="mouseenterFn(1)"
      />
      <img
        src="./assets/02.jpg"
        alt=""
        @click="clickFn(2, $event)"
        @mouseenter="mouseenterFn(2)"
      />
      <img
        src="./assets/03.jpg"
        alt=""
        @click="clickFn(3, $event)"
        @mouseenter="mouseenterFn(3)"
      />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="imgUrl" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img01 from './assets/01.jpg';
import img02 from './assets/02.jpg';
import img03 from './assets/03.jpg';
export default {
  name: 'App',
  data() {
    return {
      imgUrl: img01,
    };
  },
  methods: {
    mouseenterFn(val) {
      this.imgUrl = { 1: img01, 2: img02, 3: img03 }[val];
    },
    clickFn(num, e) {
      alert(`第${num}张图${e.target.src}`);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
