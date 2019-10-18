"use strict";
/**
 * 3、方法装饰器
 *      它会应用到方法的属性描述上,可以用来监视,修改或者替换方法定义。
 *
 *      方法装饰器会在运行时传入下列3个参数:
 *          1、对于静态成员来说是类的构造函数,对于实例成员是类的原型对象
 *          2、成员的方法名字
 *          3、成员的属性描述符
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//方法装饰器一
function get(params) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.apiUrl = 'xxx';
        target.run = function () {
            console.log('run');
        };
    };
}
var HttpClient8 = /** @class */ (function () {
    function HttpClient8() {
    }
    HttpClient8.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        get('http://www.baidu.com')
    ], HttpClient8.prototype, "getData", null);
    return HttpClient8;
}());
var http = new HttpClient8();
console.log(http.apiUrl);
http.run();
//方法装饰器二
function get1(params) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc.value);
        //修改装饰器的方法 把装饰器方法里面传入的所有参数改为string类型
        //1、保存当前的方法
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            //修改方法（对象冒充）
            oMethod.apply(this, args);
        };
    };
}
var HttpClient9 = /** @class */ (function () {
    function HttpClient9() {
    }
    HttpClient9.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log('我是getData里面的方法');
    };
    __decorate([
        get1('http://www.baidu.com')
    ], HttpClient9.prototype, "getData", null);
    return HttpClient9;
}());
var http9 = new HttpClient9();
http9.getData(123, 'xxx');
