//类类型接口:对类的约束 和 抽象类有点相似

interface Animal2{
    name:string;
    eat(str:string):void;
}

class Dog3 implements Animal2{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(this.name+'吃粮食')
    }
}
var e = new Dog3('小黑')
e.eat()

