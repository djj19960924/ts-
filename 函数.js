"use strict";
//函数的定义
//es5定义函数的方法
//函数声明
function run1() {
    return 'run';
}
//匿名函数
var run2 = function () {
    return 'run2';
};
//匿名函数
var fun2 = function () {
    return 123;
};
console.log(fun2());
//ts中定义方法传参
function getInfo(name, age) {
    return name + " ---- " + age;
}
console.log(getInfo('zhangsan', 20));
var getInfo1 = function (name, age) {
    return name + " ---- " + age;
};
console.log(getInfo1('zhangsan', 20));
//方法可选参数
//es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
function getInfo2(name, age) {
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + " ---- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo2('zhangsan'));
console.log(getInfo2('zhangsan', 20));
//注意：可选参数必须配置到参数的最后面
//默认参数
//es5里面没法设置默认参数，es6和ts都可以设置默认参数
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + " ---- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo3('zhangsan'));
//剩余参数
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4));
function getInfo4(str) {
    if (typeof str === 'string') {
        return "我叫" + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
function getInfo5(name, age) {
    if (age) {
        return '我叫：' + name + '我的年龄是' + age;
    }
    else {
        return '我叫：' + name;
    }
}
console.log(getInfo5('张三'));
//箭头函数 es6
//this指向的问题  箭头函数里面的this指向问题
setTimeout(function () {
    console.log('run');
}, 1000);
