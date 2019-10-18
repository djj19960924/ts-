//函数类型接口:对方法传入的参数以及返回值进行约束

//加密的函数的类型接口
interface encrypt{
    //传入两个参数,返回值类型是string
    (key:string,value:string):string;
}

var md5:encrypt = function(key:string,value:string):string{
    //模拟操作
    return key+value;
}
console.log(md5('name','zhangsan'))