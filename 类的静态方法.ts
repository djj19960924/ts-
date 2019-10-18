//静态属性 静态方法
// function Person(){
//     //实例方法
//     this.run1 = function(){
//     }
// }
// Person.name = "哈哈哈"; //静态属性
// Person.run2 = function(){ //静态方法
// }
// var p = new Person();
// Person.run2() //静态方法的调用

class Per{
    public name:string;
    public age:number = 20;

    static sex = "男";
    constructor(name:string){
        this.name = name;
    }
    run(){ /*实例方法*/
        console.log(`${this.name}在运动`)
    }
    work(){
        console.log(`${this.name}在工作`)
    }
    static print(){ /*静态方法 里面没法直接调用类里面的属性,需要把改为静态属性*/
        console.log("print方法"+this.sex)       
    }
}
Per.print()

//多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
//多态属于继承

class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){//具体吃什么不知道  具体吃什么?继承它的子类去实现
        console.log('吃的方法')
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        return this.name+'吃肉'
    }
}
class Cat extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        return this.name+'老鼠'
    }
}
