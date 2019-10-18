//类是对象具体事物的一个抽象,对象是类的具体表现

class XiaoJiejie{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('xiaohao');
    };
}
let jiejie:XiaoJiejie = new XiaoJiejie('fbb',24);

console.log(jiejie);
jiejie.say();