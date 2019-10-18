//函数的定义

//es5定义函数的方法
    //函数声明
    function run1(){
        return 'run'
    }
    //匿名函数
    var run2 = function(){
        return 'run2'
    }

//匿名函数

var fun2 = function():number{
    return 123
}

console.log(fun2())

//ts中定义方法传参
function getInfo(name:string,age:number):string{
    return `${name} ---- ${age}`
}

console.log(getInfo('zhangsan',20))

var getInfo1 = function(name:string,age:number):string{
    return `${name} ---- ${age}`
}
console.log(getInfo1('zhangsan',20))

//方法可选参数
//es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
function getInfo2(name:string,age?:number):string{
    if(age){
        return `${name} ---- ${age}`
    }else{
        return `${name} ---- 年龄保密`
    }
    
}
console.log(getInfo2('zhangsan'))
console.log(getInfo2('zhangsan',20))
//注意：可选参数必须配置到参数的最后面

//默认参数
//es5里面没法设置默认参数，es6和ts都可以设置默认参数
function getInfo3(name:string,age:number=20):string{
    if(age){
        return `${name} ---- ${age}`
    }else{
        return `${name} ---- 年龄保密`
    }
    
}
console.log(getInfo3('zhangsan'))

//剩余参数
function sum(...result:number[]):number{
    var sum = 0
    for(var i=0;i<result.length;i++){
        sum += result[i]
    }
    return sum
}
console.log(sum(1,2,3,4))
//三点运算符，接收形参传过来的值

//ts函数重载
    //Java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
    //typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的
    //ts为了兼容es5,es6重载的写法和java中有区别

    //es5中出现同名方法，下面的会替换上面的方法
    // function css(config){

    // }
    // function css(config,value){

    // }

    //ts中的重载
    function getInfo4(name:string):string;

    function getInfo4(age:number):number;

    function getInfo4(str:any):any{
        if(typeof str==='string'){
            return "我叫"+str;
        }else{
            return '我的年龄是'+str
        }
    }

    function getInfo5(name:string):string;
    function getInfo5(name:string,age:number):string;
    function getInfo5(name:any,age?:any):any{
        if(age){
            return '我叫：'+name+'我的年龄是'+age
        }else{
            return '我叫：'+name;
        }
    }

    console.log(getInfo5('张三'))

//箭头函数 es6
//this指向的问题  箭头函数里面的this指向问题

setTimeout(()=>{
    console.log('run')
},1000)




    

