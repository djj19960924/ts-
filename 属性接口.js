"use strict";
//属性接口  对json的约束
//ts中定义方法
function printLabel() {
    console.log('printLabel');
}
printLabel();
//ts中定义方法传入参数
function printLabel1(label) {
    console.log('printLabel1');
}
printLabel1('hhhhh');
//ts中自定义方法传入参数对json进行约束
function printLabel2(labelInfo) {
    console.log('printLabel2');
}
//printLabel2({name:'张三'}); /*错误写法*/
printLabel2({ label: '张三' }); /*正确写法*/
function printName(name) {
    //必须传入对象 firstName secondName
    console.log(name.firstName + "--" + name.secondName);
}
function printInfo(info) {
    //必须传入对象 firstName secondName
    console.log(info.firstName + "--" + info.secondName);
}
var obj = {
    age: 20,
    firstName: '张',
    secondName: '三'
};
printName(obj);
var info = {
    age: 20,
    firstName: '张',
    secondName: '三'
};
printInfo(obj);
function getName(name) {
    console.log(name);
}
//参数的顺序可以不一样
getName({
    firstName: '张'
});
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('成功');
        }
    };
}
