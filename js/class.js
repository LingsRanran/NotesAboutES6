class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        return `名字是：${this.name}`
    }
    showAge(){
        return `年龄是：${this.age}`
    }
};

let p1 = new Person('Ranran',18);

class Student extends Person{
    constructor(name,age,skill){
        super(name,age);
        this.skill = skill;
    }
    showSkill(){
        return `技能是：${this.skill}`
    }
};

let p2 = new Student('wyl',18,'chi');

console.log(p1);
console.log(p2.showSkill());
