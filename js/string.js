/*
    语法： ``(反引号) 可以随意换行  省去了连接字符串的麻烦
*/
let json = [
    {
        name:'Ranran',
        age:18,
        habbit:'movie'
    }
];

/*let str = ` 我是${json[0].name}，
            我${json[0].age}了，我喜
            欢
            ${json[0].habbit}`;*/
let str = `我是${json[0].name}，我${json[0].age}了，我喜欢${json[0].habbit}`;

console.log(str);//我是Ranran，我18了，我喜欢movie

//字符串查找 includes
let str1 = 'Ranran';

console.log(str.includes(str1));//true

//startsWith 是否以目标字符串开头 对应的 endsWith
let str2 = '我是Ranran';

console.log(str.startsWith(str2));//ture

//重复字符串 repeat (重复的次数)

console.log(str2.repeat(3));//我是Ranran我是Ranran我是Ranran

//填充字符串 padStart 对应的padEnd （填充后的字符串长度，要填充的字符串）
let str3 = str2.padStart(str2.length+str1.length,str1);
console.log(str3);//Ranran我是Ranran
