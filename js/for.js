let countOfSAll = 5;//空格的总数
const circle = 'O';//常量 圆圈就是字符O
const space = ' ';//常量 空格就是‘ ’

for (let i = 5; i < 11; i++) {
    let str = '';//定义一个空字符串用来接收想要输出的circle和space
    let countOfS = 1;//计数 space的数量

    for(let j = 0;j <= i;j++){
        if(countOfS <= countOfSAll){
            str += (space + space);
            countOfS++;
        }else{
            str += (circle + space);
        }
    }
    countOfSAll--;//每循环一次 圆圈前打的空格少一个 5 4 3 2 1 0

    //复位 
    countOfS = 1;

    console.log(str);
}