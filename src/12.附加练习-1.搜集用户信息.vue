<template>
  <div>
    <span>选择所在地区：</span>
    <input type="radio" name="area" v-model="area" :value="0" id="">中国大陆
    <input type="radio" name="area" v-model="area" :value="1" id="">中国香港
    <br>
    <span>手机号码:</span>
    <input type="number" name="phone" v-model="phone" id="">
    <br>
    <span>密码:</span>
    <input type="password" name="password" v-model="password"  id="">
    <br>
    <span>年龄:</span>
    <input type="number" name="age" id="" v-model="age">
    <br>
    <span>爱好:</span>
    <input type="checkbox" name="hoddy" v-model="hoddy" value="看书" id="">看书
    <input type="checkbox" name="hoddy" v-model="hoddy" value="敲代码" id="">敲代码
    <input type="checkbox" name="hoddy" v-model="hoddy" value="游戏" id="">游戏
    <input type="checkbox" name="hoddy" v-model="hoddy" value="晒太阳" id="">晒太阳
    <br>
    <input type="checkbox" name="isgrow" v-model="isgrow" id="">记住密码
    <div>=======================================</div>
    <div>
      我来自：{{{0:'中国大陆',1:'中国香港'}[area]}}
      <br>
      手机号码是：{{phone}}
      <br>
      年龄是：{{age}}
      <br>
      密码是：{{password}}
      <br>
      爱好是：{{hoddy.join(',')}}
      <br>
      是否记住密码：{{isgrow ? '是' : '否'}}
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      area:0,
      phone:'',
      age:'',
      password:'',
      hoddy:['晒太阳','游戏'],
      isgrow:'',
    }
  },
  methods:{
  }
};
</script>

<style></style>
