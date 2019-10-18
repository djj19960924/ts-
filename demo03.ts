//boolean类型(boolean)
var flag:boolean = true
//数字类型(number)
var num:number = 123
//字符串类型(string)
var str:string = 'abc'
/**
 * 数组类型(array) ts中定义数组有两种方式：
 * var arr = ['1','2'];  //es5定义数组
 * */
// 1、第一种定义数组的方式 
var arr:number[]=[1,2]
//2、第二种定义数组的方式
var arr:Array<number> = [1,2]
//3、第三种
var arr2:Array<any> = [1,{a:1}]



//元组类型(tuple) 属于数组的一种
// var arr:Array<number> = [1,2]
// console.log(arr)
let arr1:[number,string] = [123,"this is ts"]

//枚举类型(enum)
enum Flag { success=1,error=2 }
let s:Flag = Flag.success
console.log(s)

enum Color {blue,red=3,'orange'}
var c:Color = Color.orange
console.log(c) //1 如果标识符没有赋值 他的值就是下标

//任意类型(any)
var num1:any = 123
num1 = 'str'
num1 = true
console.log(num1)

//null和undefined 其他数据类型的子类型
var num2:undefined;
console.log(num2)
//定义没有赋值就是undefined
var num3:number | undefined;
console.log(num3)

var num4:null;

//void类型：typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值
//es5的定义方法
// function run(){
//     console.log('run')
// }
// run()
//表示方法没有返回任何类型
function run():void{
    console.log('run')
}
run()

//never类型：是其他类型(包括null和undefined)的子类型，表示从不会出现的值
//这意味着声明never的变量智能被never类型所fuzhi2

var a:never;

a = (()=>{
    throw new Error('错误');
    
})()

