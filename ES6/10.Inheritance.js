//Parent
//EXTEND
//SUPER
import{Teacher} from "./11-b-teacher";
class Person2{
    constructor(name){
        this.name=name;

    }
    walk(){
        console.log("walk");
    }

}
//Child
class Teacher2 extends Person2{
    //Super class->call constructot of parent
    constructor(name,degree){
      super(name);
      this.degree=degree;  


    }
    
    teach(){
        console.log("teach");
    }

}

const teacher=new Teacher("Vivek","CSE")

