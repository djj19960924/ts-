"use strict";
//public
//protected //只有类与继承类才能访问
//private   //只有当前类才能访问
var Xiao = /** @class */ (function () {
    function Xiao(sex, name, age) {
        this.sex = sex;
        this.age = age;
        this.name = name;
    }
    Xiao.prototype.sayHello = function () {
        console.log('hello');
    };
    Xiao.prototype.sayLove = function () {
        console.log('love');
    };
    return Xiao;
}());
var jie = new Xiao('rebao', 'reba', 18);
console.log(jie.name);
jie.sayHello();
//readonly 只读修饰符
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
