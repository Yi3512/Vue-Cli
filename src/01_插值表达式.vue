
<template>
  <div>
    {{ msg }}
    <!-- Property or method "msg" is not defined -->
    <!-- template 里的变量是需要定义的 -->
    <h1>{{obj.name}}</h1>
     <h1>{{obj.age}}</h1>
     <h1>{{obj.age >= 18 ? '成年':'未成年'}}</h1>
  </div>
</template>

<script>
// 插值表达式
// 语法: {{ 表达式 }} 
// 作用可以把表达式的返回值 直接 插入到dom 标签中
export default {
  name: 'App',
  data () { // template 里的变量是需要 在data 函数里返回的对象里定义
    return { // 固定格式
      msg: 'Hello Vue',
      obj: {
        name: 'Vue',
        age: 16
      }
    }
  }
  
}
</script>
