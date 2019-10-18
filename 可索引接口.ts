//可索引接口,数组、对象(不常用)的约束

//定义数组的方式
// var arr:number[] = [2342,235325]

// var arr9:Array<string> = ['111','222']

interface UserArr{
    [index:number]:string;
}

var arr0:UserArr = ['123','432']
console.log(arr0[0])

//可索引接口 对对象的约束
interface UserObj{
    [index:string]:string;
}
var arr10:UserObj= {name:'20'};