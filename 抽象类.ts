//typescript中的抽象类：它是提供其他类继承的基类，不能直接实例化

//用abstract关键字定义抽象类和抽象方法,抽象类中的抽象方法不包含具体实现并且必须在派生类中实现

//abstract抽象方法只能放在抽象类里面

//抽象类和抽象方法用来定义标准,标准：Animal这个类要求它的子类必须包含eat

abstract class Animal1{

    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract eat():any;
}

// var a = new Animal1(); /* 错误方法 */

class Dog1 extends Animal1{
    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:string){
        super(name);
    }
    eat(){
        console.log(this.name+"吃粮食")
    }
}
var d = new Dog1('小花花');
d.eat();