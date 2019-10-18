namespace shuaiGe{
    export class DeHua{
        public name:string = "liudehua";
        talk(){
            console.log('woshiliudehua');
        }
    }
}

namespace bajie{
    export class DeHua{
        public name:string = "madehua";
        talk(){
            console.log('woshimadehua');
        }
    }
}

let dehua1:shuaiGe.DeHua = new shuaiGe.DeHua();
let dehua2:bajie.DeHua = new bajie.DeHua();
dehua1.talk();
dehua2.talk();
