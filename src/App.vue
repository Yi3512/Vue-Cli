<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="btn">逆转世界</button>
  </div>
</template>

<script>
export default {
  naem:'App',
  data() {
    return {
      msg: 'Hello, world!',
    };
  },
  methods: {
    btn() {
      this.msg = this.msg.split('').reverse().join('');
    },
  },
};
</script>

<style></style>
