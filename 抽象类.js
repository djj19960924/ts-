"use strict";
//typescript中的抽象类：它是提供其他类继承的基类，不能直接实例化
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
//用abstract关键字定义抽象类和抽象方法,抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//abstract抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准,标准：Animal这个类要求它的子类必须包含eat
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
// var a = new Animal1(); /* 错误方法 */
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    //抽象类的子类必须实现抽象类里面的抽象方法
    function Dog1(name) {
        return _super.call(this, name) || this;
    }
    Dog1.prototype.eat = function () {
        console.log(this.name + "吃粮食");
    };
    return Dog1;
}(Animal1));
var d = new Dog1('小花花');
d.eat();
