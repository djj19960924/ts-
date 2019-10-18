"use strict";
var shuaiGe;
(function (shuaiGe) {
    var DeHua = /** @class */ (function () {
        function DeHua() {
            this.name = "liudehua";
        }
        DeHua.prototype.talk = function () {
            console.log('woshiliudehua');
        };
        return DeHua;
    }());
    shuaiGe.DeHua = DeHua;
})(shuaiGe || (shuaiGe = {}));
var bajie;
(function (bajie) {
    var DeHua = /** @class */ (function () {
        function DeHua() {
            this.name = "madehua";
        }
        DeHua.prototype.talk = function () {
            console.log('woshimadehua');
        };
        return DeHua;
    }());
    bajie.DeHua = DeHua;
})(bajie || (bajie = {}));
var dehua1 = new shuaiGe.DeHua();
var dehua2 = new bajie.DeHua();
dehua1.talk();
dehua2.talk();
