class Base{
constructor(public name: string){
    this.sayHello();
}
private sayHello(){
    console.log('Hello!')
}
}

class User extends Base{
    constructor(public name: string, public age:number ){
       super(name); 
    }
}
const ivan=new User('Ivan',20);

(ivan as any).sayHello();