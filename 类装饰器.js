"use strict";
/**
 * 装饰器:装饰器是一种特殊类型的声明,它能够被附加到类声明,方法,属性或参数,可以修改类的行为
 *
 * 通俗的讲装饰器就是一个方法,可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能
 *
 * 常见的装饰器有:类装饰器、属性装饰器、方法装饰器、参数装饰器
 *
 * 装饰器的写法:普通装饰器(无法传参)、装饰器工厂(可传参)
 *
 * 装饰器是过去几年中js最大的成就之一,已是Es7的标准特性之一
 *
*/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 1、类装饰器:类装饰器在类声明之前声明(紧靠着类声明),
 *    类装饰器应用于类构造函数,可以用于监视,修改或替换类定义。
 *    传入一个参数
 * */
//1.1类装饰器(普通装饰器),可以扩展类的属性、方法(动态扩展)
function logClass(params) {
    console.log(params);
    //params 就是当前类
    params.prototype.apiUrl = '动态扩展的属性';
    params.prototype.run = function () {
        console.log('我是一个run方法');
    };
}
//用装饰器来装饰这个类
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () { };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
//1.2类装饰器:装饰器工厂(可传参)
function logClass1(params) {
    return function (target) {
        console.log(target);
        console.log(params);
        target.prototype.apiUrl = params;
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () { };
    HttpClient1 = __decorate([
        logClass1('http://www.itying.com')
    ], HttpClient1);
    return HttpClient1;
}());
var http1 = new HttpClient1();
console.log(http1.apiUrl);
/**
 * 1、类装饰器
 *      下面是一个重载函数的例子
 *      类装饰器表达式会在运行时当做函数被调用,类的构造函数作为其唯一的参数
 *      如果类装饰其返回一个值,他会使用提供的构造函数来替换类的声明
*/
function logClass2(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = "我是修改后的值";
            return _this;
        }
        class_1.prototype.getData = function () {
            this.apiUrl = this.apiUrl + '----';
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
        this.apiUrl = "我是构造函数里面的apiUrl";
    }
    HttpClient2.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    HttpClient2 = __decorate([
        logClass2
    ], HttpClient2);
    return HttpClient2;
}());
var http3 = new HttpClient2();
http3.getData();
