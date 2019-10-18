"use strict";
//类类型接口:对类的约束 和 抽象类有点相似
var Dog3 = /** @class */ (function () {
    function Dog3(name) {
        this.name = name;
    }
    Dog3.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Dog3;
}());
var e = new Dog3('小黑');
e.eat();
