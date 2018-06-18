//两边要格式对应 可以取别名
let obj = {name:'Ranran',age:23,habbit:'movie'};

let {name ,age ,habbit:hab} = obj;

//console.log(name,age,habbit)//habbit is not defined;
console.log(name,age,hab)//Ranran 23 movie

let arr = ['apple','banana','orange'];

let [a,b,c] = arr;

console.log(a,b,c);

//可以给默认值

let arr1 = ['apple','banana'];

let [d,e,f='没找到对应值'] = arr1;

console.log(d,e,f);

//undefined
let arr2 = ['apple','banana',undefined];

let [h,i,j='没找到对应值'] = arr2;

console.log(h,i,j);//apple banana 没找到对应值

//null
let arr3 = ['apple','banana',null];

let [k,l,m='没找到对应值'] = arr3;

console.log(k,l,m);//apple banana null