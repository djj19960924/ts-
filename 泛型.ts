// function showData(person:any){
//     return person;
// }

// showData('Lucy').length;
// showData(168).length;
// showData({name:'Lucy',age:'18'}).length;
// showData([12,5,8]).length;

function showData<T>(data:T[]){
    for(let i=0;i<data.length;i++){
        console.log(data)
    }
}

showData<string>(['a','b']);
// showData<number>(18).length;

//同时返回 string类型和 number类型  (代码冗余)
function getData1(value:string):string{
    return value;
}
function getData2(value:number):number{
    return value;
}
//同时返回string,number类型
//传入的参数类型和返回的参数类型可以不一致
function getData(value:any):any{
    return value;
}

//泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
//T表示泛型，具体什么类型是调用这个方法的时候决定的
function getData3<T>(value:T):T{
    return value;
}

getData3<string>('1')

function getData4<T>(value:T):any{
    return value
}

getData4<number>(123); //表示参数必须是number
getData4<string>('123'); //参数必须是string


//泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串a - z两种类型，通过类的泛型来实现

class MinClass{
    public list:number[] = [];
    add(num:number){
        this.list.push(num);
    }
    min():number{
        var minNum = this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var m = new MinClass();
m.add(3);
m.add(22);
m.add(11);
m.add(2);
console.log(m.min())

//类的泛型
class MinClass1<T>{
    public list:T[] = [];
    add(value:T){
        this.list.push(value);
    }
    min():T{
        var minNum = this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

var m1 = new MinClass1<number>(); /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(5);
m1.add(22);
m1.add(11);
m1.add(23);
console.log(m1.min())

var m2 = new MinClass1<string>(); /*实例化类 并且制定了类的T代表的类型是number*/
m2.add('b');
m2.add('m');
m2.add('d');
m2.add('c');
console.log(m2.min())
