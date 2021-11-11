
//ref to current object
const person={
    name:"vivek",
    walk(){
        console.log(this);
    }
}

//ACess
person.walk();

const walk=person.walk;
walk();
//return undefine

const walk=person.walk.bind(person);
walk();
// Bind SO This point person
// return new instance of object person
// standalone function
// return window object
// strict mode is enabled

