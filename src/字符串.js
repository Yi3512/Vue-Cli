const url = 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#';
const process = (url) => {
    //获取？位置和#位置
  const index1 = url.indexOf('?'),
    index2 = url.indexOf('#'),
    //截取以?为起点#为终点的字符串,然后用&分隔
    params = url.slice(index1 + 1, index2).split('&');
    console.log(params);
    // pre 上一次调用curr的值，第一次调用为{}空对象 
    // curr 为params里索引为0的元素 'name=zhangsan'
  return params.reduce((pre, curr) => {
    //把curr里的'name=zhangsan' 以=分隔 ，分别放入key, value键值对
    const [key, value] = curr.split('=');
    console.log(key);
    console.log(value);
    //把
    pre[key] = value;
    console.log(value);
    console.log( pre[key]);
    return pre;
  }, {});
};

process(url);
