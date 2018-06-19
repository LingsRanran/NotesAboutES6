//函数默认参数
function show(str1='Welcome',str2='Moscow'){
    console.log(`${str1} to ${str2}`);
};

show();//Welcome to Moscow


//函数中的let
function show2(a){
    //let a = 102;//Identifier 'a' has already been declared//与for中有区别 for(let i=1;i<5;i++){let i = 12;console.log(i);}//输出四遍12，不报错
    console.log(a);
};

show2(12);


//扩展运算符 rest运算符 ...
let arr = ['apple','banana','pear'];

console.log(arr);
console.log(...arr);//展开数组 [1,2,3,4,5] -> 1,2,3,4,5

function show3(...a){//reset 1,2,3,4,5 -> [1,2,3,4,5]
    console.log(a);
};

show3(1,2,3,4,5);

function sortArr(...a){
    return a.sort();
};

console.log(sortArr(50,3,999,4222,-20));

function show4(a,b,...c){//rest运算符 剩余运算符
    console.log(a,b,c);// c -> [9,10,11,12]
};

show4(7,8,9,10,11,12);

//箭头函数 => 
/*
    格式 (参数) => {
        //to do
        return
    }

    注意：
        1,this问题 定义函数所在的对象 不是运行时所在的对象
        2,箭头函数里面没有 arguments 用rest操作符 ‘...’
        3,箭头函数 不！能！ 作为 构造函数 
*/
let show5 = () => 1;
console.log(show5());

// let json = {
//     id:'Ranran',
//     show:function(){
//         console.log(this.id)//Ranran
//     }
// }



// let json = {
//     id:'Ranran',
//     show:function(){
//         setTimeout(function(){
//             console.log(this.id);//undefined
//         }, 2000);
//     }
// }

let json = {
    id:'Ranran',
    show:function(){
        setTimeout(()=>{
            console.log(this.id);//Ranran
        }, 2000);
    }
}

json.show();

//ES2017 参数最后能放逗号了