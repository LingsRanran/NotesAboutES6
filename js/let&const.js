/*
    let 特点：
        1，在同一个作用域中不能重复定义。
        2，没有预解析，在let定义之前 引用会报错
        3，for循环 （）里是父级作用域，里面又一个

    建议： 用let代替var
*/

function fn1(){
    let a = 12;
    //let a = 22;//报错  Identifier 'a' has already been declared
};

//console.log(a);//报错; a is not defined

fn1();

function fn2(){
    //console.log(a);// a is not defined
    let a = 12;
};

fn2();

function fn3(){
    for(let i = 0;i < 10; i++){
        let i = 12;
        console.log(i);//不报错 输出10次12
    };
};

fn3();


/*
    const 与let特点相似 
        注意：
            1，定义时必须初始化值 不能先定义后赋值 const i；i = 12;//报错
            2，定义后不可修改
*/

function fn4(){
    const num = 10;
    //num = 13;//报错；Assignment to constant variable.
    console.log(num);
};

fn4();

//const定义对象可以更改 对象的特性
function fn5(){
    const obj = {
        title:'Ranran',
        count:100
    };

    obj.name = 'news';

    console.log(obj);//Object {title: "Ranran", count: 100, name: "news"}
};

fn5();

//定义不可修改的对象
function fn6(){
    const obj = {
        title:'Ranran',
        count:100
    };

    Object.freeze(obj);

    obj.name = 'news';

    console.log(obj);//Object {title: "Ranran", count: 100}
};

fn6();