/**
 * 4、方法参数装饰器
 *      参数装饰器表达式会在运行时当做函数被调用,可以使用参数装饰器为类的原型增加一些元素数据,传入下列3个参数:
 *          1、对于静态成员来说类的构造函数,对于实例成员是类的原型对象
 *          2、参数的名字
 *          3、参数在函数参数列表中的牵引
 * 
*/

function logParams(params:any){
    return function(target:any,paramsName:any,paramsIndex:any){
        console.log(target);
        console.log(paramsName);
        console.log(paramsIndex);
    }
}

class HttpClient10{
    public url:any | undefined;
    constructor(){

    }
    getData(@logParams('xxxx') uuid:any){
        console.log(uuid)
    }
}

var http10 = new HttpClient10();
http10.getData(1234);