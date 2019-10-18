interface ConfigFn{
    (val1:string,value2:string):string;
}

var setData:ConfigFn = function(value1:string,value2:string):string{
    return value1+value2;
}

setData('name','张三');

interface ConfigFn1{
    <T>(value:T):T;
}

var getData6:ConfigFn1 = function<T>(value:T):T{
    return value;
}

getData6<string>('张三');

