/**
 * 2.属性装饰器
 *     属性装饰器表达式会在运行时当做函数被调用,传入下列2各参数：
 *         1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *         2、成员的名字
*/

//类装饰器
function logClass3(params:string){
    return function(target:any){
        console.log(target);
        console.log(params);
    }
}

//属性装饰器
function logProperty(params:any){
    return function(target:any,attr:any){
        console.log('target:',target);
        console.log('attr',attr)
        target[attr] = params;
    }
}

@logClass3('xxxx')
class HttpClient3{
    //修饰成员url的名字
    @logProperty('http://itying.com')
    public url:any | undefined; //定义属性
    
    public url1:any | undefined; //定义属性
    constructor(){
    }
    getData(){
        console.log(this.url)
    }
}
var http4 = new HttpClient3()
http4.getData()
