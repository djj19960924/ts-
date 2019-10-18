/**
 * 3、方法装饰器
 *      它会应用到方法的属性描述上,可以用来监视,修改或者替换方法定义。
 *      
 *      方法装饰器会在运行时传入下列3个参数:
 *          1、对于静态成员来说是类的构造函数,对于实例成员是类的原型对象
 *          2、成员的方法名字
 *          3、成员的属性描述符
*/

//方法装饰器一
function get(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);

        target.apiUrl = 'xxx';
        target.run = function(){
            console.log('run')
        }
    }
}

class HttpClient8{
    public url:any | undefined;
    constructor(){
    }
    @get('http://www.baidu.com')
    getData(){
        console.log(this.url);
    }
}
var http:any = new HttpClient8();
console.log(http.apiUrl);
http.run();

//方法装饰器二

function get1(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc.value);
        //修改装饰器的方法 把装饰器方法里面传入的所有参数改为string类型

        //1、保存当前的方法
        var oMethod = desc.value;
        desc.value = function(...args:any[]){

            args = args.map((value)=>{
                return String(value);
            })
            console.log(args)
            //修改方法（对象冒充）
            oMethod.apply(this,args)
        }

    }
}

class HttpClient9{
    public url:any | undefined;
    constructor(){
    }
    @get1('http://www.baidu.com')
    getData(...args:any[]){
        console.log(args)
        console.log('我是getData里面的方法');
    }
    
}
var http9 = new HttpClient9();
http9.getData(123,'xxx');
