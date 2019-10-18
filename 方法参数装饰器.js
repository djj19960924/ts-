"use strict";
/**
 * 4、方法参数装饰器
 *      参数装饰器表达式会在运行时当做函数被调用,可以使用参数装饰器为类的原型增加一些元素数据,传入下列3个参数:
 *          1、对于静态成员来说类的构造函数,对于实例成员是类的原型对象
 *          2、参数的名字
 *          3、参数在函数参数列表中的牵引
 *
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParams(params) {
    return function (target, paramsName, paramsIndex) {
        console.log(target);
        console.log(paramsName);
        console.log(paramsIndex);
    };
}
var HttpClient10 = /** @class */ (function () {
    function HttpClient10() {
    }
    HttpClient10.prototype.getData = function (uuid) {
        console.log(uuid);
    };
    __decorate([
        __param(0, logParams('xxxx'))
    ], HttpClient10.prototype, "getData", null);
    return HttpClient10;
}());
var http10 = new HttpClient10();
http10.getData(1234);
