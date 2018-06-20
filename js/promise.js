/*解决异步回调问题
    传统方式：
        大部分用回调函数，事件驱动

*/
let a = 20;

let promise = new Promise(function(resolve,reject){
    //resolve 成功时调用
    //reject  失败时调用
    if (a == 10) {
        resolve('成功');
    } else {
        reject('失败');
    }
});

//promise.then(success,fail);  then的返回值还是promise
promise.then(res=>{
    console.log(res);
},err=>{
    console.log(err);
});

/* promise.then(function(res){
    console.log(res);
},function(err){
    console.log(err);
}); */

promise.catch(err=>{//then()的第二个参数
    console.log(err);
});

/*
    Promise.resolve('aa');将现有的对象转为promise对象 且是resolve状态
        等价 new Promise(resolve => {resolve('aa')});
    Promise.reject('aa');将现有的对象转为promise对象 且是reject状态
        等价 new Promise(reject => {resolve('aa')});
*/

/*
    Promise.all([p1,p2,p3]) 把promise打包，扔到一个数组里面，打包完还是Promise对象
        必须确保 所有的Promise对象都是resolve状态 
    Promise.race([p1,p2,p3])  只要有一个成功就返回
*/
let status = 1;

let userLogin = (resolve,reject) => {
    setTimeout(() => {
        if(status == 1){
            resolve({data:'用户登录成功',msg:'bbbbbbbbbbb',token:'sadsafsafff'});
        }else{
            reject('用户登陆失败.');
        }
    }, 2000);
};

let getUserInfo = (resolve,reject) => {
    setTimeout(() => {
        if(status == 1){
            resolve({data:'获取用户信息成功',msg:'ccccccccccc',token:'sadsafsafff'});
        }else{
            reject('获取用户信息失败.');
        }
    }, 2000);
};

new Promise(userLogin).then(res => {
    console.log('用户登陆成功');
    return new Promise(getUserInfo)
}).then(res => {
    console.log(res);
});