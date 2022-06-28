//reduce()
//方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减
//最终计算为一个值。

/* array.reduce (数组名.reduce方法)( 
    function( total（必须初始值或返回值）,
         currentValue（必须当前元素）,
          currentIndex（可选 当前元素的索引）, 
          arr（可选 当前元素所属的数组对象） ), 
           initialValue（可选 传个函数的初始值） )
 */
let arr = [{ a: 100 }, { a: 20 }, { a: -10 }];
let sum = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue.a,
  0
);
console.log(sum);
