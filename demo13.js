"use strict";
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
var Jspang = /** @class */ (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('找');
    };
    return Jspang;
}());
var jspangObj = new Jspang("技术胖", 18, 'coding');
jspangObj.interest();
var JsShuai = /** @class */ (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = 'shuai';
        return _this;
    }
    JsShuai.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('淘钻石');
    };
    JsShuai.prototype.zhuanQian = function () {
        console.log('zhuan');
    };
    return JsShuai;
}(Jspang));
var shuai = new JsShuai('shuai', 5, 'yanjiang');
shuai.interest();
shuai.zhuanQian();
