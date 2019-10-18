"use strict";
//类是对象具体事物的一个抽象,对象是类的具体表现
var XiaoJiejie = /** @class */ (function () {
    function XiaoJiejie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJiejie.prototype.say = function () {
        console.log('xiaohao');
    };
    ;
    return XiaoJiejie;
}());
var jiejie = new XiaoJiejie('fbb', 24);
console.log(jiejie);
jiejie.say();
