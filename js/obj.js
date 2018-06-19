//对象简介语法

let name = 'Ranran';
let age = 23;

let obj = {
    //name:name,
    name,
    //age:age
    age,

    /* showName:function(){
        return this.name;
    } */

    //不能用箭头函数
    showName(){
        return this.name;
    }

};

console.log(obj);//Object {name: "Ranran", age: 23}
console.log(obj.showName());//Ranran

//Object.is() 比较两个值是否相等  对NaN +0 -0 有了处理
console.log(NaN == NaN);//false
console.log(Number.isNaN(NaN));//true
console.log(Object.is(NaN,NaN));//true

console.log(+0 == -0);//ture
console.log(Object.is(+0,-0));//false

//Object.assign() 用来合并对象  （目标对象，source1，source2...）//后面的覆盖前面的
/*
    用途：
        1，复制对象
        2，合并参数
*/
let obj2 = {
    name:'obj2里的name',
    type:'GET'
};

let obj3 = {
    data:'obj3里的data'
};

let newObj = Object.assign({},obj,obj2,obj3);

console.log(newObj);

/*
ES2017 引入的
    Object.keys()
    Object.entries()
    Object.values()
*/

let {keys,values,entries} = Object;

for (const key of keys(newObj)) {
    console.log(key);
}

for (const value of values(newObj)) {
    console.log(value);
}

for (const item of entries(newObj)) {
    console.log(item);
}

for (const [key,val] of entries(newObj)) {
    console.log(key,val);
}

/*
    对象扩展运算符 ...
        ES2018引入
*/

/* let {a,b,c} = {a:1,b:2,c:3,d:4};

console.log(a,b,c); //1 2 3*/
let {a,b,...c} = {a:1,b:2,c:3,d:4};

console.log(a,b,c);//1 2 Object {c: 3, d: 4}

//复制对象
let newObj2 = {...newObj};

delete newObj2.name;

console.log(newObj2);
console.log(newObj);