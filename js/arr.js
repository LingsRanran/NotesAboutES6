/*
    数组  ES5新增的东西

        1，arr.forEach()

        2,arr.map()

        3,arr.filter()//过滤

        4,arr.some()

        5,arr.every()

            forEach/map/filter/some/every( 循环的回调函数，this指向谁  )

        6,arr.reduce()
*/

let arr = ['apple','banana','orange','pear'];

arr.forEach(function(val,index,array){
    //console.log(val,index,array);
});

//map() 做数据交互 映射
//正常情况下 需要配合return 返回一个新的数组  若没有 跟forEach一样
//平时用map 一定要有返回值
let jsonArr = [
    {title:'aaaa',read:100,hot:true},
    {title:'bbbb',read:100,hot:false},
    {title:'cccc',read:100,hot:true},
    {title:'dddd',read:100,hot:false}
];

let newJsonArr = jsonArr.map((item,index) => {
    let jsonArr2 = {};
    jsonArr2.t = item.title;
    jsonArr2.r = item.r;
    jsonArr2.h = item.hot;

    return jsonArr2;
});

console.log(newJsonArr);

//filter  回调函数返回true就留下来
let newJsonArr2 = jsonArr.filter(function(item){
    return item.hot;
});

console.log(newJsonArr2);//Array(2) [Object, Object]

//some()  类似查找 数组里面有一个元素符合条件 返回true  every 所有元素要符合条件 返回true
let a = arr.some(function(val){
    return val == 'apple';
});

console.log(a);

//reduce（从左往右） reduceRight  接收的参数((prev,cur,index,arr) => {})  reduceRight从右往左
let arr2 = [1,2,3,4,5,6,7,8,9,10];

let result = arr2.reduce((prev,cur,index,arr) => {
    return prev + cur;
});

console.log(result);


//ES2017 新增运算符 幂 **
console.log(5**2);//25

//ES6 for...of...循环
/*
    arr.keys()数组下标  arr.entries()数组某一项
*/
for (const item of arr) {
    console.log(item);
}

for (const index of arr.keys()) {
    console.log(index);
}

for (const [key,val] of arr.entries()) {
    console.log(key,val);
}

//Array.from() 把类数组(arguments,字符串)转成数组 ES6方法  ...

//Array.of() 把一组值转成数组

let arr3 = Array.of('app','sss','ssfa',false);
console.log(arr3);

//arr.find()找到的 第一个符合条件的元素 如果没有找到 返回undefined  findIndex()查找位置 没找到返回-1

let arr4 = [12,45,89,102,235,999];

let arr4Find = arr4.find((val) => {
    return val > 100;
});

console.log(arr4Find);

//arr.fill(填充的东西，开始位置，结束位置)


/*
    ES2016新增 arr.includes() 类似str.includes()
*/