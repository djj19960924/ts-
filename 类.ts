//es5里面的类
// function Person(){
//     this.name = '张三'
//     this.age = 20
// }

// var p = new Person()
// console.log(p.name)

//构造函数和原型链里面增加方法
// function Person(){
//     this.name = '张三'
//     this.age = 20
//     this.run = function(){
//         console.log(this.name+'在运动')
//     }
// }
// Person.getInfo = function(){
//     console.log('我是静态方法')
// }
// //原型链上面的属性会被多个实例共享  构造函数不会
// Person.prototype.sex = '男'
// Person.prototype.work = function(){
//     console.log(this.name+"在工作")
// }
// var p = new Person()
// console.log(p.name)
// p.run()
// p.work()

