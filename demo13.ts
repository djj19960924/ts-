class Jspang{
    public name:string;
    public age:number;
    public skill:string;

    constructor(name:string,age:number,skill:string){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }

    public interest(){
        console.log('找')
    }
}

let jspangObj:Jspang = new Jspang("技术胖",18,'coding');
jspangObj.interest();

class JsShuai extends Jspang{
    public xingxiang:string = 'shuai';
    public interest(){
        super.interest();
        console.log('淘钻石')
    }
    public zhuanQian(){
        console.log('zhuan')
    }
}
let shuai = new JsShuai('shuai',5,'yanjiang');
shuai.interest();
shuai.zhuanQian();