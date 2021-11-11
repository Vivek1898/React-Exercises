
const person2={
    name:"Vivek",
    walk(){
        console.log("walk");
    }
};
//Better to use class

class Person{
    constructor(name){
        this.name=name;

    }
    walk(){
        console.log("walk");
    }

}
const person=new person("vivek")