"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Per = /** @class */ (function () {
    function Per(name) {
        this.age = 20;
        this.name = name;
    }
    Per.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
    Per.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    Per.print = function () {
        console.log("print方法" + this.sex);
    };
    Per.sex = "男";
    return Per;
}());
Per.print();
//多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
//多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃肉';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '老鼠';
    };
    return Cat;
}(Animal));
