/**
 * 接口的作用:在面向对象的编程中,接口是一种规范的定义,它定义了行为和动作的规范,
 * 在程序设计里面,接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的
 * 规范,接口不关心这些类的内部状态数据,也不关心这些类里方法的实现细节。它只规定
 * 这批类里必须提供某些方法,提供这些方法的类就可以满足实际需要。ts中的接口类似于
 * java,同时还增加了更灵活的接口类型,包括属性、函数、可索引和类等。
*/

interface Husband{
    sex:string;
    interest:string;
    maiBao?:Boolean
}

let myhusband:Husband = {sex:'男',interest:'看书,做家务',maiBao:true}

console.log(myhusband)

interface SearchMan{
    //定义函数规范 符合返回true
    (source:string,subString:string):boolean
}

let mySeachMan:SearchMan;
mySeachMan = function(source:string,subString:string):boolean{
    let flag = source.search(subString);
    return (flag!=-1);
}

console.log(mySeachMan('gao,fu,shuai,de','pang'))