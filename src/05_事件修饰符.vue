<template>
  <div @click="fath">
    <button @click.stop="btn">stop阻止冒泡</button>
    <a href="http://www.baidu.com" @click.prevent="btn">prevent阻止冒泡</a>
    <button @click.once="btn">once程序运行期间, 只触发一次事件处理函数</button>
  </div>
</template>

<script>
export default {
  methods: {
    fath() {
      console.log('触发冒泡了');
    },
    btn() {
      console.log('成功');
    },
  },
};
</script>

<style></style>
