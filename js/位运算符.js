let a = (10010);

let b = parseInt(a,2);

console.log(b);


let c = 25;

//NOT运算符
let d = ~c;
console.log(d);

//AND运算符 两个数都是1 则得1 &
let e = b & c;

console.log(b.toString(2));
console.log(c.toString(2));

/*
    1 0 0 1 0
    1 1 0 0 1
    ----------
    1 0 0 0 0  => 16

*/
console.log(e);

//OR运算符  有一个数是1 则得1 |
/*
    1 0 0 1 0
    1 1 0 0 1   11010 11011
    ----------
    1 1 0 1 1  => 27

*/
let f = b | c;

console.log(f);

//XOR运算符 只有一个数为1 才得1 ^
/*
    1 0 0 1 0
    1 1 0 0 1   
    ----------
    0 1 0 1 1  => 11   2**0+2**1+2**3=11

*/
let g = b ^ c;
console.log(g);

//左移运算  <<
/*
    10010 => 10010 00000 =>  2**6+2**9=576
*/
let h = b << 5;
console.log(h);


//有符号右移运算  >>
/*
     10010 => 1001  =>  2**0+2**3=9
*/

let i = b >> 1;
console.log(i);

//无符号右移运算 >>>
/*
    对于正数 与>> 一样
    对于负数 负数则被作为正数来处理。
    需要把这个数字转换成无符号的等价形式（尽管该数字本身还是有符号的）
    let iUnsigned64 = -64 >>> 0;
    然后，用 Number 类型的 toString() 获取它的真正的位表示，采用的基为 2：
*/
