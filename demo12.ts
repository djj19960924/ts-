//public
//protected //只有类与继承类才能访问
//private   //只有当前类才能访问

class Xiao{
    public name:string;
    protected sex:string;
    private age:number;
    public constructor(sex:string,name:string,age:number){
        this.sex = sex;
        this.age = age;
        this.name = name;
    }
    public sayHello(){
        console.log('hello');
    }
    protected sayLove(){
        console.log('love');
    }
}

var jie:Xiao = new Xiao('rebao','reba',18);
console.log(jie.name);
jie.sayHello();

//readonly 只读修饰符

class Man{
    public readonly sex:string = '男';
}
var man:Man = new Man();
