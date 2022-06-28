<template>
  <div>
    <input type="text" @keydown.enter="enter">
    <hr>
    <input type="text" @keydown.esc="esc">
  </div>
</template>

<script>
export default {
    methods:{
        enter(){
            console.log('回车触发');
        },
        esc(){
            console.log('esc触发');
        }
    }
}
</script>

<style>

</style>