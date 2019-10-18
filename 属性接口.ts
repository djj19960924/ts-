//属性接口  对json的约束

//ts中定义方法
function printLabel():void{
    console.log('printLabel')
}
printLabel();

//ts中定义方法传入参数
function printLabel1(label:string):void{
    console.log('printLabel1');
}
printLabel1('hhhhh');

//ts中自定义方法传入参数对json进行约束
function printLabel2(labelInfo:{label:string}):void{
    console.log('printLabel2')
}
//printLabel2({name:'张三'}); /*错误写法*/
printLabel2({label:'张三'});  /*正确写法*/

//对批量方法传入参数进行约束
//接口：行为和动作的规范，对批量方法进行约束

//就是传入对象的约束  属性接口
interface FullName{
    firstName:string; //注意:结束
    secondName:string;
}
function printName(name:FullName){
    //必须传入对象 firstName secondName
    console.log(name.firstName+"--"+name.secondName)
}

function printInfo(info:FullName){
    //必须传入对象 firstName secondName
    console.log(info.firstName+"--"+info.secondName)
}

var obj = { /*传入的参数必须包含firstName secondName*/
    age:20,
    firstName:'张',
    secondName:'三'
}
printName(obj) 
var info = { 
    age:20,
    firstName:'张',
    secondName:'三'
}
printInfo(obj) 
// printName({
//     age:20,
//     firstName:'张',
//     secondName:'三'
// })  /*错误写法,obj里面必须只有firstName和secondName*/

//接口,可选属性

interface FullName1{
    firstName:string;
    secondName?:string;
}

function getName(name:FullName1){
    console.log(name)
}
//参数的顺序可以不一样
getName({
    firstName:'张'
})


interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}
function ajax(config:Config){
    var xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            console.log('成功');
        }
    }
}



