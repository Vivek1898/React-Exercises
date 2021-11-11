

import   Person  from "./11-a-person"

//Export
export class Teacher extends Person{
    //Super class->call constructot of parent
    constructor(name,degree){
      super(name);
      this.degree=degree;  


    }
    
    teach(){
        console.log("teach");
    }

}