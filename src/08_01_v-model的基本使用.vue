<template>
  <div>
    <input type="text" v-model="val" />
    <!--
   实现v-model
   数据到视图
   视图到数据
   1. value  v-bind
   2. 输入事件 输入过程中 实时拿到dom input 里的value
   -->
    <br />
    <input type="text" v-bind:value="val1" @input="inputFn" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      val: '',
      val1: '',
    };
  },
  methods: {
    inputFn(e) {
      this.val1 = e.target.value;
    },
  },
};
</script>

<style scoped></style>
